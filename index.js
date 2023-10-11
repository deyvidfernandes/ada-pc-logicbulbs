import '@dotlottie/player-component';

const switch1 = document.getElementById('light-switch1')
const switch2 = document.getElementById('light-switch2')
const player = document.querySelector("dotlottie-player");
let animationIsPlaying = false

switch1.addEventListener("click", (event) => {
    if (animationIsPlaying) {
        event.preventDefault()
    } else {
        console.log(switch1.checked)
        updateBulb()
    }
        
})

switch2.addEventListener("click", (event) => {
    if (animationIsPlaying) {
        event.preventDefault()
    } else {
        console.log(switch2.checked)
        updateBulb()
    }
})

updateBulb = () => {
    if (switch1.checked && switch2.checked) {
        animationIsPlaying = true
        player.play()
        setTimeout (() => {
            player.stop()
            player.seek('70%')
            animationIsPlaying = false
        }, 1500)

    } else {
        player.stop()
    }

}