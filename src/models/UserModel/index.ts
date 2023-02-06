import mongoose, { Schema } from "mongoose"

type UserModel = {
    name: string;
    email: string;
    password: string;

}

const userSchema = new Schema<UserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  });
  

const Usuario = mongoose.model('Usuario', userSchema)

module.exports = Usuario