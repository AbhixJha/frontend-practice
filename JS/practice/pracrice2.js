let number = 287152;
let sum = 0;

for (let i = number; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;    
    sum += digit;    
}

console.log("Sum of digits:", sum); 
