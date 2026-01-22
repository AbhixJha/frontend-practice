let nums =[10,20,37,89,2,9];
let min = nums.reduce((min,el) =>{
    if(min < el){
        return min;
    }
    else {
        return el;
    }
});
console.log(min);