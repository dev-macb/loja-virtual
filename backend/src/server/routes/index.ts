// Importação de módulos
import { Router } from 'express';
import { UsuarioController } from '../controllers';


const rotiador = Router();


// Rotas de controle de usuários
rotiador.post('/usuarios', UsuarioController.validarCadastrar, UsuarioController.cadastrar);
rotiador.delete('/usuarios/:id', UsuarioController.validarDeletar, UsuarioController.deletar);
rotiador.put('/usuarios/:id', UsuarioController.validarAtualizar, UsuarioController.atualizar);
rotiador.get('/usuarios/', UsuarioController.validarBuscarTodos, UsuarioController.buscarTodos);
rotiador.get('/usuarios/:id', UsuarioController.validarBuscarPorId, UsuarioController.buscarPorId);


export { rotiador };
