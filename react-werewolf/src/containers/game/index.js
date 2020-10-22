/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/



let  roles = ["Villager","Doctor",["AlphaWerewolf","Werewolf","Junior Werewolf"],"Detective",]

function random(min,max){
    

    return Math.floor((Math.random() * max) + min);

}

//Need handling instance when array is empty

function assignRole(){
//get the random selection from role array 
const randomSelection=roles[random(0,roles.length-1)]
let role;
//remove the role unless its villager(there could be multiple villagers )
if((role !== "Villager") && ((typeof role) !== "object")  ){

    roles=roles.filter(  (item!==role) )
    role=randomSelection
}
//if it is an array such as with the werewolf where there a re multiple types then assign a random type
else if (typeof role === "object"){
//get random role within array
const index=random(0,randomSelection.length-1)
role=randomSelection[index]
//remove specific role
randomSelection.splice(index,1);
}

//return 
return randomSelection;
}