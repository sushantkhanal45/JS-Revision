//for of

// ["", "", ""]  //strings in array
// [{},{}, {}]  objects in array

const arr = [ 1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings= "Hello world";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}

//Maps
const map = new Map()
    map.set('bkt', "bhaktapur")
    map.set('ktm', "kathmandu")
    map.set('nep', "nepal")
    map.set('bkt', "bhaktapur")// only once..not repeated..in order
    // console.log(map);


    // for (const key of map) {
    //     console.log(key);
        
    // }
  for (const [key, value] of map) {
        // console.log(key, ':-', value);
        
    }

    // /forof in obj

    const myObj = {
        'game1': 'GTA',
        'game2': 'Spiderman'
    }
//not working
    // for (const [key, value] of myObj) {
    //     console.log(key, ':-', value); // TypeError: myObj is not iterable
        
    // }