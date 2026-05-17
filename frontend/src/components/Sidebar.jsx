function Sidebar({

search,
setSearch,

selectedMenu,
setSelectedMenu

}){

const menuItems=[

{
name:"My Day",
icon:"🗓️"
},

{
name:"Important",
icon:"⭐"
},

{
name:"Planned",
icon:"📝"
},

{
name:"Completed",
icon:"✅"
}

];

return(

<div className="w-64 h-screen bg-white shadow-lg p-6">

<div className="flex items-center gap-3 mb-10">

<div className="
w-12
h-12
rounded-full
bg-purple-500
text-white
flex
items-center
justify-center
font-bold
">

R

</div>

<div>

<h3 className="font-bold">

Raziya

</h3>

<p className="text-sm text-gray-500">

raziya@gmail.com

</p>

</div>

</div>


<input

placeholder="Search"

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

className="
w-full
border
rounded-lg
p-3
mb-8
"
/>


<div className="space-y-3">

{

menuItems.map((item)=>(

<div

key={item.name}

onClick={()=>

setSelectedMenu(
item.name
)

}

className={`

p-3
rounded
cursor-pointer
transition

${
selectedMenu===item.name

?

"bg-blue-500 text-white"

:

"hover:bg-gray-100"

}

`}

>

{item.icon}

{" "}

{item.name}

</div>

))

}

</div>

</div>

)

}

export default Sidebar;