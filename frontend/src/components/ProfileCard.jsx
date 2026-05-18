function ProfileCard(){

const user=
JSON.parse(
localStorage.getItem("user")
);

return(

<div className="
bg-white
rounded-xl
shadow
p-6
mb-8
">

<div className="
flex
items-center
gap-4
">

<div className="
w-16
h-16
rounded-full
bg-purple-600
text-white
flex
justify-center
items-center
text-2xl
font-bold
">

{
user?.name
?.charAt(0)
}

</div>

<div>

<h2 className="
font-bold
text-xl
">

{user?.name}

</h2>

<p>

{user?.email}

</p>

</div>

</div>

</div>

)

}

export default ProfileCard;