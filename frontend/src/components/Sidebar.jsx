function Sidebar({

user,

search,
setSearch,

selectedMenu,
setSelectedMenu

}){

const menus=[

"My Day",
"Important",
"Planned",
"Completed"

];

return(

<div className="
w-80
bg-white
shadow
p-8
">

<div className="
flex
items-center
gap-4
mb-10
">

<div className="
w-14
h-14
rounded-full
bg-purple-500
text-white
flex
items-center
justify-center
text-xl
font-bold
">

{
user?.name
?.charAt(0)
?.toUpperCase()
}

</div>

<div>

<h2 className="font-bold text-xl">

{user?.name}

</h2>

<p className="text-gray-500">

{user?.email}

</p>

</div>

</div>


<input

type="text"

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
p-3
rounded
mb-10
"

/>


<div className="space-y-4">

{

menus.map((menu)=>(

<button

key={menu}

onClick={()=>
setSelectedMenu(menu)
}

className={`

block
w-full
text-left
p-3
rounded

${
selectedMenu===menu

?

"bg-blue-600 text-white"

:

"hover:bg-gray-100"

}

`}

>

{menu}

</button>

))

}

</div>

</div>

)

}

export default Sidebar;