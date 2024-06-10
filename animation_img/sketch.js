var numFrames = 5; // Number of available images
var frame = 0; // Current frame index
var images = new Array(numFrames); // Array to store images

// Preload function to load images before setup
function preload() {
  
  // Load each image into the images array
  
  for (let i = 0; i < numFrames; i++) {
    images[i] = loadImage((i + 1) + ".jpg.png");
    
    // Assuming image filenames are "1.jpg.png", "2.jpg.png", etc.
  }
}

function setup() {
  createCanvas(500, 400); // Create a canvas
  frameRate(15); // Set frame rate
  background(255); // Set background color
}

function draw() {
  background(255); // Clear the canvas each frame
  frame++; // Move to the next frame
  if (frame == numFrames) frame = 0; // Reset frame index if it reaches the end of the array
  image(images[frame], mouseX - 75, mouseY - 100); // Display the current frame's image at mouse position
}
