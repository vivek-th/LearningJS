const button= document.querySelectorAll(".myButton");
const body= document.querySelector("body")

// console.log(button);
button.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click', function(event){
        
        body.style.backgroundColor=event.target.id;

    })
})