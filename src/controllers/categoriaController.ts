import {Request, Response} from 'express'


const Categoria = require('../../src/models/CategoriaModel')

class categoriaController {
    async novo(req: Request, res: Response) {

        const {nome} = req.body

        try {
            const nomeDaCategoriaFormatado = nome.toUpperCase()
            const novaCategoria = await Categoria({nome: nomeDaCategoriaFormatado}).save()
            res.json({error: false, message: 'Nova categoria cadastrada com sucesso.'})
        } catch (error) {
            console.log(`Houve um erro ao tentar cadastrar uma nova categoria: ${error}`)
            res.json({error: true, message: 'Houve um erro ao tentar cadastrar uma nova categoria.'})
        }
    }

    async buscarTodasCategorias(req: Request, res: Response){
        try {
            const categorias = await Categoria.find()
            res.json({error: false, categorias})
        } catch (error) {
            console.log(`Houve um eror ao buscar todas as categorias: ${error}`)
            res.json({error: true, message: 'Houve um erro ao buscar todas as categorias.'})
        }
    }
}


module.exports = new categoriaController()