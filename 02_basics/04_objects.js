// const appUser = new Object()//singleton obj op: {}
const appUser = {}//non sigleton obj op: {}

appUser.id = "123abc"
appUser.name = "Sam"
appUser.isLoggedIn = false

// console.log(appUser);


const regularUser ={
    email: "sk@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sushant",
            lastname: "Khana"
        }
    }
}
//accessing obj
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);//condition check...as ternary to avoid loops//


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// /more used
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"s@gmmail.com"
    },
     {
        id: 1,
        email:"s@gmmail.com"
    }
]

users[1].email
console.log(appUser);

console.log(Object.keys(appUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(appUser));//[ '123abc', 'Sam', false ]
console.log(Object.entries(appUser));//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]... 1st is key and 2 nd is value in array

console.log(appUser.hasOwnProperty('isLogged'));//false
console.log(appUser.hasOwnProperty('isLoggedIn'));//true





