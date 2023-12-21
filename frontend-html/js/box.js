let x = 0
let y = 0
let fx = 0
let fy = 0
let score = 0
const box = document.getElementById('box')
const frog = document.getElementById('frog')

function frogJump() {
    fx = Math.floor(Math.random() * 1366)
    fy = Math.floor(Math.random() * 768)
    frog.style.top = fy + 'px'
    frog.style.left = fx + 'px'
}

function moveBox(direction) {
    const xx = `: x: ${x}, y: ${y}, fx: ${fx}, fy: ${fy}`
    document.getElementById('score').innerText = score+xx
    if(x === fx && y === fy) {
        score++
        frogJump()
    }
    switch (direction) {
        case 'up':
            y -= 10
            break;
        case 'down':
            y += 10
            break;
        case 'right':
            x += 10
            break;
        case 'left':
            x -= 10
            break;
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

// add event listener to the document keydown event
document.addEventListener('keydown', function (event) {
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moveBox('up')
            break;
        case 'ArrowDown':
            moveBox('down')
            break;
        case 'ArrowRight':
            moveBox('right')
            break;
        case 'ArrowLeft':
            moveBox('left')
            break;
        case 'w':
            moveBox('up')
            break;
        case 's':
            moveBox('down')
            break;
        case 'd':
            moveBox('right')
            break;
        case 'a':
            moveBox('left')
            break;
        case ' ':
            frogJump()
            break;
        case 'j':
            frogJump()
            break;
    }
})

