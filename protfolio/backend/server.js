const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbparth:parth1470@cluster0.acuq8.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MOngoDB database connection established successfully');
});

const getInTouchRouter = require('./routes/getInTouch');

app.use('/getInTouch', getInTouchRouter);


app.listen(port, () => {
    console.log('Server is running on port :' + port);
});