// Importação de módulos
import * as yup from 'yup';
import { Produto } from '../../schemas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidarConsulta } from '../../middlewares/ValidarConsulta';


interface IParamsProps { 
    id?: string; 
}
interface IBodyProps {
    nome: string;
    descricao?: string;
    categorias?: string[];
    estoque_disponivel?: number;
    estoque_minimo?: number;
    marca?: string;
    fornecedor?: string;
    valor_custo: number;
    valor_venda: number;
    imagens?: string[];
    ativo?: boolean;
}


const validarAtualizar = ValidarConsulta((obterEsquema) => ({
    params: obterEsquema<IParamsProps>(yup.object().shape({
        id: yup.string().strict().optional()
    })),
    body: obterEsquema<IBodyProps>(yup.object().shape({
        nome: yup.string().strict().max(50).required(),
        descricao: yup.string().strict().optional().max(200),
        categorias: yup.array().strict().optional(),
        estoque_disponivel: yup.number().optional(),
        estoque_minimo: yup.number().optional(),
        marca: yup.string().strict().min(3).max(100).optional(),
        fornecedor: yup.string().strict().min(3).max(100).optional(),
        valor_custo: yup.number().required(),
        valor_venda: yup.number().required(),
        imagens: yup.array().strict().optional(),
        ativo: yup.boolean().optional()
    }))
}));


const atualizar = async (request: Request<{}, {}, IBodyProps>, response: Response) => {   
    const parametros: IParamsProps = request.params;
    const dados: IBodyProps = request.body;
    
    // Regras de negócio
    const categoriaExistente = await Produto.findOne({ nome: dados.nome });
    if (categoriaExistente) return response.sendStatus(400).json({ erro: 'Produto já existe.' });
    
    const resposta = await Produto.findByIdAndUpdate(parametros.id, dados);
    if (!resposta) return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: 'Falha interna do servidor' });

    return response.status(StatusCodes.NO_CONTENT).end();
};


export { validarAtualizar, atualizar };
