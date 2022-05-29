var express = require("express");
var router = express.Router();

require('dotenv').config();
const Todo = require("../models/ToDo");
const Diary = require("../models/Diary");
const client = require('twilio')(
    process.env.REACT_APP_TWILIO_ACCOUNT_SID,
    process.env.REACT_APP_TWILIO_AUTH_TOKEN
);

router.post("/store", function (req, res) {
    const diary = new Diary({
        user_id: req.body.user_id,
        description: req.body.description,
        date: Date.now()
    });
    diary.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json(diary);
        }
    }
    );

});

router.post('/api/messages', (req, res) => {
   // res.header('Content-Type', 'application/json');
    client.messages
        .create({
            from: +17128827619,
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
});

module.exports = router;

