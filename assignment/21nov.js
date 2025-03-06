function fn() {
  console.log(arguments);
}
// fn(1, 2, 3);

const fnarr=(arguments)=>{
    console.log(arguments)
}
// fnarr(1,2,3)

let user={
   
    username:"Vivu",

    fun1:()=>{
        console.log("Fun1 is calling " + this.username)
    },

    fun2(){
        console.log("Fun2 is calling " + this.username)
    }
}
user.fun1();
user.fun2()

//checking the lexical scoping 

function local(){
    let username = "Coding Vivek"
}
console.log(username)

local