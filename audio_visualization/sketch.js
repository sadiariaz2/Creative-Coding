let song;
let fft;

function preload() {
  // Load audio file
  song = loadSound('Dedublüman-Belki (Slowed).mp3');
}

function setup() {
  createCanvas(800, 400);
  
  // Create FFT object
  fft = new p5.FFT();
  
  // Play audio file
  song.play();
  
  // Set up color gradient
  colors = [];
  for (let i = 0; i < 256; i++) {
    let gradientColor = lerpColor(color('#FF8000'), color('#FF0000'), i / 255);
    colors.push(gradientColor);
  }
}

function draw() {
  background(0);
  
  // Analyze audio data
  let spectrum = fft.analyze();
  noStroke();
  
  // Draw spectrum graph
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    let colorIndex = map(i, 0, spectrum.length, 0, 255);
    fill(colors[floor(colorIndex)]);
    rect(x, height, width / spectrum.length, h);
  }
}

