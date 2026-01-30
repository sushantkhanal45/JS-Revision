// Immediately Invoked Function Expression (IIFE)

(function db(){
    //named iife
    console.log(`DB Connected`);
    
}) ();

// () () // frst fun_defn second execution
//the problem of global scope pollution is handled..
//semo-colon is necessary in above to mark as it ending...
( () => {
    console.log(`DB connected Two`);
    
}) ();

( (name) => {
    console.log(`DB connected To ${name}`);
    
}) ('Sushant')