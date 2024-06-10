let trail = []; // Array to store mouse trail points

function setup() {
  createCanvas(400, 400);
  background(225, 0,0); // Set background color
}

function draw() {
  // Draw a translucent background to create a fading effect
  fill('#FFCCCC'); // Set background color with transparency
  rect(0, 0, width, height); // Draw rectangle covering the canvas
  
  // Store current mouse position in the trail array
  trail.push(createVector(mouseX, mouseY));
  
  // Draw the mouse trail
  for (let i = 0; i < trail.length; i++) {
    // Calculate alpha value based on position in trail array
    let alpha = map(i, 0, trail.length, 60, 10); // Map alpha value to create fading effect
    
    fill(153, 0, 153, alpha); // Set color with transparency
    stroke(9); // Set stroke color
    
    // Draw rectangle at each trail point
  rect(trail[i].x, trail[i].y, 120, 90);
  }
  
  // Limit the size of the trail array to control trail length
  if (trail.length > 130) {
    trail.splice(0, 1); // Remove oldest points from the trail array
  }
}
