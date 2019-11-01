let player = document.querySelector(".player")
let video = player.querySelector(".viewer")
let play_button = document.getElementById("play")
let range = document.getElementById("volume")
let playBack = document.getElementById("playBack")
let range1 = document.getElementById("range")
let bar = document.getElementById("progress_bar")
function play(){
  video.paused? video.play() : video.pause()
}

function updateButton() {
const icon = this.paused ? '►' : '❚ ❚';
play_button.textContent = icon;
}
function updateVolume(){
 const x = range.value
 video.volume = x
}
function decrease10(){
 video.currentTime = video.currentTime - 10
}

function increase25(){
 video.currentTime = video.currentTime + 25
}

function dragTime(){
 const x = range1.value
 console.log(x)
 video.currentTime = x
}
function progress(){
 const time = (video.currentTime / video.duration) * 100
 bar.style.width = `${time}%`
 bar.innerText = `${Math.round(time).toString()}%`
}

video.addEventListener("click",play)
video.addEventListener("play",updateButton)
video.addEventListener("pause",updateButton)
volume.addEventListener("mousemove",updateVolume)
playBack.addEventListener("click",decrease10)
playForward.addEventListener("click",increase25)
range1.addEventListener("mousemove",dragTime)
video.addEventListener("timeupdate",progress)
