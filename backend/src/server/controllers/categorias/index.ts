// Importação de módulos
import * as deletar from './Deletar';
import * as cadastrar from './Cadastrar';
import * as atualizar from './Atualizar';
import * as buscarPorId from './BuscarPorId';
import * as buscarTodas from './BuscarTodas';


const CategoriaController = {
    ...deletar,
    ...cadastrar,
    ...atualizar,
    ...buscarPorId,
    ...buscarTodas,
};


export { CategoriaController };
