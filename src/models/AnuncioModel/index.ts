import mongoose, { Schema } from "mongoose"

type anuncioModel = {
    titulo: string;
    urls: Array<{}>;
    informacoes: string;
    patrocinado: boolean;
    ordem_id: number;
    categoria: string;
}

const anuncioSchema = new Schema<anuncioModel>({
    titulo: { type: String, required: true },
    urls: { type: [], required: true },
    informacoes: { type: String, required: true },
    patrocinado: {type: Boolean, default: false},
    ordem_id: {type: Number, required: true},
    categoria: { type: String, required: true }
  });
  

const Anuncios = mongoose.model('Anuncios', anuncioSchema)

module.exports = Anuncios