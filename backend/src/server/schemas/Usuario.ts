// Importação de módulos
import mongoose, { Schema, Document } from 'mongoose';


interface IUsuario extends Document {
    cpf: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    administrador?: boolean;
}


const Usuario = mongoose.model<IUsuario>('usuarios', new Schema<IUsuario>({
    cpf:           { type: String, required: true, unique: true },
    nome:          { type: String, required: true },
    sobrenome:     { type: String, required: true },
    email:         { type: String, required: true, unique: true, lowercase: true },
    senha:         { type: String, required: true, select: false },
    administrador: { type: Boolean, default: false, select: false }
}, { versionKey: false, timestamps: false }));


export { IUsuario, Usuario };
