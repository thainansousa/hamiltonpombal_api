import express from "express";

const router = express.Router()


const usuarioController = require('../controllers/usuarioController')
const anuncioController = require('../controllers/anuncioController')




// Rotas Controller Usuario
router.post('/usuario', usuarioController.novo)



//Rotas Controller Anuncios
router.get('/anuncio', anuncioController.buscarTodos)
router.get('/anuncio/:categoria', anuncioController.buscarAnunciosPorCategoria)
router.post('/anuncio', anuncioController.novo)


module.exports = router