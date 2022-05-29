var express = require("express");
var router = express.Router();


const Todo = require("../models/ToDo");
const Diary = require("../models/Diary");


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



module.exports = router;

