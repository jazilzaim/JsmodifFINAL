// By Jazil and Ahmed
// Roadrunner Game


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var img = new Image(600, 600);
img.src="game_bg2.png";
drawObject();
let theImg = new Image();
theImg.src = "car.png";
img.onload = function(){
ctx.drawImage(img,0,0);
}
theImg.onload = function() {
  ctx.drawImage(theImg, 300, 300);
}


// Enemy image and movements
let enemyCar = new Image();
enemyCar.src = "enemy2.png";
img.onload = function(){
ctx.drawImage(enemyCar,0,0);
}

theImg.onload = function() {
  ctx.drawImage(theImg, 300, 300);
}

// img.onload = function() {
//   ctx.drawImage(enemyCar, 0, 0)
// }

function drawObject(){}

var x= 200;
var y= 200;

var enemyX = 0;
var enemyY = 0;

//This function will move the enemy
var moveEnemy = function() {

  ctx.drawImage(img,0,0);

  enemyX += 10;

  ctx.drawImage(enemyCar, enemyX, enemyY);


}


// Moving the vector for the enemy car
function Vector(magnitude, angle){
   var angleRadians = (angle * Math.PI) / 180;

   this.magnitudeX = magnitude * Math.cos(angleRadians);
   this.magnitudeY = magnitude * Math.sin(angleRadians);
}

var moveVector = new Vector(50, 47);

// boundary
var minx = 0;
var miny = 0;
var maxx = 600; // 10 pixels for character's width
var maxy = 600; // 10 pixels for character's width


function slowDownX() {
  if (enemyX > 0)
    enemyX = enemyX - 1;
  if (enemyX < 0)
    enemyX = enemyX + 1;
}

// Slows y speed
function slowDownY() {
  if (enemyY > 0)
    enemyY = enemyY - 1;
  if (enemyY < 0)
    enemyY = enemyY + 1;
}


// function drawObject(){
// ctx.drawImage(img,0,0);
// ctx.drawImage(theImg, x, y);
// }

function moveUp(){
ctx.drawImage(img,0,0);
y-=10;
    ctx.drawImage(theImg, x, y);





}

 function moveRight(){
  ctx.drawImage(img,0,0);
  x+=10;
 ctx.drawImage(theImg, x, y);
 }
 function moveLeft(){
  ctx.drawImage(img,0,0);
   x-=10;
  ctx.drawImage(theImg, x, y);


 }

 function moveDown(){
ctx.drawImage(img,0,0);

   y+=10;
   ctx.drawImage(theImg, x, y);
   }






var pointX = 0;
var pointY = 0;
