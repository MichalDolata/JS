/**
 * Created by MichalDolata on 13.12.2016.
 */
const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = "round";
ctx.lineJoin = "round";



let isDrawing = false;
let prevX = 0, prevY = 0;
let cosArg = 0, rgbArg = 0, rgbArgGrow = true;

function draw(e) {
    if(isDrawing) {
        ctx.lineWidth = 50*Math.abs(Math.cos(cosArg));
        ctx.strokeStyle  = `rgb(128, 128, ${rgbArg})`;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        [prevX, prevY] = [e.offsetX, e.offsetY];
        cosArg += Math.PI/250;
        if(rgbArgGrow) {
            rgbArg++;
        } else {
            rgbArg--;
        }
        if(rgbArg % 255 === 0) {
            rgbArgGrow = !rgbArgGrow;
        }
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [prevX, prevY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

