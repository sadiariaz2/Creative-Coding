function setup() {
  createCanvas(500, 420);
  background("skyblue");
}

function draw() {
  // Antenna
  fill(255, 98, 242);
  line(255, 95, 255, 25);
  circle(255, 35, 25);

  // Body
  fill("#b266ff");
  rect(205, 200, 100, 110);

  // Head
  fill("#00ff80");
  ellipse(255, 140, 130, 150); // Made the head slightly taller and wider

  // Eyes
  stroke(23);
  fill(255); // Changed eye color to white
  ellipse(225, 130, 50, 60);
  ellipse(285, 130, 50, 60);
  ellipse()
  // Pupils
  fill(2, 2, 2);
  ellipse(225, 130, 20, 25); // Added pupils to eyes
  ellipse(285, 130, 20,25);

  // Smile
  noFill();
  stroke(2, 2, 2);
  strokeWeight(4)
  // Changed smile color to black
  arc(255, 160, 90, 60, 0.2, PI -0.2); // Added a smile to the face
  
   //legs
  fill("#b266ff")
 rect(205,310, 50, 80);
  rect(255,310, 50, 80);
  
  //belt
  fill("#004C99")
  rect(205, 235, 100, 40);
 
  
  // Feet
  fill(93, 255, 131);
  ellipse(230,390, 50, 20);
  ellipse(280,390, 50, 20);

  // Arms
  fill(93, 255, 131);
  ellipse(200, 250, 30, 100);
  ellipse(310, 250, 30, 100);

   //triangle
  fill(255,98,242);
  triangle(235,236,275,235,255,270);
}
