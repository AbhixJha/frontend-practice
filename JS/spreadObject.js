let data = {
    email:"abhi@gmail.com",
    password:"abcd",
};
let dataCopy={...data, id:123, country: "India"};
console.log(dataCopy);
let arr=[1,2,3,4,5]; //val
let obj1={...arr}; //obj>key:val
console.log(obj1)
