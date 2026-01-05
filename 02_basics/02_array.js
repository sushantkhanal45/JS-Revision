const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);// takes another aray as its element not merging the array..  [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] // dc_heros being element of marvel_heros..

// console.log(marvel_heros [3][1]);//Flash

// marvel_heros.concat(dc_heros)//[ 'Thor', 'Ironman', 'Spiderman' ]


// const Heros = marvel_heros.concat(dc_heros)
// console.log(Heros);//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ] most dont use concat so further process of spread

const all_heros = [...marvel_heros, ...dc_heros] // from ... the array elements becomes individual 
//console.log(all_heros);// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// const another_array = [1,2,3,[4,5,6], 7, [6,7,,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);//
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

// console.log(Array.isArray("Sushant"))//false
//console.log(Array.from("Sushant"))//  'S', 'u', 's','h', 'a', 'n','t']

//console.log(Array.from({name: "Sushant"}));// [] empty array cause nthg specified which array is to be given whether from values or keys...


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ]

//of,from,isArray explore more

