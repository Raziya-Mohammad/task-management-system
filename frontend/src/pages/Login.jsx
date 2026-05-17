import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate=useNavigate();

const [formData,setFormData]=useState({
email:"",
password:""
});

const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:
e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const data=
await loginUser(
formData
);

localStorage.setItem(
"token",
data.token
);

navigate(
"/dashboard"
);

}catch(error){

alert(
error.message
);

}

};

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white p-8 rounded-xl shadow w-96">

<h1 className="text-3xl font-bold mb-6 text-center">

Login

</h1>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
className="w-full border p-3 rounded"
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
className="w-full border p-3 rounded"
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button
className="w-full bg-blue-600 text-white p-3 rounded"
>

Login

</button>

</form>

</div>

</div>

)

}

export default Login;