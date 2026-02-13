const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval ) {


//     console.log(`acc: ${acc} and currval: ${currval}`);
    
// return acc + currval

// }, 0)// 0 startting value of accumulator...


//arrow function

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 5999
    },
    {
        itemName : "mobdev course",
        price: 1999
    }
]

const totalAmt = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(totalAmt);

