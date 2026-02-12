const coding = ["js", "ruby", "cpp", "python", "java"]

//higher order arrays..
// foreach = callback function
// coding.forEach( function () {}) // the fuinctions have all ideas..we just have to give function..there is no name in callback function..the parameters are automatic to every value..it will take its own value


coding.forEach( function (val){
    // console.log(val);
    
})

// /arrowfunction

coding.forEach((item) => {
    // console.log(item);
    
})

function printMe(item){
    // console.log(item);
    
}

// coding.forEach(printMe)

coding.forEach( (item , index, arr) => {
    // console.log(item, index, arr);
    
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
    
})