const startBtn = document.querySelector(".startBtn");
const progress = document.querySelector(".progress");

let marks = new Audio("marks.m4a");
let set = new Audio("set.m4a");
let gun = new Audio("gun.m4a");

marks.volume = 1.0;
set.volume = 1.0;
gun.volume = 1.0;

marks.autoplay = true;
set.autoplay = true;
gun.autoplay = true;

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("hide");
  progress.classList.remove("hide");
  setTimeout(start, 1000);
});

// Function to play the 'marks' sound
function playMarksSound() {
  return new Promise((resolve) => {
    marks.play();
    duration = Math.floor(Math.random() * 4000) + 18000;
    setTimeout(resolve, duration);
    console.log(duration);
  });
}

// Function to play the 'set' sound
function playSetSound() {
  return new Promise((resolve) => {
    set.play();
    duration = Math.floor(Math.random() * 500) + 1000;
    setTimeout(resolve, duration);
    console.log(duration);
  });
}

// Function to play the 'gun' sound
function playGunSound() {
  return new Promise((resolve) => {
    gun.play();
    duration = 200;
    setTimeout(resolve, duration);
    console.log(duration);
  });
}

async function start() {
  try {
    // Play sounds in the desired order
    await playMarksSound();
    console.log("Marks sound played");

    await playSetSound();
    console.log("Set sound played");

    await playGunSound();
    console.log("Gun sound played");

    // Show the start button after gun sound + 1 second
    setTimeout(() => {
      startBtn.classList.remove("hide");
      progress.classList.toggle("hide");
      console.log("Start button shown");
    }, 1000);
  } catch (error) {
    console.error("Error:", error);
  }
}
