import jwt from 'jsonwebtoken'
import { createError } from './error.js';


export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, 'akses di tolak'))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, 'Token tidak valid'));
        req.user = user;
        next()
    })
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            if (err) return next(createError(403, 'akses di tolak'))
        }
    })
}