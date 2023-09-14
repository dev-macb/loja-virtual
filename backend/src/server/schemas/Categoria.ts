// Importação de módulos
import mongoose, { Schema, Document } from 'mongoose';


interface ICategoria extends Document {
    nome: string;
    descricao?: string;
}


const Categoria = mongoose.model<ICategoria>('categorias', new Schema<ICategoria>({
    nome:      { type: String, required: true, unique: true, maxlength: 50 },
    descricao: { type: String, maxlength: 200 }
}, { versionKey: false, timestamps: false }));


export { ICategoria, Categoria };
