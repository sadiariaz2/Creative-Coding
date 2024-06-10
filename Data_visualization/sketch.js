let data = [40, 70, 65, 35, 25, 60, 55];
let labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let colors = [];

function setup() {
  createCanvas(500, 400);
  background(250);
  generateColors();
  drawPieChart(data, labels);
}

function generateColors() {
  for (let i = 0; i < data.length; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
}

function drawPieChart(data, labels) {
  let total = data.reduce((sum, value) => sum + value, 100);
  let angles = data.map(value => (value / total) * TWO_PI);
  
  let lastAngle = 0;
  let cx = width / 2;
  let cy = height / 2;
  let diameter = min(width, height) * 0.6;
  
  textSize(16);
  textAlign(CENTER, CENTER);
  noStroke();
  
  for (let i = 0; i < data.length; i++) {
    fill(colors[i]);
    arc(cx, cy, diameter, diameter, lastAngle, lastAngle + angles[i], PIE);
    
    // Calculate the position for the label
    let midAngle = lastAngle + angles[i] / 2;
    let labelX = cx + cos(midAngle) * diameter / 2.5;
    let labelY = cy + sin(midAngle) * diameter / 2.5;
    
    fill(0);
    text(labels[i], labelX, labelY);
    
    lastAngle += angles[i];
  }
  
  drawLegend(labels, colors);
}

function drawLegend(labels, colors) {
  let legendX = width - 120;
  let legendY = 50;
  let boxSize = 20;
  
  textAlign(LEFT, CENTER);
  for (let i = 0; i < labels.length; i++) {
    fill(colors[i]);
    rect(legendX, legendY + i * (boxSize + 10), boxSize, boxSize);
    fill(0);
    text(labels[i], legendX + boxSize + 10, legendY + i * (boxSize + 10) + boxSize / 2);
  }
}
