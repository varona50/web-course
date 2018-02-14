function createImage() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(10, 10, 90, 90);
    ctx.fill()
    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(20, 20, 70, 70);
}

function createImages() {
    var canvas = document.getElementById("my_canvas01");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(200,0,0)"
    ctx.fillRect(20, 10, 200, 40);
    ctx.fill()
    ctx.fillStyle = "rgb(0,200,0)"
    ctx.fillRect(30, 20, 200, 40);
    ctx.fill()
    ctx.fillStyle = "rgb(0,0,200)"
    ctx.fillRect(40, 30, 200, 40);
    ctx.fill()
}

function createImag() {
    var canvas = document.getElementById("my_canvas02");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(0,200,0)"
    ctx.fillRect(20, 10, 10, 20);
    ctx.fillRect(40, 25, 10, 13);
    ctx.fillRect(60, 13, 10, 8);
    ctx.fill()
    ctx.fillStyle = "rgb(0,0,200)"
    ctx.fillRect(20, 30, 10, 50);
    ctx.fillRect(40, 38, 10, 42);
    ctx.fillRect(60, 21, 10, 59);
    ctx.fill()
}