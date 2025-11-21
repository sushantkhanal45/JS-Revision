//array
//following mdn web docs
// js array are resizable and mix datatypes..
const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0]);//0

const myArray = new Array(1,2,3,4)

//go through console as previous..

// console.log(myArr[1]);//1



//ARRAY METHODS

// myArr.push(6)
// myArr.push(7)
// myArr.pop()//removes the last value
// console.log(myArr);//[
  //0, 1, 2, 3,
//  4, 5, 6
//]


// myArr.unshift(0)

// console.log(myArr);//added another 0
// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)// 0 disappears; first element disappears

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.includes(3));

const newArr = myArr.join()

// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);//0,1,2,3,4,5

// console.log(typeof newArr);//string


//SLICE,SPLICE

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)

console.log(myn1);//1,2
console.log("B ",myArr );

const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);//0,4,5
console.log(myn2);//1,2,3


// array.slice(start, end)
//start → index where extraction begins (inclusive)
//end → index where extraction ends (exclusive)


// let fruits = ["apple", "banana", "cherry", "date"];
// let citrus = fruits.slice(1, 3);

// console.log(citrus); // ["banana", "cherry"]
// console.log(fruits); // ["apple", "banana", "cherry", "date"] (unchanged)

//array.splice(start, deleteCount, item1, item2, ...)
// start → index where changes begin

// deleteCount → number of elements to remove

// item1, item2, ... → items to add at the start index

//removing elements
// let fruits = ["apple", "banana", "cherry", "date"];
// let removed = fruits.splice(1, 2); // remove 2 elements starting at index 1

// console.log(removed); // ["banana", "cherry"]
// console.log(fruits);  // ["apple", "date"]

//adding elements
// let fruits = ["apple", "banana", "cherry"];
// fruits.splice(1, 0, "kiwi", "mango"); // insert at index 1, delete 0 elements

// console.log(fruits); // ["apple", "kiwi", "mango", "banana", "cherry"]


//replacing elements
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi"); // replace 1 element at index 1

console.log(fruits); // ["apple", "kiwi", "cherry"]

