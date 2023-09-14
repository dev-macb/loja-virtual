// Importação de módulos
import * as yup from 'yup';
import { Categoria } from '../../schemas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IParamsProps { 
    id?: string; 
}
interface IBodyProps {
    nome?: string;
    descricao?: string;
}


const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParamsProps>(yup.object().shape({
        id: yup.string().strict().optional()
    })),
    body: obterEsquema<IBodyProps>(yup.object().shape({
        nome: yup.string().strict().optional().max(50),
        descricao: yup.string().strict().optional().max(200)
    }))
}));


const atualizar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const parametros: IParamsProps = request.params;
    const dados: IBodyProps = request.body;
    
    // Regras de negócio
    const categoriaExistente = await Categoria.findOne({ nome: dados.nome });
    if (categoriaExistente) return response.sendStatus(400).json({ erro: 'Categoria já existe.' });
    
    const resposta = await Categoria.findByIdAndUpdate(parametros.id, dados);
    if (!resposta) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.NO_CONTENT).end();
};


export { validarAtualizar, atualizar };
