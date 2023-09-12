// Importação de módulos
import * as yup from 'yup';
import { Request, Response } from 'express';
import { Usuario } from '../../schemas/Usuario';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IParamsProps { 
    id?: string; 
}
interface IBodyProps {
    cpf?: string;
    nome?: string;
    sobrenome?: string;
    email?: string;
    senha?: string;
    administrador?: boolean;
}


const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParamsProps>(yup.object().shape({
        id: yup.string().strict().optional()
    })),
    body: obterEsquema<IBodyProps>(yup.object().shape({
        cpf: yup.string().strict().optional().max(15),
        nome: yup.string().strict().optional().max(50),
        sobrenome: yup.string().strict().optional().max(200),
        email: yup.string().strict().optional().min(5).email().max(200),
        senha: yup.string().strict().optional().min(5).max(200),
        administrador: yup.boolean().optional().default(false)
    }))
}));


const atualizar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const parametros: IParamsProps = request.params;
    const dados: IBodyProps = request.body;
    
    // Regras de negócio
    const cpfExistente = await Usuario.findOne({ cpf: dados.cpf });
    if (cpfExistente) return response.sendStatus(400).json({ erro: 'CPF já restridado.' });

    const usuarioExistente = await Usuario.findOne({ email: dados.email });
    if (usuarioExistente) return response.sendStatus(400).json({ erro: 'E-mail já restridado.' });
    
    const resposta = await Usuario.findByIdAndUpdate(parametros.id, dados);
    if (!resposta) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.NO_CONTENT).end();
};


export { validarAtualizar, atualizar };
