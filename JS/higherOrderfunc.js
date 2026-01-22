function multipleGreet(func,n){
    for(let i=0; i<n; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet, 5); // This will print "Hello" 5 times 