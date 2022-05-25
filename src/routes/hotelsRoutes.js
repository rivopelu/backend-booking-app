import express from "express";
import { CreateHotels, DeleteHotels, GetAllHotels, GetSingleHotel, UpdateHotels } from '../controllers/HotelController.js'


const router = express.Router()

// CREATE
router.post('/', CreateHotels)
// UPDATE
router.put('/update/:id', UpdateHotels)
// DELETE
router.delete('/delete/:id', DeleteHotels)
// GET
router.get('/:id', GetSingleHotel)
// GET ALL
router.get('/', GetAllHotels)



export default router