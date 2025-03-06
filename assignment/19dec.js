// //maths operations
// console.log(2+2+"1")
// //41

// console.log('1' + 2 + 2)
// let apples = "2";
// let oranges = "3";

// // with be number
// console.log( +apples + +oranges ); // 5

// // the same as
// // alert( Number(apples) + Number(oranges) ); // 5

// let n = 2;
// n += 5; 
// n *= 2; 
// console.log( n ); // 14

// let 

let src="wrkjk"

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.body.append(script);
  }

let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!