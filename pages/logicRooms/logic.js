import "@dotlottie/player-component";
import addAnchorLogic from "../../components/anchor";

let isAnimationPlaying = false
let bulbOnAnimationPosition = '70%'


export default addRoomPageLogic = (application, booleanLogic) => {
    const player = document.querySelector("dotlottie-player");
    player.style.opacity = 0
    application.isBulbOn = false
    
    player.addEventListener('ready', () => {
        if (booleanLogic(false, false)) {
            application.isBulbOn = true
            player.seek(bulbOnAnimationPosition)
        }
        player.style.opacity = 1
    })
        
    const switch1 = document.getElementById('light-switch1')
    const switch2 = document.getElementById('light-switch2')
    
    const playAnimation = () => {
        isAnimationPlaying = true
        switch1.style.cursor = 'default'
        if (switch2) switch2.style.cursor = 'default'
        player.play()
    }
    const endAnimation = () => {
        isAnimationPlaying = false
        switch1.style.cursor = 'pointer'
        if (switch2) switch2.style.cursor = 'pointer'
        player.stop()
        player.seek(bulbOnAnimationPosition)
    }
    

    const updateBulb = () => {
        if (booleanLogic(switch1.checked, switch2?.checked) && !application.isBulbOn ) {
            playAnimation()
            application.isBulbOn = true
            setTimeout (() => {
                endAnimation()
            }, 1500)
        } else if (!booleanLogic(switch1.checked, switch2?.checked)) {
            player.stop()
            application.isBulbOn = false
        }

    }

    switch1.addEventListener("click", (event) => {
        if (isAnimationPlaying) {
            event.preventDefault()
        } else {
            updateBulb()
        }
            
    })

    switch2?.addEventListener("click", (event) => {
        if (isAnimationPlaying) {
            event.preventDefault()
        } else {    
            updateBulb()
        }
    })

    addAnchorLogic(application)
}