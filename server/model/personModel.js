const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    count: {
        type: Number
    }
});
  
module.exports = mongoose.model("Person", personSchema, "person");

