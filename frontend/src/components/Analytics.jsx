import {
PieChart,
Pie,
Cell,
Tooltip
}
from "recharts";

function Analytics({tasks}){

const data=[

{
name:"Completed",
value:
tasks.filter(
t=>t.status==="Completed"
).length
},

{
name:"Pending",
value:
tasks.filter(
t=>t.status!=="Completed"
).length
}

];

const COLORS=[
"#00C49F",
"#FF8042"
];

return(

<div className="
bg-white
p-6
rounded-xl
shadow
">

<h2 className="
font-bold
mb-4
text-xl
">

Task Analytics

</h2>

<PieChart
width={300}
height={250}
>

<Pie
data={data}
dataKey="value"
>

{

data.map(
(entry,index)=>(

<Cell
key={index}
fill={
COLORS[index]
}
/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</div>

)

}

export default Analytics;