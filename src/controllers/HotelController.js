import Hotel from "../models/Hotel.js";



// CREATE HOTELS
export const CreateHotels = async (req, res) => {

    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err)
    }
}


// UPDATE HOTELS        
export const UpdateHotels = async (req, res, next) => {

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json({ updateHotel })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// DELETE HOTELS
export const DeleteHotels = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'hotell telah terhapus' })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// GET BY ID HOTELS
export const GetSingleHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


// GET ALL HOTEL
export const GetAllHotels = async (req, res, next) => {



    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)

    } catch (error) {
        next(error)
    }
}