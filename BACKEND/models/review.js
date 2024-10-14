const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({


    d1 : {
        type : String,
        required : true
    },
    d2 : {
        type : String,
        required : true
    },
    d3 : {
        type : String,
        required : true
    },
    d4 : {
        type : String,
        required : true
    },
    d5 : {
        type : String,
        required : true
    },
    d6 : {
        type : String,
        required : true
    },
    d7 : {
        type : String,
        required : true
    },
    d8 : {
        type : String,
        required : true
    }

})

const Review = mongoose.model("Review",reviewSchema);

module.exports = Review;