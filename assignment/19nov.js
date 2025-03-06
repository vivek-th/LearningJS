Array.prototype.Mymap= function (cb){
    let temp=[];
    for (let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp
};

const nums=[1,2,3,4]
const multhree= nums.Mymap((num,i, arr)=>{
    return num*2
}) 
console.log(multhree)

const stu=[
    {name:"Vivek", age:23},
    {name:"Rahul", age:34},
    {name:"Pooja", age:20}
]
const names= stu.map((stu)=>stu.name.toUpperCase())
console.log(names )

const smallstudents= stu.filter((stu)=>{return stu.age<30})
console.log(smallstudents)

const sum= stu.reduce((acc, curr)=>acc+curr.age,0)
console.log(sum)