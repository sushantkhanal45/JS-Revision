// let a = 10
// const b = 20
// var c = 30

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// {}// this is scope
let a = 300
if (true){
let a = 10
const b = 20
var c = 30
// console.log(a);//local(block) scope..

}

// console.log(a);// it must be inside function..
// console.log(b);// same as above..
// console.log(c);//var is for global scope...has impact in codes..

var c = 300

// console.log(c);//300

//global and local scope .. its basics as well..
// console.log(a);//300 because it is defined in global scope..


// if we run from node then global scope is different..for interviews... later on to be studied more..



//nested scope..

function one(){
    const username = "Sushant"

    function two(){

        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);//not accessible..and wont give two() because line line by implementing..it stops..
    
    // two()//Sushant
}

// one() //one() only defines the inner function two().never calls two()

if (true){
    const username = "Sushant"
    if(username === "Sushant"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);//not accessible.
    
}
// console.log(username);

// ++++++++++++++++++Interesting++++++++++++++++
//console.log(addone(5));//can execute..
function addone(num){

return num+1

}

console.log(addone(5));

//++++++++++++++

//console.log(addTwo(5));//cant access like this because stored by declaration..

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

//scopes completed...