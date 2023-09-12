// Importação de módulos
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';


const rotiador = Router();


rotiador.get('/', (_, response) => {
    return response.status(StatusCodes.OK).send('Loja Virtal');
});


export { rotiador };
