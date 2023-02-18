import express from 'express';
import morgan from 'morgan'

require('./database/connection')

const router = require('./routes/routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


app.use('/',router)

app.listen(3000, () => console.log('Listening 3000'));