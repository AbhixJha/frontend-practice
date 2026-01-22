function sum(a,b){
    console.log("Calculating the sum...");
    return a + b;
    console.log("This line will never be executed because it comes after the return statement.");

}
console.log(sum(5, 10)); 