import express from "express";

const router = express.Router()


const usuarioController = require('../controllers/usuarioController')
const anuncioController = require('../controllers/anuncioController')



router.post('/usuario', usuarioController.novo)
router.post('/anuncio', anuncioController.novo)


module.exports = router