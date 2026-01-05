//singleton (made from constructors..): any constructor we make , then a singleton obj is made.. this is atype of its own object......... in understanding form....
//Object.create.....for singleton...

//object literals: when made a singleton is not made here..keys and values properties can be defined.....

// myArray = ["S", "K"]
// myArray[1] or myArray[0] we can only access this from this way only....

//but in objects this changes.. we can define ooour keys and values...

const mySymbol = Symbol("key1")

const JsUser = {
name: "Sushant",
"full name" : "Sushant Khanal",
mySymbol: "myKey1",// string.not being used as symbol.. // mySymbol: 'myKey1'
[mySymbol] : "myKey1",// bring used as symbol..use [.......]     // [Symbol(key1)]: 'myKey1'
age: 22,
location : "Bhaktapur",
email: "sk@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);//sk@gmail.com .......normally used but sq brackets can be used logically......
// console.log(JsUser["email"]);//sk@gmail.com  correct form for all..........
// // console.log(JsUser.full name); ERROR...   we cannot access this from dot.never...so for any kind of object value representation the above [] is used..
// console.log(JsUser["full name"]);// Sushant Khanal....accessed successfully......

// console.log(JsUser[mySymbol]);
// console.log(typeof mySymbol);

// JsUser.email = "sushant@gmail.com"//changes email in obj...
// console.log(JsUser["email"]);//sushant@gmail.com
// Object.freeze(JsUser)// dont let change the details now..
// JsUser.email = "sk@google.com"
// console.log(JsUser["email"]);//sushant@gmail.com

// console.log(JsUser);//email: 'sushant@gmail.com'


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());//Hello JS User

console.log(JsUser.greetingTwo());//Hello JS User, Sushant


