import API from "../api/axios";

export const registerUser = async(data)=>{

try{

const response=
await API.post(
"/auth/register",
data
);

return response.data;

}catch(error){

throw error.response.data;

}

};


export const loginUser = async(data)=>{

try{

const response=
await API.post(
"/auth/login",
data
);

return response.data;

}catch(error){

throw error.response.data;

}

};