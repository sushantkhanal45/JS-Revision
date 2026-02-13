const myNUmbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNUmbers.map( (num) => num + 10 )
// const newNums = myNUmbers.map( (num) => { return num + 10} )


const newNums = myNUmbers
        .map((num) => num * 10)
        .map( (num) => num + 1 )//from above map...chaining.....
        .filter((num) => num >= 40) //ttrue and false..



console.log(newNums);
