
export default addAnchorLogic = (application) => {

    const roomButtonList = document.querySelectorAll('anchor')
    
    roomButtonList.forEach((button) => {
        button.addEventListener('click', () => {
            application.changePageById(button.getAttribute('ref'))
        })
    })
}