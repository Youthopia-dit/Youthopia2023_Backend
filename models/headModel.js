const mongoose=require("mongoose")

const headSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    index:{
        type:Number,
        required:true
    },
    number:{
        type:String,
        required:true
    }
})
const head=mongoose.model("heads",headSchema)
module.exports=head
