const mongoose = require('mongoose')

const localURL = 'mongodb://127.0.0.1:27017/hamiltonpombal'


async function databaseConnection(){
    try {
        await mongoose.connect(localURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado ao banco de dados com sucesso!')
    } catch (error) {
        console.log(error)
    }
}


databaseConnection()