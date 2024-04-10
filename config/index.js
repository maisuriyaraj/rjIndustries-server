const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/rjIndustries").then(()=>{
    console.log("MONGO CONNETCED");
}).catch(err=>{
    console.log(err)
})