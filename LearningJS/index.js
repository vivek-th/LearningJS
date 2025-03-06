const arr=[2,3,4,5,1,5,6,9,669,4,6]

console.log(arr.filter((nums)=>nums>4))


const mymap= new Map();
mymap.set("name", "Vivek")
mymap.set("age", 22)

for(const [key,values] of mymap){
    console.log(`your ${key} is ${values}`)
}
