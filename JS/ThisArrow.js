const student={
    name: "abhi",
    marks: 89,
    prop:this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope-->window(global scope)
        return this.marks;
    },
    getInfo1:function(){
        setTimeout( ()=> {
        console.log(this);//student
        }, 2000)
    },
    getInfo2:function() {
        setTimeout(function(){
        console.log(this);//window
    },3000)
    },
};