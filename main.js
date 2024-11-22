const gameBorad = document.querySelector(".gameboard")
const playerDisplay = document.querySelector("player")
const infoDisplay = document.querySelector("info-display")
const width = 8;

const starPiece = [
        rook, knight, bishop, queen, king, bishop, knight, rook,
        pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
        rook, knight, bishop, queen, king, bishop, knight, rook,

    ]
    // console.log(gameBorad)


function createBoard() {
    starPiece.forEach((starPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('square-id', i)
        square.innerHTML = starPiece
        const row = Math.floor(i / 8)
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "beige" : "brown")
        } else {
            square.classList.add(i % 2 === 0 ? "brown" : "beige")

        }
        if (i <= 15) {
            square.firstChild.firstChild.classList.add("black")
        }
        if (i >= 48) {
            square.firstChild.firstChild.classList.add("white")
        }
        if (square.firstChild) {
            square.firstChild.setAttribute('draggable', true)
        }
        gameBorad.appendChild(square)
    })
}
createBoard()


const allSquare = document.querySelectorAll('.gameboard .square ')

// console.log(allSquare)
allSquare.forEach((square) => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPositionId
let draggedElement

function dragStart(e) {
    if (e.target.firstChild == null) {
        e.preventDefault()
    }
    startPositionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    if (e.target.firstChild === null) {
        e.target.appendChild(draggedElement)

    } else {
        // if(e.target.firstChild)
        console.log(e.target)
        e.target.firstChild.remove();
        e.target.appendChild(draggedElement)
    }

}