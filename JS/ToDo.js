let todo=[]
let req = prompt("Please Enter Your Request");
while(true){
  if(req == "exit"){
   console.log("you exited from app");
    break;
}
  if(req=="list"){
    console.log("________________")
    for(let i=0; i<todo.length; i++){
      console.log(i,todo[i]);
    }
    console.log("________________")
  }
  else if(req=="add"){
    let task=prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  }
  else if(req=="delete"){
    let index=prompt("please enter the index of the task you want to delete");
    todo.splice(index,1);
    console.log("task deleted");
  }
  else{
    console.log("invalid request");
  }
  req = prompt("Please Enter Your Next Request ");
  

}