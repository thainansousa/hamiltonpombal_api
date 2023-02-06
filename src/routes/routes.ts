import express from "express";

const router = express.Router()


const usuarioController = require('../controllers/usuarioController')


router.post('/usuario', usuarioController.novo)


module.exports = router