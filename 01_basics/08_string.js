const name = "Sushant"
const repoCount = 50

//console.log(name + repoCount + "Dollars");not so good

console.log(``);//back ticks..string interpolation..we make place holder and inject variable directly..

//to be followed more for accessing values rather than others..
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nep_Sushant')//constructor
// if performed in console of a browser ..it'll give string with key value pairs for this kind of string declaration // prototypes also to be

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.toLocaleUpperCase());//prototype accessed

console.log(gameName.indexOf('a'));


//substring
const newString = gameName.substring(0,4)// ignores neg and starts from 0
console.log(newString);

const anotherString = gameName.slice(-5 , 0)// neg val can be used
console.log(anotherString);

const newStringOne = "         hitesh      "// unwanted spaces knowing or unknowing from user..

console.log(newStringOne);
console.log(newStringOne.trim());//line terminators like /n or white spaces get trimmed..

const url = "https://nepal.com/nepal%20country"


console.log(url.replace('%20', '-'));// change %20 to -

console.log(url.includes('sk'));//false

const guess = "Sushant-Khanal-Bhaktapur"

console.log(guess.split('-'));// removes -

//more to explore



