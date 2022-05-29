const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DiarySchema = new Schema({
    
    description: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
    

    user_id:{
        type:String,
        required:true
    }



});

module.exports = Diary = mongoose.model("Diary", DiarySchema);
