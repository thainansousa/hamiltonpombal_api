import mongoose, { Schema } from "mongoose"

type anuncioModel = {
    title: string;
    urls: Array<{}>;
    informations: string;
}

const anuncioSchema = new Schema<anuncioModel>({
    title: { type: String, required: true },
    urls: { urls: Array, required: true },
    informations: { type: String, required: true }
  });
  

const Anuncios = mongoose.model('Anuncios', anuncioSchema)

module.exports = Anuncios