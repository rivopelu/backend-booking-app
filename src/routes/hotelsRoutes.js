import express from "express";
import { CreateHotels, DeleteHotels, GetAllHotels, GetSingleHotel, UpdateHotels } from '../controllers/HotelController.js'
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()

// CREATE
router.post('/', verifyAdmin, CreateHotels)
// UPDATE
router.put('/update/:id', verifyAdmin, UpdateHotels)

// DELETE
router.delete('/delete/:id', verifyAdmin, DeleteHotels)

// GET
router.get('/:id', GetSingleHotel)
// GET ALL
router.get('/', GetAllHotels)



export default router