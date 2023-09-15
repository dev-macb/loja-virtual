// Importação de módulos
import mongoose, { Types, Schema, Document } from 'mongoose';


interface IProduto extends Document {
    nome: string;
    descricao: string;
    categorias?: string[];
    estoque_disponivel?: number;
    estoque_minimo?: number;
    marca?: string;
    fornecedor?: string;
    valor_custo: number;
    valor_venda: number;
    imagens?: string[];
    ativo?: boolean;
}


const Produto = mongoose.model<IProduto>('produtos', new Schema<IProduto>({
    nome:               { type: String, required: true, minlength: 3, maxlength: 50 },
    descricao:          { type: String, minlength: 3, maxlength: 200 },
    categorias:         [ { type: Types.ObjectId, ref: 'categorias' } ],
    estoque_disponivel: { type: Number, min: 0 },
    estoque_minimo:     { type: Number, min: 0 },
    marca:              { type: String, minlength: 3, maxlength: 100 },
    fornecedor:         { type: String, minlength: 3, maxlength: 100 },
    valor_custo:        { type: Number, required: true, min: 0 },
    valor_venda:        { type: Number, required: true, min: 0 },
    imagens:            [ { type: String } ],
    ativo:              { type: Boolean, default: true },
}, { versionKey: false, timestamps: false }));


export { IProduto, Produto };
