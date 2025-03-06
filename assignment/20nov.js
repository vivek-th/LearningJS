// this is the revision work for 20nov, rest work on get is done in Backend folder


// for(var i=0; i<10; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, i*1000)
// }

function multiply(num1, num2){
    console.log(num1*num2)
}
// multiply(5,6)

const arr=[2,5]
// multiply(...arr)


function multiplyNumbers(...nums){
    console.log(nums[0]*nums[1])
}
multiplyNumbers(...arr)

for (var i = 0; i < 3; i++) {
    console.log(i); // Logs 0, 1, 2 immediately
}
console.log(i); // Logs 3 because `var` is function-scoped


for (let i = 0; i < 3; i++) {
    console.log(i); // Logs 0, 1, 2 immediately
}
console.log(i); // Throws an error because `i` is block-scoped

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("var: ", i); // All callbacks log the same value
    }, i * 1000);
}
for (var i = 0; i < 5; i++) {
    (function (currentI) {
        setTimeout(function () {
            console.log("fixed var: ", currentI);
        }, currentI * 1000);
    })(i); // Pass the current value of `i` to the IIFE
}

console.log("Starting with 'var':");

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        let time = new Date().toLocaleTimeString();
        console.log(`var loop: i = ${i}, time = ${time}`);
    }, i * 1000);
}

setTimeout(() => {
    console.log("\nNow starting with 'let':\n");
    
    for (let j = 0; j < 5; j++) {
        setTimeout(function () {
            let time = new Date().toLocaleTimeString();
            console.log(`let loop: j = ${j}, time = ${time}`);
        }, j * 1000);
    }
}, 6000); // Delay to avoid overlapping outputs

setTimeout(() => {
    console.log("\nFixing 'var' with IIFE:\n");
    
    for (var k = 0; k < 5; k++) {
        (function (currentK) {
            setTimeout(function () {
                let time = new Date().toLocaleTimeString();
                console.log(`IIFE var loop: k = ${currentK}, time = ${time}`);
            }, currentK * 1000);
        })(k);
    }
}, 12000); // Delay to avoid overlapping outputs
