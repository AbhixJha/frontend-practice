let greet ="hello";
function changeGreet() {
    let greet = "Namaste"; //function scope variable
    console.log(greet); 

    function innerGreet(){ //this is a nested function
       console.log(greet); // Accessing the outer variable (lexxical scope)
    }
}

console.log(greet);
changeGreet(); 