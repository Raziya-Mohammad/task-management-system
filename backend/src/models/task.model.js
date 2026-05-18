import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String
},

priority:{
type:String,
default:"Medium"
},

category:{
type:String,
default:"Personal"
},

status:{
type:String,
default:"Pending"
},

dueDate:{
type:Date
},

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}

},
{timestamps:true}

);

export default mongoose.model(
"Task",
taskSchema
);