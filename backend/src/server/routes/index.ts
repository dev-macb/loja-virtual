// Importação de módulos
import { Router } from 'express';
import { Autorizacao } from '../middlewares';
import { UsuarioController } from '../controllers';
import { CPFService } from '../services/CPFService';


const rotiador = Router();


// Rotas de controle de usuários
rotiador.post('/usuarios', UsuarioController.validarCadastrar, UsuarioController.cadastrar);
rotiador.post('/usuarios/entrar', UsuarioController.validarEntrar, UsuarioController.entrar);
rotiador.delete('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarDeletar, UsuarioController.deletar);
rotiador.put('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarAtualizar, UsuarioController.atualizar);
rotiador.get('/usuarios/', Autorizacao.administrador, UsuarioController.validarBuscarTodos, UsuarioController.buscarTodos);
rotiador.get('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarBuscarPorId, UsuarioController.buscarPorId);


// Rotas Auxiliares
rotiador.get('/cpf/gerar', (_, response) => { return response.status(200).json({ cpf: CPFService.gerar() }); });


export { rotiador };