import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import file from './controller.js'

const app = express()
const PORT = 6015

app.use(express.json())
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

mongoose.connect('mongodb://localhost:27017/Registration-Form')
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })


app.post('/user/registration' , file)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})