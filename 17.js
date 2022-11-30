//nested if else

let winningNumber =19;
// let userGuess=prompt("Guess a number"); //accept a string
let userGuess=+prompt("Guess a number"); //accept a nuber becaus eof plu nnumber
// console.log(typeof userGuess);

if(userGuess===winningNumber){
    console.log("Your guess is right");
}else{
    if(userGuess<winningNumber){
        console.log("too low !");
    }else{
        console.log("too high !!!");
    }
}

