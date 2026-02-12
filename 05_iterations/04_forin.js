const myObj = {
    js: 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    swift : "swift by apple"
}

for (const key in myObj) {
// console.log(myObj[key]);
// console.log(`${key} shortcut if for ${myObj[[key]]}`);

}

//forin for array

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    
// console.log(key);
// console.log(programming[key]);

}

const map = new Map()
    map.set('bkt', "bhaktapur")
    map.set('ktm', "kathmandu")
    map.set('nep', "nepal")
    map.set('bkt', "bhaktapur")

    // for (const key in map) {
    //     console.log(key);  //map is not iterable
         
        
    // }

    