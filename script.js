var id;

function resizeCanvas(canvas) {
  canvas.height = window.innerHeight;
  canvas.width  = window.innerWidth;
  
  var ctx = canvas.getContext("2d");
  
  if(id != 0) {
    clearInterval(id);
  }
  
  id = setInterval(function(){
    drawRandomLine(ctx);
  }, 350);
}

function drawRandomLine(canvas) {
  var a = rangedRandom(1, window.innerWidth);
  var b = rangedRandom(1, window.innerHeight);
  var c = rangedRandom(1, window.innerWidth);
  var d = rangedRandom(1, window.innerHeight);
  
  color = "17"; //rangedRandom(11, 14);
  
  canvas.beginPath();
  canvas.lineWidth = 1;//rangedRandom(1, 10);
  canvas.strokeStyle = "rgba(" + color + "," + color + "," + color + ", 1)";
  canvas.moveTo(a, b);
  canvas.lineTo(c, d);
  canvas.stroke();
}

function rangedRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function(){
  var c = $("#c")[0];
  
  resizeCanvas(c);
});

$(window).resize(function(){
  resizeCanvas(c);
});