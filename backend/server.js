const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tada"
const client = require('twilio')(
    "AC8458895cb934eaebeddd748a5268205b",
    "faa006ac8d33025c47f2d7c2f6fcfd0a"
);
// routes
var TodoRouter = require("./routes/ToDo");
var DiaryRouter = require("./routes/Diary");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb+srv://tada:tada@cluster0.60u6h.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/todo", TodoRouter);
app.use("/diary", DiaryRouter);
// app.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     client.messages
//         .create({
//             from: +17128827619,
//             to: +919701499676,
//             body: req.body.body
//         })
//         .then(() => {
//             res.send(JSON.stringify({ success: true }));
//         })
//         .catch(err => {
//             console.log(err);
//             res.send(JSON.stringify({ success: false }));
//         });
// });

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
