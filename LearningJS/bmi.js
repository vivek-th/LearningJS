const clock= document.querySelector("#clock")
const body= document.querySelector("#thebody")


setInterval(()=>{
    const mydate= new Date;
    clock.innerHTML=mydate.toLocaleTimeString();
}, 1000);

const image = document.querySelector("#myimg")


image.addEventListener('click', (event)=>{
    // alert('you clicked on image')
    console.log("I am inner element")
    event.stopPropagation();
    image.remove();
}, true);
body.addEventListener('click', (event)=>{
    // alert('I am outer element')
    console.log("I am outer element")
},false)

const heading= document.querySelector("#heading")
const changeHeading= function(){
    heading.innerHTML="<h1>This is changed clock<h1>"
}
setTimeout(changeHeading, 3000)