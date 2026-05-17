import Task from "../models/task.model.js";

// Create Task
export const createTask = async (req, res) => {
  try {

    const {
      title,
      description,
      status,
      priority,
      dueDate
    } = req.body;

   const task=await Task.create({
    title,
    description,
    status,
    priority,
    dueDate,
    user:req.user._id
});

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};
// Get All Tasks
export const getAllTasks = async (req,res)=>{

try{

const tasks = await Task
.find({
   user:req.user._id
})
.populate(
   "user",
   "name email"
);

res.status(200).json({

success:true,
count:tasks.length,
data:tasks

});

}catch(error){

console.log(error);

res.status(500).json({

success:false,
message:error.message

});

}

};
// Update Task
export const updateTask = async (req,res)=>{

 try{

   const {id}=req.params;

   const updatedTask=
   await Task.findByIdAndUpdate(
      id,
      req.body,
      {
        new:true,
        runValidators:true
      }
   );

   if(!updatedTask){

    return res.status(404).json({
      success:false,
      message:"Task not found"
    });

   }

   res.status(200).json({
      success:true,
      message:"Task updated successfully",
      data:updatedTask
   });

 }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

 }

};
// Delete Task
export const deleteTask = async (req,res)=>{

 try{

   const {id}=req.params;

   const deletedTask=
   await Task.findByIdAndDelete(id);

   if(!deletedTask){

     return res.status(404).json({
        success:false,
        message:"Task not found"
     });

   }

   res.status(200).json({
      success:true,
      message:"Task deleted successfully"
   });

 }catch(error){

   res.status(500).json({
      success:false,
      message:error.message
   });

 }

};