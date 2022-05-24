import express from "express";


const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'berhasil'
    })
})
router.get('/register', (req, res) => {
    res.status(200).json({
        message: 'register endpoint'
    })
})


export default router