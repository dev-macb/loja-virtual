// Importação de módulos
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import './services/YupService';
import mongoose from 'mongoose';
import { rotiador } from './routes';


const servidor = express();
servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use('/api', rotiador);
servidor.use(express.urlencoded({ extended: true }));

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://macb:1258@cluster0.fl9oocf.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', (erro: Error) => console.log(erro));


export { servidor };
