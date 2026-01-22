/*let para1= document.createElement("p");
para1.innerText="Hey I'm red !";
document.querySelector('body').append(para1);
para1.classList.add("red") */

let div1=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p")
h1.innerText = "I'm Ironman ";
para2.innerText="ME TOO !"
div1.append(h1);
div1.append(para2);
div1.classList.add("box")
document.querySelector('body').append(div1);