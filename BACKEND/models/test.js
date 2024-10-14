const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new Schema({

    oname : {
        type : String,
        required : true  
    },
    cname : {
        type : String,
        required : true 
    },
    age : {
        type : String,
        required : true
    },
    file : {
        type : String,
        required : true
    }
    
    

})

const Information = mongoose.model("Information",informationSchema);

module.exports = Information;