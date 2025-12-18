const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB=require('./db');
connectToDB();
const userRoutes=require('./routes/userRouter');
const captainRoutes=require('./routes/captainRouter');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

app.use('/user',userRoutes);
app.use('/captain',captainRoutes);
app.get('/', (req, res) => {
    res.send('Hellow World');
});

module.exports = app;