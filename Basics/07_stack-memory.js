// stack (Primitive type) , Heap (non-primitive type)

//stack...... any variable declared, we get a copy and anythng chnaged is in its copied value not the original value...
let myName = "Harry"
let anotherName = myName
console.log(anotherName);//harry
anotherName = "Potter"
console.log(myName);//harry
console.log(anotherName);//potter



//heap..... any thgn defined we get reference of original value and anything changed is a change to original value
let userOne= {
 email : "harry@gmail.com",
 password : "h@rry"
}

let userTwo = userOne

userTwo.email = "potter@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
