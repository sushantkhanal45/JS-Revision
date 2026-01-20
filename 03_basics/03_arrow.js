const user = {
    username: "Sushant",
    price : 999,

welcomeMessage : function(){

    console.log(`${this.username}, welcome to website`)// refer the current context..
    console.log(this);
    
}

}

// user.welcomeMessage() //Sushant, welcome to website
// user.username = "sam"//context changed
// user.welcomeMessage()//sam, welcome to website

// console.log(this);// {}

// function hello(){
//     let username = "Sushant"
//     console.log(this.username);//undefined..only works for objects here..not in functions
    
// }
// hello()
 

// const hello =  () => {

//     let username = "Sushant"
//     console.log(this.username);
    
// }
// hello()




//.................arrow function
// () => {}// arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,3));//5


//implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)// {} return is needed.. () return is not needed..

//return obj
// const addTwo = (num1, num2) => {username : "Sushant"}// undefined because must be inside parenthesis as
const addTwo = (num1, num2) => ({username : "Sushant"}
)

console.log(addTwo(2,3));// { username: 'Sushant' } no use of 2,3 just an example copied from above
