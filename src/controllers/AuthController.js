import 'dotenv/config'
import User from "../models/User.js"
import bcryptjs from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken'
export const registerAuth = async (req, res, next) => {
    try {

        const password = req.body.password;
        const salt = bcryptjs.genSaltSync(10);
        const hashPass = bcryptjs.hashSync(password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
            createdAt: new Date().getTime()
        })

        await newUser.save()
        res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
}


export const loginAuth = async (req, res, next) => {
    try {

        const user = await User.findOne({ username: req.body.username });
        if (!user) {

            return next(createError(404, "user tidak ada"))
        }


        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return next(createError(400, "login Gagal"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const { password, isAdmin, ...otherDetails } = user._doc;

        return res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails })


    } catch (err) {
        next(err)
    }
}