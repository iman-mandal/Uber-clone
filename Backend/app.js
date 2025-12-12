const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB=require('./db');
connectToDB();
const userRoutes=require('./routes/userRouter');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes);
app.get('/', (req, res) => {
    res.send('Hellow World');
});

module.exports = app;