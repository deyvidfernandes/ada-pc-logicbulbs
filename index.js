import logicRoomArray from './pages/logicRoomArray.js'
import homePage from './pages/home/HomePage.js'

class Application {
    static root = document.getElementById('root')
    static pages = {
        common: [],
        logicRooms: []
    }
    static isBulbOn = false

    static addPage(page) {
        this.pages.common.push(page)
    }
    static addLogicRoom(logicRoom) {
        this.pages.logicRooms.push(logicRoom)
    }
    static addLogicRoomsFromArray(logicRoomArray) {
        this.pages.logicRooms = [...logicRoomArray]
    }
    static changePageById(id) {
        for (const key in this.pages) {
            const pageArray = this.pages[key]
            const newPage = pageArray.find((page) => page.id == id)
            if (newPage) this.setPage(newPage)
        }
    }

    static setPage(newPage) {
        this.root.innerHTML = newPage.htmlCode
        newPage.pageLogic(this)
    }
}

Application.addLogicRoomsFromArray(logicRoomArray)
Application.addPage(homePage)

// Application.addNewLogicRoom(
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )

Application.changePageById("home")

// NAND Gate by Mohamed Mb from <a href="https://thenounproject.com/browse/icons/term/nand-gate/" target="_blank" title="NAND Gate Icons">Noun Project</a> (CC BY 3.0)
// NAND Gate by Mohamed Mb from <a href="https://thenounproject.com/browse/icons/term/nand-gate/" target="_blank" title="NAND Gate Icons">Noun Project</a> (CC BY 3.0)