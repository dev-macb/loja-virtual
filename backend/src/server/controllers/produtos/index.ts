// Importação de módulos
import * as deletar from './Deletar';
import * as cadastrar from './Cadastrar';
import * as atualizar from './Atualizar';
import * as buscarPorId from './BuscarPorId';
import * as buscarTodas from './BuscarTodos';


const ProdutoController = {
    ...deletar,
    ...cadastrar,
    ...atualizar,
    ...buscarPorId,
    ...buscarTodas,
};


export { ProdutoController };
