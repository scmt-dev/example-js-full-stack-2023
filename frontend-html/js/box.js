let x = 0
let y = 0
const box = document.getElementById('box')

function moveBox(direction) {
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
    }
})