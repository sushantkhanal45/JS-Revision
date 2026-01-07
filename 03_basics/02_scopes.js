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
console.log(a);//local(block) scope..

}

// console.log(a);// it must be inside function..
// console.log(b);// same as above..
// console.log(c);//var is for global scope...has impact in codes..

var c = 300

// console.log(c);//300

//global and local scope .. its basics as well..
// console.log(a);//300 because it is defined in global scope..


// if we run from node then global scope is different..for interviews... later on t be studied more..


