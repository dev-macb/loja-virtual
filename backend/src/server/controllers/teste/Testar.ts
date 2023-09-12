// Importação de módulos
import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IBodyProps {
    nome: string;
    descricao?: string;
}


const validar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<IBodyProps>(yup.object().shape({
        nome: yup.string().strict().required().max(50),
        descricao: yup.string().strict().optional().max(200)
    }))
}));


const testar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const dados: IBodyProps = request.body;

    console.log(dados);

    return response.status(StatusCodes.OK);
};


export { validar, testar };
