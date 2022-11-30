// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName= "  angsh  ";
console.log(firstName.length);
//let newString=firstName.trim(); //"angsh"
//console.log(newString.length);

firstName=firstName.trim();
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.lastIndexOf("h"));
let newString=firstName.slice(0,4);
console.log(newString);



