
var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillRect(20, 40, 250, 1)
ctx.fillRect(30, 100, 100, 10)
ctx.fillRect(50, 80, 50, 2)
ctx.stroke();
