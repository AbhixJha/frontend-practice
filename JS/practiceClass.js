/*h1=document.querySelector("h1");

function changecolor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
       if(nextColorChange) nextColorChange();
},delay);
}

/*setTimeout(() =>{
    h1.style.color="red";
},1000);

setTimeout(() =>{
    h1.style.color="blue";
},2000);

setTimeout(() =>{
    h1.style.color="green";
},3000);
h1=document.querySelector("h1");
function changeColor(color){
    h1.style.color=color;
}
setTimeout(changeColor("red"),1000);
setTimeout(changeColor("blue"),2000);
setTimeout(changeColor("green"),3000);

changecolor("red",1000,()=>{
    changecolor("orange",1000);
})*/
const promiseOne =new Promise(function(resolve,reject){
    //do an asynchronous task
    //DB calls,cryptography,network
    setTimeout(function(){
     console.log('asynch task is complete');
    },1000);
    })
    promiseOne.then(function(){
        console.log("Promise consumed");
    })
