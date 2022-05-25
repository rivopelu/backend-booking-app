import express from "express";
import { UpdateUsers, DeleteUsers, GetSingleUser, GetAllUsers } from "../controllers/UserController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

router.get('/check', verifyToken, (req, res, next) => {
    res.send('hello user')
})
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('hello user you can delete your account')
})
router.put('/:id', UpdateUsers);
router.delete('/delete/:id', DeleteUsers)
router.get('/:id', GetSingleUser)
router.get('/', GetAllUsers)

export default router