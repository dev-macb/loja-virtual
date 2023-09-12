// Importação de módulos
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import './services/YupService';
import { rotiador } from './routes';


const servidor = express();
servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use('/api', rotiador);
servidor.use(express.urlencoded({ extended: true }));


export { servidor };
