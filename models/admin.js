const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email:{type:String},
    password:{type:String}
});

const adminModel = mongoose.model("Admin",schema);

module.exports = adminModel;