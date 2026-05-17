import {useState}
from "react";

import {
registerUser
}
from
"../services/authService";

function Register(){

const[formData,
setFormData]=
useState({

name:"",
email:"",
password:""

});


const handleChange=
(e)=>{

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

const data=
await registerUser(
formData
);

alert(
data.message
);

console.log(data);

}catch(error){

alert(
error.message
);

}

};


return(

<div>

<h1>
Register
</h1>

<form
onSubmit={
handleSubmit
}
>

<input
type="text"
name="name"
placeholder="Name"
onChange={
handleChange
}
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
onChange={
handleChange
}
/>

<br/><br/>

<input
type="password"
name="password"
placeholder="Password"
onChange={
handleChange
}
/>

<br/><br/>

<button>

Register

</button>

</form>

</div>

)

}

export default Register;