function rollDice(){
    let rand =Math.floor(Math.random()*6)+1
    console.log("You rolled a " + rand);
}
rollDice();
function call(callback) {
    console.log("Calling the callback function...");
    callback();
}
call(rollDice);