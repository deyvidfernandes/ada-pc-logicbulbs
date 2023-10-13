import addAnchorLogic from "../../components/anchor"

export default addHomePageLogic = (application) => {
    const player = document.querySelector("dotlottie-player")
    console.log(player)
    player.addEventListener('ready', () => {
        if (application.isBulbOn) {
            player.seek('70%')
        } else { 
            player.play()
            setTimeout (() => {
                player.stop()
                player.seek('70%')
            }, 1500)
        }
    })
    addAnchorLogic(application)
}