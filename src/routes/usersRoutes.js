import express from "express";
import { UpdateUsers, DeleteUsers, GetSingleUser, GetAllUsers } from "../controllers/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

// router.get('/check', verifyToken, (req, res, next) => {
//     res.send('hello user')
// })
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('hello user you can delete your account')
// })
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('hello admin you can delete your account')
// })






router.put('/:id', verifyUser, UpdateUsers);
router.delete('/delete/:id', verifyUser, DeleteUsers)
router.get('/:id', verifyUser, GetSingleUser)
router.get('/', verifyAdmin, GetAllUsers)

export default router