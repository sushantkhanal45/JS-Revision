//primitive - call by value{original data reference is not given; copy of reference is given and changes occur in its copies not original data}


//7 types: String , NUmber , Boolean, null, undefined, Symbol, BigInt


const socre = 10
const scoreValue = 10.5

const isLoggedIn = false
const temp = null
let userEmail; //let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//false since value is same return type is not same

const bigNumber = 3333333444444445555n


//reference type - non primitive..
// memory reference can be directly allocated

// Array, Objects, Functions

const heros = ["ironman", "spiderman"]
let myObj = {
    name : "hello",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World")
    
}

console.log(typeof scoreValue);// number
console.log(typeof myFunction)//function


// type definition not necessary
// dynamically typed language



