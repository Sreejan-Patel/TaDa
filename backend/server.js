const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tada"

// routes
var TodoRouter = require("./routes/ToDo");
var DiaryRouter = require("./routes/Diary");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb+srv://tada:tada@cluster0.60u6h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/todo", TodoRouter);
app.use("/diary", DiaryRouter);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
