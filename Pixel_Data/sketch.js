let img; // Variable to store the image
let x, y; // Variables to store mouse position

// Preload function to load the image before setup
function preload() {
  img = loadImage('flower.jpg'); // Load the image
}

function setup() {
  createCanvas(500, 400); // Create a canvas
}

function draw() {
  background(220); // Set background color

  // Update x and y with mouse position
  x = mouseX;
  y = mouseY;

  // Display the image and resize it to fit the canvas
  image(img, 0, 0, width, height);

  // Get the color of the pixel at mouse position
  let c = get(x, y);

  // Set fill color to the color of the pixel
  fill(c);

  // Draw a triangle at mouse position
  triangle(x, y - 30, x + 30, y + 30, x - 30, y + 30);
}

// Function to handle mouse press
function mousePressed() {
  // Update the image with a new one
  img = loadImage('new_image.jpg');
}
