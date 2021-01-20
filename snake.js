import { getInputDirection } from "./input.js"

//How many times the snake moves per second
export const SNAKE_SPEED = 5

//Array of x and y positions
const snakeBody = [{ x: 11, y: 11 }]

let newSegments = 0

export function update() {
    addSegments()
    //Give the second last element of snake
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length -2; i >= 0; i--){
        //Making it a new object to avoid reference problems - shifting snake so that everything moves forward one position
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
    
}

export function expandSnake(amount) {
    newSegments  += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        //Ignoring the head so that when it's checking, it won't return that the snake head is on the snake head
        if (ignoreHead&& index === 0 ) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead () {
    //First element of the array will always be the head
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true})
}


function equalPositions(pos1, pos2) {
    return (
        //If two positions (food and snake body) are the exact same, onSnake will return true
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

//Adding segments to the bottom of the snake
function addSegments() {
    for (let i = 0; i < newSegments; i++){
        //Appending a new segment onto the snake
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}