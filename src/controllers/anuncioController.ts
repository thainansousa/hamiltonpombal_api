import {Request, Response} from 'express'


const Anuncio = require('../../src/models/AnuncioModel')


class anuncioController {
    async novo(req:Request, res: Response) {
        const {titulo, urls, informacoes, patrocinado} = req.body

        try {
            const quantidadeCadastrada = await Anuncio.find()
            const novoAnuncio = await new Anuncio({titulo,urls, informacoes, patrocinado, ordem_id: quantidadeCadastrada + 1}).save()
            console.log(`Novo anuncio cadastrada com sucesso: ${novoAnuncio}`)
            res.json({error: false, message: 'Novo anuncio cadastrada com sucesso.'})
        } catch (error) {
            console.log(error)
            res.json({error: true, message: 'Houve um erro ao tentar cadastrar uma nova anuncio!'})
        }
    }
}


module.exports = new anuncioController()