// Importação de módulos
import * as yup from 'yup';
import { Produto } from '../../schemas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IParamProps {
    id?: string;
}


const validarBuscarPorId = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParamProps>(yup.object().shape({
        id: yup.string().strict().required()
    }))
}));


const buscarPorId = async (request: Request<IParamProps>, response: Response) => {   
    const parametros: IParamProps = request.params;
    
    const usuario = await Produto.findById({ _id: parametros.id });

    return response.status(StatusCodes.OK).json(usuario).end();
};


export { validarBuscarPorId, buscarPorId };
