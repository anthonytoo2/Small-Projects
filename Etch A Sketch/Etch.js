const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;
let lastX = canvas.width / 2;
let lastY = canvas.height / 2;
let hue = 0;
let direction = true;

function draw(e){
    isDrawing = true;
    if(!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);

    if (e.key === 'a' || e.key === 'A'){
        lastX -= 10;
    }
    else if (e.key === 'd' || e.key === 'D'){
        lastX += 10;
    }
    else if (e.key === 'ArrowRight'){
        lastY -= 10;
    }
    else if (e.key === 'ArrowLeft'){
        lastY += 10;
    }
    else{
        return;
    }
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
}

window.addEventListener('keydown',draw);
window.addEventListener('keydown', () => isDrawing = true);
window.addEventListener('keyup',() => isDrawing = false);