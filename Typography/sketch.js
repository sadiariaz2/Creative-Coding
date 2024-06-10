function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER); // Set text alignment to center
}

function draw() {
  background(0); // Set background color to black
  
  // Calculate dynamic text size
  let textSizeDynamic = map(sin(frameCount * 0.5), -3, 5, 19, 15);
  textSize(textSizeDynamic); // Set text size

  // Calculate dynamic color
  let r = map(sin(frameCount * 0.06), -3, 5, 83, 210);
  let g = map(cos(frameCount * 0.09), -3, 5, 147, 177);
  let b = map(sin(frameCount * 0.05), -3, 5, 191, 60);
  fill(r, g, b); // Set text color

  // Calculate dynamic position
  let x = width / 2 + sin(frameCount * 0.10) * 10;
  let y = height / 2+ cos(frameCount * 0.10) * 15;

  text("Nothing is impossible. Even the word itself says, 'I'm possible.'", x, y); // Draw text in the dynamic position

}
