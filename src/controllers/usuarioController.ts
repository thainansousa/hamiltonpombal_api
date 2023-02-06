import { Request, Response } from "express"

const Usuario = require('../../src/models/UserModel')

class usuarioController {
    async novo(req:Request, res: Response){
        const {name, email, password} = req.body
        try {
            const novoUsuario = await new Usuario({name, email, password}).save()
            console.log('Cadastrado um novo usuário')
            res.json({error: false, message: `O usuario ${name} foi cadastrado com sucesso!`})
        } catch (error) {
            console.log(error)
            res.json({error: true, message: 'Houve um erro ao tentar cadastrar um novo usuário'})
        }
    }
}

module.exports = new usuarioController()