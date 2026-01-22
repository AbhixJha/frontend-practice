let btns= document.querySelectorAll("button");

for(btn of btns){
btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);
btn.addEventListener("click",sayHobbies);
btn.addEventListener("dblclick",function (){
    console.log("you double clickked me");
});
  }

function sayHello(){
    alert("Hello")
}
function sayName(){
    alert("Abhi");
}
function sayHobbies(){
    alert("coding & Singing");
}
