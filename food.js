import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFood()

//Gains one block everytime the snake eats a piece of food
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFood()
    }

}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}
//Randomizing where the new food will be
function getRandomFood() {
    let newFood
    while (newFood == null || onSnake(newFood)){
    newFood = randomGridPosition()
    }
return newFood
}
