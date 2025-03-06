const mypromise= new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("This function is executed");
        resolve()
    }, 1000)
})

mypromise.then(function(){
    console.log(" then is also executd")
})

const secondPromise= new Promise(function(resolve, reject){
    setTimeout(()=>{
    console.log("This is second promise call")
    resolve()
    }, 1000)
}).then(()=>console.log("This is new call"))

//passing the arguments by chaining

const thirdPromise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error) {
            resolve({username:"vivek" , age:22})
            // resolve("This is thirdpromise")
        }
        else{
            reject("This is an immediate error")
        }
    },1000)
});

// using try and catch block

// thirdPromise
// .then((user)=>{
//     return user.age;
// })
// .then((age)=>{
//     console.log(age)
// })
// .catch((error)=>{
//     console.log(error)
// })

//This is using async wait option

// async function consumePromise(){
//     const response= await thirdPromise;
//     console.log(response.age);
// }
// consumePromise()

//using fetch
async function theThirdPromise(){
    try{
        const response = await fetch('https://api.api-ninjas.com/v1/randomuser')
        console.log(response);
    }
    catch{
        console.log(error)
    }
}

// theThirdPromise()

fetch('https://randomuser.me//apiseed=wealth' )
.then((response)=>{
    return response.json()
})
.then((thisresponse)=>{
    console.log(thisresponse)
})
.catch((error)=>console.log(`This is error: ${error}`))


