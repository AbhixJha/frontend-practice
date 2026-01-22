

let students =[{
    name: "uttam",
    marks : 92,
},
{
    name:"Akarsh",
    marks:58,
},
{
    name: "deepak",
    marks: 94,
},
{
    name:"pawan",
    marks: 78,
},
{
    name : "anmol",
    marks : 88,
},
];
let gpa =students.map((el) => {
    return el.marks/10;
});
