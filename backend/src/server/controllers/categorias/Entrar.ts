// Importação de módulos
import * as yup from 'yup';
import { Request, Response } from 'express';
import { Usuario } from '../../schemas/Usuario';
import { StatusCodes } from 'http-status-codes';
import { JWTService } from '../../services/JWTService';
import { HashService } from '../../services/HashService';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IBodyProps {
    email: string;
    senha: string;
}


const validarEntrar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<IBodyProps>(yup.object().shape({
        email: yup.string().strict().required().min(5).email().max(200),
        senha: yup.string().strict().required().min(5).max(200),
    }))
}));


const entrar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const dados: IBodyProps = request.body;
    
    const usuarioExistente = await Usuario.findOne({ email: dados.email }).select('+senha +administrador');
    if (!usuarioExistente) return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'E-mail ou senha são inválidos' });

    const senhaCorreta = await HashService.comparar(dados.senha, usuarioExistente.senha);
    if (!senhaCorreta) return response.status(StatusCodes.UNAUTHORIZED).json({ erro: 'E-mail ou senha são inválidos' });

    const tokenAcesso = JWTService.gerar({ id: usuarioExistente._id, administrador: usuarioExistente.administrador || false });
    if (tokenAcesso === 'JWT_SECRET_NOT_FOUND') return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erros: 'Erro ao gerar o token de acesso' });

    return response.status(StatusCodes.OK).json({ tokenAcesso });
};


export { validarEntrar, entrar };
