import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Number, required: true },
    updatedAt: { type: Number }
})


export default mongoose.model('User', UserSchema)