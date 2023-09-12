// Importação de módulos
import * as yup from 'yup';
import { Request, Response } from 'express';
import { Usuario } from '../../schemas/Usuario';
import { StatusCodes } from 'http-status-codes';
import { CPFService } from '../../services/CPFService';
import { HashService } from '../../services/HashService';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IBodyProps {
    cpf: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    administrador?: boolean;
}


const validarCadastrar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<IBodyProps>(yup.object().shape({
        cpf: yup.string().strict().required().max(15),
        nome: yup.string().strict().required().max(50),
        sobrenome: yup.string().strict().required().max(200),
        email: yup.string().strict().required().min(5).email().max(200),
        senha: yup.string().strict().required().min(5).max(200),
        administrador: yup.boolean().optional().default(false)
    }))
}));


const cadastrar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const dados: IBodyProps = request.body;
    
    // Regras de negócio
    const cpfValido = CPFService.validar(dados.cpf);
    if (!cpfValido) return response.sendStatus(400).json({ erro: 'CPF inválido' });

    const cpfExistente = await Usuario.findOne({ cpf: dados.cpf });
    if (cpfExistente) return response.sendStatus(400).json({ erro: 'CPF já restridado.' });

    const usuarioExistente = await Usuario.findOne({ email: dados.email });
    if (usuarioExistente) return response.sendStatus(400).json({ erro: 'E-mail já restridado.' });

    const hash = await HashService.criptografar(dados.senha);

    const novoUsuario = await new Usuario({ ...dados, senha: hash }).save().then((usuario) => usuario.toObject());
    if (!novoUsuario) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.CREATED).json({ id: novoUsuario._id }).end();
};


export { validarCadastrar, cadastrar };
