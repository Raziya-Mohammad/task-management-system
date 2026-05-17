import { useState,useEffect } from "react";

function EditTaskModal({

task,
isOpen,
onClose,
onSave

}){

const [formData,setFormData]=
useState({

title:"",
description:"",
priority:"Medium",
status:"Pending"

});


useEffect(()=>{

if(task){

setFormData({

title:
task.title,

description:
task.description,

priority:
task.priority,

status:
task.status

});

}

},[task]);


if(!isOpen)
return null;


const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:
e.target.value

});

};


return(

<div className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
z-50
">

<div className="
bg-white
w-[500px]
rounded-2xl
p-6
shadow-xl
">

<h2 className="
text-2xl
font-bold
mb-4
">

Edit Task

</h2>


<input
className="
w-full
border
p-3
rounded
mb-4
"

name="title"

value={formData.title}

onChange={handleChange}
/>


<input
className="
w-full
border
p-3
rounded
mb-4
"

name="description"

value={formData.description}

onChange={handleChange}
/>


<select
className="
w-full
border
p-3
rounded
mb-4
"

name="priority"

value={formData.priority}

onChange={handleChange}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>


<select
className="
w-full
border
p-3
rounded
mb-4
"

name="status"

value={formData.status}

onChange={handleChange}
>

<option>Pending</option>
<option>In-Progress</option>
<option>Completed</option>

</select>



<div className="
flex
justify-end
gap-3
">

<button

className="
bg-gray-400
text-white
px-4
py-2
rounded
"

onClick={onClose}

>

Cancel

</button>


<button

className="
bg-blue-600
text-white
px-4
py-2
rounded
"

onClick={()=>

onSave(
formData
)

}

>

Save

</button>

</div>

</div>

</div>

)

}

export default EditTaskModal;