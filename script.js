const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');

// Setting canvas to full size

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - document.querySelector('.toolbar').offsetHeight;
}
resizeCanvas();
// window.addEventListener('resize', resizeCanvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight -document.querySelector('.toolbar').offsetHeight;

let drawing = false;

canvas.addEventListener('mousedown', ()=> drawing = true);
canvas.addEventListener('mouseup', ()=> drawing = false);
canvas.addEventListener('mouseout', ()=> drawing = false);

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = brushSize.value;
    ctx.lineCap = 'rount';
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(e.clientX, e.clientY-document.querySelector('.toolbar').offsetHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY-document.querySelector('.toolbar').offsetHeight);

}

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});