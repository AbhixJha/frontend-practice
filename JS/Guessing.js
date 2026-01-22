const max =prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;
let guess = prompt("Guess a number")
    while(true){
        if(guess=="quit"){
            alert("Game Over");
            break;
        }
        else if(guess<random){
            alert("Too low");
            guess = prompt("Guess a number");
        }
        else if(guess>random){
            alert("Too high");
            guess = prompt("Guess a number");
        }
        else{
            alert("Correct! The number was " + random);
            break;
        }
    }