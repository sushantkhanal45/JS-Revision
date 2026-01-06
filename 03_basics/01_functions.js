// console.log("S");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");
// console.log("T");
//MAKING THIS WORK USIGN FUNCTION...

function sayMyName(){
console.log("S");
console.log("U");
console.log("S");
console.log("H");
console.log("A");
console.log("N");
console.log("T");
}

// sayMyName()//reference is sayMyName, sayMyName() this is execution when used parenthesis...will be there in dom manipulation...

// function addTwoNumbers(number1, number2){// func def we take parameters...(number1, number2)
//  console.log(number1 + number2)
// }
// addTwoNumbers(2,3)//5.......function call........// (2,3) this is argument..
// addTwoNumbers(2,"3")//23.......function call
// addTwoNumbers(2,"a")//2a.......function call

//checking is necessary.datatype is either number or not or what operation are we performing...

// const result = addTwoNumbers(3,6)
// console.log("Result: ", result);//Result:  undefined

//next way for result example.......

function addTwoNumbers(number1 , number2){
// let result  = number1 + number2
// return result// nothing will be rpint after return.. if something is to be print then it must be specified before return inside a function.....

return number1 + number2 // both are similar way
}

const result = addTwoNumbers(3,6)

// console.log("Result: ", result);//Result:  9

// result used are two different things here.......outside of function accessing value here...

//ways to take value in function.....

// function loginUserMessage (username){
// return `${username} just logged in`
// }

// console.log(loginUserMessage("Sushant"));// Sushant just logged in
// console.log(loginUserMessage(""));//  just logged in
// console.log(loginUserMessage());// undefined just logged in

//using if for checking the correctness for same code above..

// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return // prevents the following code to print if this condition is meet and exits the function...
//     }
// return `${username} just logged in`
// }

// console.log(loginUserMessage("Sushant"));// Sushant just logged in
// console.log(loginUserMessage(""));//  just logged in
//this is run before the return in function which gives the result of the following return as logged in....// console.log(loginUserMessage()); // Please enter a username....undefined just logged in

//this is run after return in function // console.log(loginUserMessage());// Please enter a username

//same function but checking for another purpise.....
function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
return `${username} just logged in`
}
// console.log(loginUserMessage());//Please enter a username

//for default value add something in username
function loginUserMessage (username = "sam"){// the value cant be undefined atleast it will return sam..
    if(!username){
        console.log("Please enter a username");
        return 
    }
return `${username} just logged in`
}
console.log(loginUserMessage());// sam just logged in
console.log(loginUserMessage("Sushant"));//this will override once the valu is given and print my name..







