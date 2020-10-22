/*
There could be multiple Villagers
There  could only be one of the Special Roles

*/



let  roles = ["Villager","Doctor",["AlphaWerewolf","Werewolf","Junior Werewolf"],"Detective",]

function random(min,max){
    

    return Math.floor((Math.random() * max) + min);

}

function assignRole(){
//get the random selection from role array 
const randomSelection=roles[random(0,roles.length-1)]
let role;
//remove the role unless its villager(there could be multiple villagers )
if((role !== "Villager") && ((typeof role) !== "object")  ){

    roles=roles.filter(  (item!==role) )
    role=randomSelection
}
else if (typeof role === "object"){
role=randomSelection[]

}

//return 
return randomSelection;
}