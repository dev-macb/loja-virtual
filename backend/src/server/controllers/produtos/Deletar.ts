// Importação de módulos
import * as yup from 'yup';
import { Produto } from '../../schemas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares';


interface IParamsProps { 
    id?: string; 
}


const validarDeletar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParamsProps>(yup.object().shape({
        id: yup.string().strict().optional()
    }))
}));


const deletar = async (request: Request<IParamsProps>, response: Response) => {   
    const parametros: IParamsProps = request.params;
    
    const resposta = await Produto.findByIdAndDelete(parametros.id);
    if (!resposta) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.NO_CONTENT).end();
};


export { validarDeletar, deletar };
