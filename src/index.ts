import express from 'express';

require('./database/connection')

const router = require('./routes/routes')

const app = express();
app.use(express.json());


app.use('/',router)

app.listen(3000, () => console.log('Listening 3000'));