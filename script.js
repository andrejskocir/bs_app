const startBtn = document.querySelector(".startBtn")

let marks = new Audio("marks.m4a")
let set = new Audio("set.m4a")
let gun = new Audio("gun.m4a")

marks.volume = 1.0
set.volume = 1.0
gun.volume = 1.0

marks.autoplay = true;
set.autoplay = true;
gun.autoplay = true;


startBtn.addEventListener("click",()=>{
    startBtn.classList.toggle("hide")
    setTimeout(start, 3000)

})
œ

function start(){

    let markDelay = Math.floor(Math.random()*5000)
    let setDelay = Math.floor((Math.random()*10000 + 3000) + markDelay)
    let gunDelay = Math.floor((Math.random()*5000) + setDelay)
    setTimeout(() => {
        marks.play()
        console.log(markDelay)
      }, markDelay);
      setTimeout(() => {
        set.play()
        console.log(setDelay)
      }, setDelay);
      setTimeout(() => {
        gun.play()
        console.log(gunDelay)
      }, gunDelay);
      setTimeout(() => {
        startBtn.classList.remove("hide")
      }, gunDelay+1000);

}