const adminModel = require("../models/admin");
const bcrypt = require('bcrypt');
const projectModel = require("../models/projects");
const moment = require("moment");

class AdminController{

    static AddAdmin =  async(req,res) => {
        try {
            const {email,password} = req.body;
            if(email && password){
                const salt = await bcrypt.genSalt(20);
                const hash = await bcrypt.hash(password,salt)
                const collection = new adminModel({email:email,password:password})
                const result = await collection.save();
                if(result){
                    res.send({status:true,message:"Admin Added Successfully !!"});
                }
            }            
        } catch (error) {
            res.send({status:false,message:"Unable to provide Service !!"})
        }
    }

    static UploadProjectVideo = async(req,res) => {
        try {
            console.log(req.body);
            console.log(req.file);
            const {project_title,project_name,project_completed_date,project_uploaded_date} = req.body;
            if(req.file){
                let uploadDate = moment(project_uploaded_date).format("MM/DD/yyyy");
                let completedDate = moment(project_completed_date).format("MM/DD/yyyy");
                const collection = new projectModel({project_url:req.file.path,project_title:project_title,project_completed_date:completedDate,project_name:project_name,project_uploaded_date:uploadDate})
                const result = await collection.save();
                if(result){
                    res.send({status:true,message:"Project Uploaded !!"})
                }
            }else{
                res.send({status:false,message:"Unable to provide Service !!"})
            }
        } catch (error) {
            res.send({status:false,message:"Unable to provide Service !!"})
        }
    }



}

module.exports = AdminController