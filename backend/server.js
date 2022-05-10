require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const connectDB = require('./config/db')

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

app.get("/", (req, res) => {
    res.status(200).send("Server connected");
})
// Mongo is connected 
connectDB();
