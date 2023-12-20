function getInputValue(id) {
    return document.getElementById(id).value;
}

function display(data){
    const _ = document.getElementById('display');
    _.innerHTML = data;
}
function checkInput() {
    const x = getInputValue('x');
    const y = getInputValue('y');
    if(!x){
        return alert('input x')
    }
    if(!y){
        return alert('input y')
    }
    return {
        x: parseFloat(x),
        y: parseFloat(y)
    }
}

function add() {
    const {x, y} = checkInput();
    display(x + y)
}

function minus() {
    const {x, y} = checkInput();
    display(x - y)
}

// arrow function
const multiply = () => {
    const {x, y} = checkInput();
    display(x * y)
}
const divide = () => {
    const {x, y} = checkInput();
    display(x / y)
}

const say = (name) => console.log('hello'+ name);
say('thanh');

const box = document.getElementById('box');
let topPosition = 0;
let leftPosition = 0;
const randomColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
}
function move(direction) {
    switch (direction) {
        case 'right':
            leftPosition += 10;
            break;
        case 'left':
            leftPosition -= 10;
            break;
        case 'up':
            topPosition -= 10;
            break;
        case 'down':
            topPosition += 10;
            break;
    }
    box.style.backgroundColor = randomColor();
    box.style.top = topPosition + 'px';
    box.style.left = leftPosition + 'px';
}

// add key arrow on keyboard
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            move('left');
            break;
        case 38:
            move('up');
            break;
        case 39:
            move('right');
            break;
        case 40:
            move('down');
            break;
        // w
        case 87:
            move('up');
            break;
        // a
        case 65:
            move('left');
            break;
        // s
        case 83:
            move('down');
            break;
        // d
        case 68:
            move('right');
            break;
    }
})