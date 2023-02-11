import express from "express";

const router = express.Router()


const usuarioController = require('../controllers/usuarioController')
const anuncioController = require('../controllers/anuncioController')
const categoriaController = require('../controllers/categoriaController')


// Rotas Controller Usuarios
router.post('/usuario', usuarioController.novo)



//Rotas Controller Anuncios
router.get('/anuncio', anuncioController.buscarTodos)
router.get('/anuncio/:categoria', anuncioController.buscarAnunciosPorCategoria)
router.post('/anuncio', anuncioController.novo)


// Rotas Controlller Categorias
router.get('/categoria', categoriaController.buscarTodasCategorias)
router.post('/categoria', categoriaController.novo)


module.exports = router