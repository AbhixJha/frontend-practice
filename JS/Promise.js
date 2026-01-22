function savetoDb(data, success, failure){
    let internetSpeed=Math.floor(Math.random()*10)+1; // 1 to 10
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }}

    savetoDb(
        "Apna bihar",
        () =>{
            console.log("Sucess : your data was saved : ");
        },
        () =>{
            console.log("Failure : weak connection. data not saved");
        }
    );