const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

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
        lastX -= 5;
    }
    else if (e.key === 'd' || e.key === 'D'){
        lastX += 5;
    }
    else if (e.key === 'ArrowRight'){
        lastY -= 5;
    }
    else if (e.key === 'ArrowLeft'){
        lastY += 5;
    }
    else{
        return;
    }
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
}

function clear(e){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  lastX = canvas.width / 2;
  lastY = canvas.height / 2;
}

window.addEventListener('keydown',draw);
window.addEventListener('keydown', () => isDrawing = true);
window.addEventListener('keyup',() => isDrawing = false);

window.addEventListener('keydown', (e) => {
    if (e.key === ' '){
        clear();
    }
});