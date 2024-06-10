let carX = 150; // Initial x-position of the car
let carSpeed = 3; // Speed of the car

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
 
  // Road
  fill(96, 96, 96);
  rect(0, 200, 400, 150);
  
  // Car top
  fill(0, 51, 102);
  beginShape();
  vertex(carX - 100, 200);
  vertex(carX - 50, 150);
  vertex(carX + 50, 150);
  vertex(carX + 100, 200);
  vertex(carX - 100, 200);
  endShape(CLOSE);
  
  // Car body
  fill(0, 76, 153);
  rect(carX - 120, 200, 245, 40);
  
  // Windows
  fill(173, 216, 230, 180);
  rect(carX - 40, 160, 80, 30);
  rect(carX + 10, 160, 40, 30);
  
  // Wheels
  fill(0);
  ellipse(carX - 60, 240, 40, 40);
  ellipse(carX + 60, 240, 40, 40);

  // Tail light
  fill(255, 0, 0);
  ellipse(carX - 120, 210, 10, 15);

  // Headlight
  fill(255, 255, 0);
  ellipse(carX + 125, 210, 10, 15);
  
  carX+=carSpeed;
    // Reset car position if it goes off screen
  if (carX > width + 150) {
    carX = -150;
  }

}
