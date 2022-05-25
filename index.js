import 'dotenv/config'
import colors from 'colors';
import express from "express";
import mongoose from 'mongoose';
import authRoutes from './src/routes/authRoutes.js';
import hotelsRoutes from './src/routes/hotelsRoutes.js';
import roomsRoutes from './src/routes/roomsRoutes.js';
import userRoutes from './src/routes/usersRoutes.js';
import cookieParser from 'cookie-parser';
const app = express();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(colors.bgBlue.bold('database telah terkoneksi'))
    } catch (error) {
        throw error
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected')
});

mongoose.connection.on('connected', () => {
    console.log('mongodb Connect')
})



//MIDDLEWARE
app.use(cookieParser())
app.use(express.json())


//ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/room', roomsRoutes);


app.use((error, req, res, next) => {
    const errorStatus = error.status || 500
    const errorMessage = error.message || 'something wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
})


app.listen(process.env.PORT, () => {
    connect()
    console.log(colors.bgGreen.bold('Server telah berjalan di port ' + process.env.PORT))
})