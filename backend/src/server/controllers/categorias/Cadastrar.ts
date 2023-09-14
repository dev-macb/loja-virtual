// Importação de módulos
import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Categoria } from '../../schemas/Categoria';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IBodyProps {
    nome: string;
    descricao: string;
}


const validarCadastrar = ValidarConsulta((obterEsquema) => ({
    body: obterEsquema<IBodyProps>(yup.object().shape({
        nome: yup.string().strict().required().max(50),
        descricao: yup.string().strict().required().max(200)
    }))
}));


const cadastrar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const dados: IBodyProps = request.body;
    
    // Regras de negócio
    const categoriaExistente = await Categoria.findOne({ nome: dados.nome });
    if (categoriaExistente) return response.status(StatusCodes.BAD_REQUEST).json({ erro: 'Categoria já registrada.' });

    const novoCategoria = await new Categoria(dados).save().then((categoria) => categoria.toObject());
    if (!novoCategoria) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.CREATED).json({ id: novoCategoria._id }).end();
};


export { validarCadastrar, cadastrar };
