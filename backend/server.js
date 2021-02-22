const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// use routing from sodas.js
const sodasRouter = require('./routes/sodas');
app.use('/sodas', sodasRouter);

// listen for requests
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});