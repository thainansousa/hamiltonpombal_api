import {Request, Response} from 'express'


const Anuncio = require('../../src/models/AnuncioModel')


class anuncioController {

    async novo(req:Request, res: Response) {
        const {titulo, urls, informacoes, patrocinado, categoria} = req.body

        try {
            const quantidadeCadastrada = await Anuncio.find()
            const novoAnuncio = await new Anuncio({titulo,urls, informacoes, 
                patrocinado, ordem_id: quantidadeCadastrada.length + 1, categoria}).save()
            console.log(`Novo anuncio cadastrado com sucesso: ${novoAnuncio}`)
            res.json({error: false, message: 'Novo anuncio cadastrado com sucesso.'})
        } catch (error) {
            console.log(error)
            res.json({error: true, message: 'Houve um erro ao tentar cadastrar um novo anuncio!'})
        }
    }

    async buscarTodos(req:Request, res:Response){
        try {
            const anuncios = await Anuncio.find()
            res.json({error: false, anuncios})
        } catch (error) {
            console.log(`Erro ao buscar todos os anuncios: ${error}`)
            res.json({error: true, message: 'Houve um erro ao tentar buscar anuncios!'})
        }
    }


    async buscarAnunciosPorCategoria(req: Request, res:Response) {

        const {categoria} = req.params

        try {
            const anunciosPorCategoria = await Anuncio.find({categoria: categoria})
            res.json({error: false, anunciosPorCategoria})
        } catch (error) {
            console.log(`Erro ao buscar anuncios por categoria: ${error}`)
            res.json({error: true, message: 'Houve um erro ao tentar buscar anuncios por categoria!'})

        }
    }
}


module.exports = new anuncioController()