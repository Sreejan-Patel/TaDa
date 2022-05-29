const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start:
    {
        type: Number,
        required: true
    },
    start_time: {
        type: Date,
        required: false
    },
    end_time: {
        type: Date,
        required: false
    },
    tags: [
        {
            tag_name: {
                type: String,
                required: false
            }
        }
    ],

    user_id: {
        type: String,
        required: true
    },
    importance: {
        type: Number,
        required: true
    },
    urgency: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: false
    },



});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
