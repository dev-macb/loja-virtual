// Importação de módulos
import * as deletar from './Deletar';
import * as cadastrar from './Cadastrar';
import * as atualizar from './Atualizar';
import * as autenticar from './Entrar';
import * as buscarPorId from './BuscarPorId';
import * as buscarTodos from './BuscarTodos';


const UsuarioController = {
    ...deletar,
    ...cadastrar,
    ...atualizar,
    ...autenticar,
    ...buscarPorId,
    ...buscarTodos,
};


export { UsuarioController };
