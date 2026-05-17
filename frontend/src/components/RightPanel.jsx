function RightPanel({tasks}){

const completed=
tasks.filter(
t=>t.status==="Completed"
).length;

const pending=
tasks.filter(
t=>t.status==="Pending"
).length;

const total=
tasks.length;

const progress=

total===0

?

0

:

Math.round(
(completed/total)*100
);

return(

<div className="
w-72
space-y-6
">

<div className="
bg-white
dark:bg-gray-800
rounded-2xl
shadow
p-6
">

<h2 className="
font-bold
text-xl
mb-4
">

Today's Progress

</h2>

<div className="text-5xl font-bold">

{progress}%

</div>

<p className="text-gray-500 mt-2">

{completed} completed
out of {total}

</p>

<div className="
w-full
bg-gray-200
rounded-full
h-3
mt-4
">

<div

className="
bg-green-500
h-3
rounded-full
"

style={{

width:
`${progress}%`

}}

>

</div>

</div>

</div>


<div className="
bg-white
dark:bg-gray-800
rounded-2xl
shadow
p-6
">

<h2 className="
font-bold
text-xl
mb-4
">

Quick Stats

</h2>

<p>

⏳ Pending:
{pending}

</p>

<p className="mt-2">

🔥 High Priority:
{

tasks.filter(
t=>t.priority==="High"
).length

}

</p>

<p className="mt-2">

📋 Total:
{total}

</p>

</div>


<div className="
bg-gradient-to-r
from-purple-500
to-pink-500
text-white
rounded-2xl
shadow
p-6
">

<h3 className="font-bold">

Productivity Tip

</h3>

<p className="mt-3 text-sm">

Complete high-priority
tasks first.

</p>

</div>

</div>

)

}

export default RightPanel;