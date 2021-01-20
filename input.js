let inputDirection = { x: 0, y:0 }
let lastInputDirection = { x:0, y:0}

//modify inputDirection when key is clicked
window.addEventListener('keydown', e=>{
    switch (e.key) {
        case 'ArrowUp':
            //Cannot move in the opposite direction (ex: from up to down)
            if (lastInputDirection.y !== 0) break
            //-1 moves upwards
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            //1 moves down
            inputDirection = { x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            //-1 moves left
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            //1 moves right
            inputDirection = { x: 1, y: 0}
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}