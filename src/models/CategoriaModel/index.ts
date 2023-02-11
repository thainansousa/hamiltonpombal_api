import mongoose, {Schema} from 'mongoose'


type categoriaModel = {
    nome: string;
}

const categoriaSchema = new Schema<categoriaModel>({
    nome: {type: String, required: true}
})

const Categoria = mongoose.model('Categoria', categoriaSchema)

module.exports = Categoria