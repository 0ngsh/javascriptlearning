//cloning array
//how to concatenate array
// let array1=["item1","item2"];
// // let array2=array1.slice(0);
// let array2=[].concat(array1);
// console.log(array1==array2)
// console.log(array2)


//new way spread operator
let array1=["item1","item2"];
let array2=[...array1];
console.log(array1==array2)
console.log(array2)

//slice is faster

let array3=array1.slice(0).concat(["item3","item4"]);
let array4=[].concat(array1,["item3","item4"]);
console.log(array4);

let array5=[...array1, "item1","item2"];
let array6=[...array1,...array3];
console.log(array6)