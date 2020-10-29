/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/



let  roles = ["Villager","Doctor","AlphaWerewolf","Werewolf","Junior Werewolf","Detective",]

const  random=(min,max)=>{
    return Math.floor((Math.random() * max) + min);

}


const  assignRole= ()=> {
//get the random selection from role array 
const role=roles[random(0,roles.length-1)]
//remove the role unless its villager(there could be multiple villagers )
if(role !== "Villager" ){
    roles=roles.filter( (item) =>item!==role )
    
    console.log(roles)
}/*
//if it is an array such as with the werewolf where there a re multiple types then assign a random type
else if (typeof role === "object"){
//get random role within array
const index=random(0,randomSelection.length-1)
role=randomSelection[index]
//remove specific role
randomSelection.splice(index,1);
}
*/
//return 
return role;
}