import User from "../models/User.js";






// UPDATE UserS        
export const UpdateUsers = async (req, res, next) => {

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json({ updateUser })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// DELETE UserS
export const DeleteUsers = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User telah terhapus' })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// GET BY ID UserS
export const GetSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


// GET ALL User
export const GetAllUsers = async (req, res, next) => {



    try {
        const users = await User.find()
        res.status(200).json(users)

    } catch (error) {
        next(error)
    }
}