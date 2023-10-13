import addRoomPageLogic from './logic.js'

const getFunctionArgs = (func) => {  
    return (func + '')
      .replace(/[/][/].*$/mg,'') // strip single-line comments
      .replace(/\s+/g, '') // strip white space
      .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
      .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
      .replace(/=[^,]+/g, '') // strip any ES6 defaults  
      .split(',').filter(Boolean); // split & filter [""]
}  

logicRoomTemplate = `
    <anchor ref="home" id="return-anchor"><img src="../../static/opened-door.svg"/></anchor>
    <h1 id="roomName"></h1>

    <dotlottie-player src="../../static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>
            
    <div id="switch-container">
        <input type="checkbox" id="light-switch1" name="2"/>
        <label for="light-switch1" id="light-switch-label1">
            <div class="switch"></div>
        </label>
        
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>
    </div>
    <img class="logic-gate-icon" src="" height="64px">
`

export default class LogicRoom {
    name;
    roomLogic;
    pageLogic;
    htmlCode;
    iconSrc;
    id;

    constructor(name, roomLogic, iconSrc, id) {
        this.name = name
        this.roomLogic = roomLogic
        this.pageLogic = (application) => {addRoomPageLogic(application, roomLogic)}
        this.iconSrc = iconSrc
        this.id = id
        this.htmlCode = logicRoomTemplate.replace('<h1 id="roomName"></h1>', `<h1 id="roomName">${name}</h1>`)
        this.htmlCode = this.htmlCode.replace(
            '<img class="logic-gate-icon" src="" height="64px">', 
            `<img class="logic-gate-icon" src="${iconSrc}" height="128px">`
        )
        if (getFunctionArgs(roomLogic).length == 1) {
            this.htmlCode = this.htmlCode.replace(
                `
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>`,
                ''
            ).replace(
                'height="128px">', 
                `height="96px">`
            )
        }
    }
}
