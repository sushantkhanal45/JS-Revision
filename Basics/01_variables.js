const id = 1
let emial = "hello world"
//var not recently used due to its scope malfunctioning..works as global scope
var acno = "12345"
city = "Bhaktapur"
//variables assigned to memory..


//changing values
// id = 2 // not allowed constant cannot be changed..
console.log(id);


emial = "hi"
acno = "56789"
city = "Kathmandu"


//tabel console
//js reads the latest {most recently assigned} value of a variable..
let acstate;
console.table([id, emial, acno, city, acstate])


var name = "Sushant";
var name = "Khanal"; //  Allowed
console.log(name);   // Output: Khanal

/*let name = "Sushant";
let name = "Khanal";
//Error: Identifier 'name' has already been declared

//var can be redeclared but let cannot.
//since var can be accessibel outside the block scope {}, it causes bugs..
//no problems with let in scopes..
/*
negelect var
*/

