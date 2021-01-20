export function randomGridPosition () {
    return {
        //Getting a number between 0 and 0.999999... and then multiplying it by 21 (how big the grid is), giving us a number between 0-20.9999...
        //Adding one because we use Math.floor meaning that 20.999.. would become 20, but we want 21 included too
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1,
    }
}

//Checking if the position is bigger or smaller than the grid size 
export function outsideGrid (position) {
    return (
        position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21
    )
}