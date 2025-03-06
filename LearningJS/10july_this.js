// const user={
//     name:"Vivek",
//     age:22
// }
// console.log()

function user(username, age, inLoggedIn){
    this.username= username,
    this.age= age,
    this.inLoggedIn= true

    // return this;
};

// console.log(userone)
// console.log(usertwo)

user.prototype.nameage= function (){
   console.log(`the age is ${this.age} and name is ${this.username}`)
}

Object.prototype.printing=function(){
    console.log(`the name is ${this.username}`)
}
const userone= new user("vivek", 12, true);
const usertwo= new user("second name", 34, false);

// userone.nameage()
userone.printing()