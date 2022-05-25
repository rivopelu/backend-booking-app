import express from "express";
import { createRoom, updateRoom, getSingleRoom, deleteRoom, getAllRoom } from "../controllers/RoomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()

router.post('/:hotelId', verifyAdmin, createRoom);
router.put('/update/:id', verifyAdmin, updateRoom);
router.delete('/delete/:id/:hotelId', verifyAdmin, deleteRoom);
router.get('/:id', getSingleRoom)
router.get('/', getAllRoom)



export default router