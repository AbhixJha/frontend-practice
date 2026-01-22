let number = 287152;
let count = 0;
for (let i = number; i > 0; count++) {
    i=Math.floor(i / 10);
}
console.log(count);