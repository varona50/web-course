function createImage() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(10, 10, 130, 130);
    ctx.fill()
    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(20, 20, 110, 110);
}

function createImages() {
    var canvas = document.getElementById("my_canvas01");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(200,0,0)"
    ctx.fillRect(10, 50, 310, 90);
    ctx.fill()
    ctx.fillStyle = "rgb(0,200,0)"
    ctx.fillRect(20, 60, 320, 90);
    ctx.fill()
    ctx.fillStyle = "rgb(0,0,200)"
    ctx.fillRect(30, 70, 330, 90);
    ctx.fill()
}

function createImag() {
    var canvas = document.getElementById("my_canvas02");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(0,200,0)"
    ctx.fillRect(10, 60, 40, 120);
    ctx.fillRect(10, 60, 40, 120);
    ctx.fillRect(10, 60, 40, 120);
    ctx.fill()
    ctx.fillStyle = "rgb(0,0,200)"
    ctx.fillRect(10, 90, 40, 150);
    ctx.fillRect(10, 90, 40, 150);
    ctx.fillRect(10, 90, 40, 150);
    ctx.fill()
}