import logicRoomArray from '../logicRoomArray'
import addHomePageLogic from './logic';

function replaceLastOccurrence(inputString, search, replace) {
    const lastIndex = inputString.lastIndexOf(search);
    
    if (lastIndex === -1) {
        return inputString;
    }
    
    const beforeLastOccurrence = inputString.substring(0, lastIndex);
    const afterLastOccurrence = inputString.substring(lastIndex + search.length);

    const newString = beforeLastOccurrence + replace + afterLastOccurrence;

    return newString;
}

homePageEmpty = `
    <h1 id="roomName">Logicbulbs</h1>

    <dotlottie-player src="../../static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>   
    <div id="rooms-container">

    </div>
`
let homePageReady = homePageEmpty;

logicRoomArray.forEach((room) => {
    homePageReady = replaceLastOccurrence(homePageReady,
    '</div>',
    `
        <anchor ref="${room.id}">
            <h2>${room.name}</h2>
            <img src="${room.iconSrc}"/>
        </anchor>
    </div>
    `
    )
}
)

class HomePage {
    pageLogic;
    htmlCode;
    id;

    constructor() {
        this.pageLogic = addHomePageLogic
        this.htmlCode = homePageReady
        this.id = "home"
    }
}

export const homePage = new HomePage();

export default homePage