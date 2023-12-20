let y = 0
let x = 0
const box = document.getElementById('box')

function move(direction) {
    switch (direction) {
        case 'up':
            y -= 10
            break
        case 'down':
            y += 10
            break
        case 'left':
            x -= 10
            break
        case 'right':
            x += 10
            break
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key
    console.log(keyName)
    switch (keyName) {
        case 'ArrowUp':
            move('up')
            break
        case 'ArrowDown':
            move('down')
            break
        case 'ArrowLeft':
            move('left')
            break
        case 'ArrowRight':
            move('right')
            break
        // w
        case 'w':
            move('up')
            break
        // s
        case 's':
            move('down')
            break
        // a
        case 'a':
            move('left')
            break
        // d
        case 'd':
            move('right')
            break
    }
})