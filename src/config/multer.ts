export {};

const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..',  '..',  'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req:any, file:any, cb:any) => {
            cb(null,path.resolve(__dirname, '..',  '..',  'tmp', 'uploads'))
        },
        filename: (eq:any, file:any, cb:any) => {
            crypto.randomBytes(16, (err:any, hash:any) =>{
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`

                cb(null, fileName)
            })
        },
    }),
}