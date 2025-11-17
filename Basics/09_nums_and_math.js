const score = 400//normal, simple way
 
const balance = new Number(100)
// console.log(balance);
// console.log(score);

//shows different in inspect's console.. sthg similar to practice we've done in string..

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2));


const otherNum = 32.56789
// console.log(otherNum.toPrecision(4));// use in a smarter way..it may give expo value too...


const guess = 100000
// console.log(guess.toLocaleString('en-IN'));//indian standard.. if not specified then it goes to international standard by default...

//--------------Maths--------------

// console.log(Math);//bject [Math] {} not so detailed with node..try in brower's console.. floor,abs,tan,sqrt and many more..

// console.log(Math.abs(-4));//4 absolute value..neg to pos

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,6,2,8,5));

console.log(Math.random());//values betn 0 and 1
console.log(Math.random()*10);//0-9
console.log(Math.random()*10 + 1);//not 0 ..from 1
console.log((Math.random()*10) + 1);//1-10
console.log(Math.floor((Math.random()*10)) + 1);//1-10

const min = 10
const max = 20
//imp formual
console.log((Math.floor(Math.random() * (max - min + 1) + min)));
//+1 to avoid 0..formula..













