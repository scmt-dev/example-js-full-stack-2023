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
