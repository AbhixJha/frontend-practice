function hello() {
    console.log("inside hello()");
    console.log("hello");
}
function demo(){
    console.log("calling hello()");
    hello();
}
console.log("calling demo()");
demo();
console.log("end of script");