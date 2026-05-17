import API from "../api/axios";

export const getTasks = async () => {

try{

const response=
await API.get("/tasks");

return response.data;

}catch(error){

throw error.response.data;

}

};
export const deleteTask = async(id)=>{

try{

const response=
await API.delete(
`/tasks/${id}`
);

return response.data;

}catch(error){

throw error.response.data;

}

};
export const updateTask = async(id,data)=>{

try{

const response=
await API.put(
`/tasks/${id}`,
data
);

return response.data;

}catch(error){

throw error.response.data;

}

};