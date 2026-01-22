let id = setInterval(() => {
    console.log("Hello world");
},2000)
setTimeout(() =>{
  clearInterval(id);//for stopping set interval
}, 10000)