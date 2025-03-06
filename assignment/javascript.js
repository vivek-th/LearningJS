document.addEventListener('DOMContentLoaded', ()=>{



console.log("hello")
let mytable= document.querySelector(".mytable")

let students=[
    {
        name:"vivek",
        age:22
    },
    {
        name:"rahul",
        age:21,
    },
    {
        name:"rohan" ,
        age:24,
    }
]

let tabledata=""
for(let i=0; i<students.length; i++){
    tabledata += `<tr><td>${students[i].name}</td><td> ${students[i].age} </td><tr>`
}
mytable.innerHTML=tabledata;
})