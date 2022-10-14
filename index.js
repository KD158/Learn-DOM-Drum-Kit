// this function will play the sound that you put in it's arguement. sound should be a character
function playSound(sound) {
    var url= ""
    if (sound == "w") {
        url= "sounds/tom-1.mp3"
    }
    if (sound == "a") {
        url= "sounds/tom-2.mp3"
    }
    if (sound == "s") {
        url= "sounds/tom-3.mp3"
    }
    if (sound == "d") {
        url= "sounds/tom-4.mp3"
    }
    if (sound == "j"){
        url= "sounds/snare.mp3"
    }
    if (sound == "k") {
        url= "sounds/crash.mp3"
    }
    if (sound == "l") {
        url= "sounds/kick-bass.mp3"
    }
    var audio = new Audio(url)
    audio.play()
}

function play(key, target){
    playSound(key)
    target.classList.add("pressed")
    setTimeout(function(){target.classList.remove("pressed")}, 100)
}

var w = document.querySelector(".w.drum")
var a = document.querySelector(".a.drum")
var s = document.querySelector(".s.drum")
var d = document.querySelector(".d.drum")
var j = document.querySelector(".j.drum")
var k = document.querySelector(".k.drum")
var l = document.querySelector(".l.drum")

// add listener for click events
w.addEventListener("click", () => {
    play("w", w)
})
a.addEventListener("click", () => {
    play("a", a)
})
s.addEventListener("click", () => {
    play("s", s)
})
d.addEventListener("click", () => {
    play("d", d)
})
j.addEventListener("click", () => {
    play("j", j)
})
k.addEventListener("click", () => {
    play("k", k)
})
l.addEventListener("click", () => {
    play("l", l)
})

//add listener for keystrokes

document.addEventListener("keypress", (event) => {
    var key = event.key

    if (key == "w") {
        play("w", w)
    }
    if (key == "a") {
        play("a", a)
    }
    if (key == "s") {
        play("s", s)
    }
    if (key == "d") {
        play("d", d)
    }
    if (key == "j"){
        play("j", j)
    }
    if (key == "k") {
        play("k", k)
    }
    if (key == "l") {
        play("l", l)
    }
})
