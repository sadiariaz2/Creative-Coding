var img, x,y;
function preload () {
img =loadImage('flower.jpg');
 }
function setup () {
createCanvas (500,400);
background(0);
noStroke();
}

function draw() {
x= random(width);

 y= random(height);

 var c = img.get(x,y);

 fill(c[0], c[1], [2],50);
 ellipse (x, y, 30,30);

}