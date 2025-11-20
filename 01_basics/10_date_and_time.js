//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 0, 23)// year, month, day//
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());//1/23/2025, 5:03:00 AM


let myCreatedDate = new Date("2020-12-10")//yy/mm/dd  use:[mm/dd/yy]
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);// ms value from above run date.. 1763564094253..

// console.log(myCreatedDate.getTime());//1607558400000

console.log(Math.floor(Date.now()/1000));// to avoid decimal

let newDate = new Date()
console.log(newDate.getMonth()+ 1);//mth starts from 0 ..
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
   
})

console.log(newDate);

//that not much enough, will have to try everything..this much is just for practice as it is revision for me..
//if you are planning to go through it.. go for ctrl+space with your function for all better options..






