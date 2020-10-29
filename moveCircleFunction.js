
        var canvas;
        var ctx;
        var dx = 20;
        var dy = 20;
        var x = 400;
        var y = 400;
        var WIDTH = 800;
        var HEIGHT = 800;

        function circle(x, y, r){
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI*2, true);
            ctx.fill();
        }

        function rect(x,y,w,h) {
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        function clear(){
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
        }

        function init() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            return setInterval(draw, 5);
        }

        function doKeyDown(evt){
            switch (evt.keyCode){
                case 38:
                if(y - dy > 0){
                    y -= dy;
                }
                break;
                case 40:
                if(y + dy < HEIGHT){
                    y += dy;
                }
                break;
                case 37:
                if(x - dx > 0){
                    x -= dx;
                }
                break;
                case 39:
                if(x + dx < WIDTH){
                    x += dx;
                }
                break;
                case 87:
                if(y - dy > 0){
                    y -= dy;
                }
                break;
                case 83:
                if(y + dy < HEIGHT){
                    y += dy;
                }
                break;
                case 65:
                if(x - dx > 0){
                    x -= dx;
                }
                break;
                case 68:
                if(x + dx < WIDTH){
                    x += dx;
                }
                break;
            }
        }

        function draw(){
            clear();
            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            rect(0,0,WIDTH,HEIGHT);
            ctx.fillStyle = "red";
            circle(x, y, 20);
        }

        init();
        window.addEventListener('keydown', doKeyDown, true);

