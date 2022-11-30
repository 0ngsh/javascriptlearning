//undefined
//null

// let firstName;
// console.log(typeof firstName);

// const firstName1;
// console.log(typeof firstName1); //Uncaught SyntaxError: missing = in const declaratio

// let firstName;
// console.log(typeof firstName);
// firstName="Angsh";
// console.log(typeof firstName, firstName);

// let myVar=null;
// console.log(typeof myVar);
// myVar="ANgsh";
// console.log(typeof myVar, myVar);
console.log(typeof null); //in null it will be object why, its a bug
//typeof null is object, why bug not a resolved, if bug is resloved old code will not
// work

//BigInt  introduce in 2020

// let myNumber = 123;
// console.log(myNumber); 
// console.log(Number.MAX_SAFE_INTEGER);


let myNumber = BigInt(12);
let myNumber1 = 123n;
console.log(myNumber); 
console.log(myNumber+myNumber1);

//ypu cant mix number and big int in math operation


