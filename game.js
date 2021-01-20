//FOLLOWED THIS TUTORIAL: https://www.youtube.com/watch?v=QTcIXok9wNY&t=22s
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid} from './grid.js'

let lastRender = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

//Take the timestamp of when the function runs
function main(currentTime) {
    if(gameOver) {
        if(confirm ('You lost! Click on OK to restart the game. Good luck!')) {
            //Sets it as the current location, refreshing the page
            window.location = '/'
        }
        //Stop the game if OK isn't clicked
        return
    }
    
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRender) / 1000
   
    // Example: 1/SNAKE_SPEED = 1/2 = 0.5 ---- if secSinceLastRender is smalled than 0.5, we don't need to move the snake
    if (secSinceLastRender < 1 / SNAKE_SPEED) return
   
    //Constantly have a new last render time
    lastRender = currentTime

    update()
    draw()
}

//To start our loop for the first time
window.requestAnimationFrame(main)

function update() {
updateSnake()
updateFood()
checkDeath()
}

function draw() {
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

//Game ends if snake runs into its own body or into the wall
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}