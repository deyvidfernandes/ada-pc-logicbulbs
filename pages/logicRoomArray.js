import LogicRoom from "./logicRooms/LogicRoom"

export default logicRoomArray = [
    new LogicRoom(
        "None", (a) => a, 
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Ellipsis.svg", 
        "none"
    ),
    new LogicRoom(
        "NOT", (a) => !a, 
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/NOT_ANSI.svg", 
        "not"
    ),
        new LogicRoom(
        "AND", (a, b) => a && b, 
        "https://upload.wikimedia.org/wikipedia/commons/6/64/AND_ANSI.svg", 
        "and"
    ),
    new LogicRoom(
        "OR", (a, b) => a || b, 
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
        "or"
    ),
    new LogicRoom(
        "NAND", (a, b) => !(a && b), 
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/NAND_ANSI.svg", 
        "nand"
    ),
    new LogicRoom(
        "NOR", (a, b) => !(a || b), 
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/NOR_ANSI.svg", 
        "nor"
    ),
    new LogicRoom(
        "XOR", (a, b) => ( a && !b ) || ( !a && b ), 
        "https://upload.wikimedia.org/wikipedia/commons/0/01/XOR_ANSI.svg", 
        "xor"
    ),
    new LogicRoom(
        "XNOR", (a, b) => !(( a && !b ) || ( !a && b )), 
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/XNOR_ANSI.svg", 
        "xnor"
    )
]