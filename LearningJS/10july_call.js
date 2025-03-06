const setname=function(username){
    this.username=username;
    console.log("setname is called")
}

const setdetails=function(username, age, email){
    // this.username= username,

    setname.call(this, username),
    this.age= age,
    this.email= email

    console.log(` Your name is ${this.username} of ${this.age} years and email is ${this.email}`)
}

const userone= new setdetails("Vivek",22, "vivu@gmail.com" )