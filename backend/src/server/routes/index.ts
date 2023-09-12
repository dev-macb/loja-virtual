// Importação de módulos
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { TesteController } from '../controllers';


const rotiador = Router();


rotiador.get('/', (_, response) => {
    return response.status(StatusCodes.OK).send('Loja Virtal');
});

rotiador.post('/teste', TesteController.validar, TesteController.testar);


export { rotiador };
