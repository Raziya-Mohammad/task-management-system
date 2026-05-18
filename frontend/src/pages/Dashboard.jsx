import { useEffect, useState } from "react";

import {
getTasks,
deleteTask,
updateTask
}
from "../services/taskService";

import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import StatsCards from "../components/StatsCards";
import EditTaskModal from "../components/EditTaskModal";

function Dashboard(){

const [darkMode,setDarkMode]=
useState(
localStorage.getItem("theme")==="dark"
);

const user=
JSON.parse(
localStorage.getItem("user")
);

const [search,setSearch]=useState("");
const [filterStatus,setFilterStatus]=useState("All");
const [selectedMenu,setSelectedMenu]=useState("All");

const [tasks,setTasks]=useState([]);

const [openModal,setOpenModal]=
useState(false);

const [selectedTask,setSelectedTask]=
useState(null);

const [formData,setFormData]=
useState({

title:"",
description:"",
priority:"Medium",
dueDate:""

});


useEffect(()=>{

if(darkMode){

document.documentElement
.classList.add("dark");

localStorage.setItem(
"theme",
"dark"
);

}else{

document.documentElement
.classList.remove("dark");

localStorage.setItem(
"theme",
"light"
);

}

},[darkMode]);


const fetchTasks=async()=>{

try{

const data=
await getTasks();

setTasks(
data.data
);

}catch(error){

console.log(error);

}

};


useEffect(()=>{

fetchTasks();

},[]);


const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:
e.target.value

});

};


const handleSubmit=
async(e)=>{

e.preventDefault();

try{

await API.post(
"/tasks",
formData
);

setFormData({

title:"",
description:"",
priority:"Medium",
dueDate:""

});

fetchTasks();

}catch(error){

console.log(error);

}

};


const handleDelete=
async(id)=>{

await deleteTask(id);

fetchTasks();

};


const handleEdit=
(task)=>{

setSelectedTask(task);

setOpenModal(true);

};


const saveEditedTask=
async(data)=>{

await updateTask(
selectedTask._id,
data
);

fetchTasks();

setOpenModal(false);

};


const handleStatusChange=
async(id,status)=>{

await updateTask(
id,
{status}
);

fetchTasks();

};



const getPriorityColor=
(priority)=>{

switch(priority){

case "High":
return "bg-red-500 text-white";

case "Medium":
return "bg-yellow-400 text-black";

case "Low":
return "bg-green-500 text-white";

default:
return "bg-gray-500 text-white";

}

};


const isOverdue=(date)=>{

if(!date)
return false;

return new Date(date)
<
new Date();

};



const filteredTasks=
tasks.filter((task)=>{

const matchesSearch=

task.title
.toLowerCase()
.includes(
search.toLowerCase()
);

const matchesStatus=

filterStatus==="All"

?

true

:

task.status===filterStatus;


let menuFilter=true;


if(
selectedMenu==="Important"
){

menuFilter=
task.priority==="High";

}

else if(
selectedMenu==="Completed"
){

menuFilter=
task.status==="Completed";

}

else if(
selectedMenu==="Planned"
){

menuFilter=
task.status==="Pending";

}

else if(
selectedMenu==="My Day"
){

const today=
new Date()
.toDateString();

menuFilter=

new Date(
task.createdAt
).toDateString()

===today;

}


return(
matchesSearch &&
matchesStatus &&
menuFilter
);

});



return(

<div className={`flex min-h-screen ${
darkMode
?
"bg-gray-900 text-white"
:
"bg-gray-100 text-black"
}`}>

<Sidebar

user={user}

search={search}
setSearch={setSearch}

selectedMenu={selectedMenu}

setSelectedMenu={
setSelectedMenu
}

/>


<div className="
flex-1
flex
gap-8
p-8
">

<div className="flex-1">

<div className="
flex
justify-between
items-center
mb-8
">

<div>

<h1 className="
text-4xl
font-bold
">

My Day

</h1>

<p className="text-gray-500">

Manage your productivity

</p>

</div>


<div className="flex gap-3">

<button

className="
bg-gray-700
text-white
px-4
py-2
rounded
"

onClick={()=>
setDarkMode(
!darkMode
)
}
>

{
darkMode
?
"☀ Light"
:
"🌙 Dark"
}

</button>


<button

className="
bg-red-500
text-white
px-4
py-2
rounded
"

onClick={()=>{

localStorage.removeItem(
"token"
);

localStorage.removeItem(
"user"
);

window.location="/";

}}

>

Logout

</button>

</div>

</div>


<div className="
rounded-2xl
p-8
mb-8
shadow
bg-gradient-to-r
from-cyan-500
to-blue-600
text-white
">

<h2 className="
text-3xl
font-bold
">

Welcome Back 👋

</h2>

<p className="mt-2">

Stay organized and complete your goals

</p>

</div>


<StatsCards tasks={tasks}/>


<div className={`
p-6
rounded-xl
shadow
mb-8

${
darkMode
?
"bg-gray-800"
:
"bg-white"
}

`}>

<h2 className="
text-xl
font-bold
mb-4
">

Create Task

</h2>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
className="
w-full
border
p-3
rounded
text-black
"
name="title"
placeholder="Task title"
value={formData.title}
onChange={handleChange}
/>

<input
className="
w-full
border
p-3
rounded
text-black
"
name="description"
placeholder="Description"
value={formData.description}
onChange={handleChange}
/>

<select
className="
w-full
border
p-3
rounded
text-black
"
name="priority"
value={formData.priority}
onChange={handleChange}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

<input
type="date"
className="
w-full
border
p-3
rounded
text-black
"
name="dueDate"
value={formData.dueDate}
onChange={handleChange}
/>

<button
className="
bg-blue-600
text-white
px-6
py-3
rounded
">

Add Task

</button>

</form>

</div>


<div className="grid md:grid-cols-2 gap-6">

{

filteredTasks.map((task)=>(

<div
key={task._id}

className={`
rounded-xl
p-5
shadow

${
darkMode
?
"bg-gray-800"
:
"bg-white"
}
`}
>

<h3 className="text-xl font-bold">
{task.title}
</h3>

<p className="mt-2 text-gray-500">
{task.description}
</p>

</div>

))

}

</div>

</div>

<RightPanel tasks={tasks}/>

</div>


<EditTaskModal
task={selectedTask}
isOpen={openModal}
onClose={()=>
setOpenModal(false)
}
onSave={saveEditedTask}
/>

</div>

)

}

export default Dashboard;