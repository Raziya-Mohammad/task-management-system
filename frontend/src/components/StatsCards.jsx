function StatsCards({tasks}){

const total=tasks.length;

const completed=
tasks.filter(
t=>t.status==="Completed"
).length;

const pending=
tasks.filter(
t=>t.status==="Pending"
).length;

const high=
tasks.filter(
t=>t.priority==="High"
).length;

const cards=[

{
title:"Total Tasks",
value:total,
emoji:"📋"
},

{
title:"Completed",
value:completed,
emoji:"✅"
},

{
title:"Pending",
value:pending,
emoji:"⏳"
},

{
title:"High Priority",
value:high,
emoji:"🔥"
}

];

return(

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

{cards.map(card=>(

<div
key={card.title}
className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow"
>

<div className="text-3xl">
{card.emoji}
</div>

<h3 className="mt-3 text-gray-500">
{card.title}
</h3>

<p className="text-3xl font-bold">
{card.value}
</p>

</div>

))}

</div>

)

}

export default StatsCards;