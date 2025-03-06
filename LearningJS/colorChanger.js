const randomColor = function () {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

let startfunction;
const button = document.querySelector("#StartButton");
startfunction=() => setInterval((event) => {
  randomColor();
  document.body.style.backgroundColor = randomColor();
}, 1000);
button.addEventListener("click", startfunction);

const stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", () => {
  clearInterval(startfunction());
  console.log("The function is stopped");
});
window.addEventListener('keydown',(event)=>{
    console.log(`e.key is ${event.key} \n e.keycode is ${event.KeyCode} \n e.code is ${event.code}`)
})
