// Importação de módulos
import * as yup from 'yup';
import { Produto } from '../../schemas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IQueryProps {
    pagina?: number;
    limite?: number;
    filtro?: string;
  }
  
  
const validarBuscarTodas = ValidarConsulta(obterEsquema => ({
    query: obterEsquema<IQueryProps>(yup.object().shape({
        pagina: yup.number().integer().optional().moreThan(0).default(1),
        limite: yup.number().integer().optional().moreThan(0).default(10),
        filtro: yup.string().optional().default('')
    }))
}));


const buscarTodas = async (request: Request<{}, {}, {}, IQueryProps>, response: Response) => {   
    // const parametros: IQueryProps = request.query;
    
    const resultado = await Produto.find();

    return response.status(StatusCodes.OK).json(resultado).end();
};


export { validarBuscarTodas, buscarTodas };
