import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name:"",
email:"",
password:""
});

const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const data =
await registerUser(formData);

alert(data.message);

navigate("/");

}catch(error){

alert(
error?.response?.data?.message ||
"Registration failed"
);

}

};

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white p-8 rounded-xl shadow w-96">

<h1 className="text-3xl font-bold text-center mb-6">

Register

</h1>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
className="w-full border p-3 rounded"
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

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
className="w-full bg-green-600 text-white p-3 rounded"
>

Register

</button>

</form>

<p className="text-center mt-4">

Already have an account?

<span
onClick={()=>navigate("/")}
className="text-blue-600 ml-2 cursor-pointer"
>

Login

</span>

</p>

</div>

</div>

)

}

export default Register;