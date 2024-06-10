let flower;

function preload(){
  flower = loadImage("flower.jpg");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  
  image(flower, 0, 0, width, height);
  
  // Map mouseX and mouseY values to control posterization levels
  let posterizeLevelsX = map(mouseX, 0, width, 2, 20);
  let posterizeLevelsY = map(mouseY, 0, height, 2, 20);
  
  // Apply posterize filter with dynamic levels based on mouse position
  filter(POSTERIZE, posterizeLevelsX, posterizeLevelsY);
}
