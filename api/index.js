import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("mondodb is connected");
})
.catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

app.listen(3002, () => {
    console.log("server listening on port 3002!!");
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);