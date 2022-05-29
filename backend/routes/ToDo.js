var express = require("express");
var router = express.Router();

// Load User model
const Todo = require("../models/ToDo");

// GET request 
// Getting all the users
// router.get("/", function(req, res) {
//     User.find(function(err, users) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(users);
// 		}
// 	})
// });
router.post("/all", function (req, res) {
    Todo.find({user_id:req.body.user_id},function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    })
});
router.post("/store", function (req, res) {
    let tags1 = [];
    console.log(req.body.tags);
    for (let i = 0; i < req.body.tags.length; i++) {
        let newTag = {
            tag_name: req.body.tags[i]
        }
        tags1.push(newTag);
    }
    const todo = new Todo({
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        tags: tags1,
        importance: req.body.importance,
        urgency: req.body.urgency,
    });
    console.log(req.body.importance);
    todo.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });

});
router.post("/store_new", function (req, res) {
    let tags1 = [];
    console.log(req.body.tags);
    for (let i = 0; i < req.body.tags.length; i++) {
        let newTag = {
            tag_name: req.body.tags[i]
        }
        tags1.push(newTag);
    }
    const todo = new Todo({
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        tags: req.body.tags,
        importance: req.body.importance,
        urgency: req.body.urgency

    });
    console.log(req.body.tags);
    todo.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });

});

router.post("/yesterday_todos", function (req, res) {

    let curr_time = Date.now();
    let dum = new Date(curr_time);
    let curr_date = dum.getDate();

    Todo.find({ user_id: req.body.user_id }, function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            let yest_todos = [];
            for (let i = 0; i < todos.length; i++) {
                let start_date = todos[i].start_time.getDate();
                if (start_date == curr_date-1) {
                    yest_todos.push(todos[i]);
                }
            }
            res.json(yest_todos);
        }
    }
    );


});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// POST request 
// Login
router.post("/login", (req, res) => {
    const email = req.body.email;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user email exists
        if (!user) {
            return res.status(404).json({
                error: "Email not found",
            });
        }
        else {
            res.send("Email Found");
            return user;
        }
    });
});

module.exports = router;

