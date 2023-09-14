// Importação de módulos
import { Router } from 'express';
import { Autorizacao } from '../middlewares';
import { CPFService } from '../services/CPFService';
import { UsuarioController, CategoriaController } from '../controllers';


const rotiador = Router();


// Rotas de controle de usuários
rotiador.post('/usuarios/entrar', UsuarioController.validarEntrar, UsuarioController.entrar);
rotiador.post('/usuarios/novo', UsuarioController.validarCadastrar, UsuarioController.cadastrar);
rotiador.delete('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarDeletar, UsuarioController.deletar);
rotiador.put('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarAtualizar, UsuarioController.atualizar);
rotiador.get('/usuarios/', Autorizacao.administrador, UsuarioController.validarBuscarTodos, UsuarioController.buscarTodos);
rotiador.get('/usuarios/:id', Autorizacao.administrador, UsuarioController.validarBuscarPorId, UsuarioController.buscarPorId);


// Rotas de controle de usuários
rotiador.post('/categorias', Autorizacao.administrador, CategoriaController.validarCadastrar, CategoriaController.cadastrar);
rotiador.delete('/categorias/:id', Autorizacao.administrador, CategoriaController.validarDeletar, CategoriaController.deletar);
rotiador.put('/categorias/:id', Autorizacao.administrador, CategoriaController.validarAtualizar, CategoriaController.atualizar);
rotiador.get('/categorias/:id', Autorizacao.administrador, CategoriaController.validarBuscarPorId, CategoriaController.buscarPorId);
rotiador.get('/categorias', Autorizacao.administrador, CategoriaController.validarBuscarTodas, CategoriaController.buscarTodas);


// Rotas Auxiliares
rotiador.get('/cpf/gerar', (_, response) => { return response.status(200).json({ cpf: CPFService.gerar() }); });


export { rotiador };