const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    project_url:{type:String},
    project_name:{type:String},
    project_title:{type:String},
    project_completed_date:{type:String},
    project_uploaded_date:{type:String}
})

const projectModel = mongoose.model('projects',schema);

module.exports = projectModel;