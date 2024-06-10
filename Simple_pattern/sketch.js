var colors = ['steelblue', 'violet', '	bisque','	lightsalmon','coral'];
var rand;

function setup() {
	createCanvas(600, 400);
	background(220);
	frameRate(1);
	stroke(2);
}

function draw() {
	background(220); // Ensure the background is reset every frame
	for (var x = 0; x < 600; x += 100) {
		for (var y = 0; y < 400; y += 100) {
			rand = int(random(5));
			fill(colors[rand]);
			rect(x, y, 100, 100); // Draw the base rectangle
			
			let shapeType = int(random(5)); // Choose a shape to draw
			
			switch(shapeType) {
				case 0:
					// Draw a circle
					fill(colors[(rand + 1) % 5]);
					ellipse(x + 50, y + 50, 70, 70);
					break;
				case 1:
					// Draw a triangle
					fill(colors[(rand + 2) % 5]);
					triangle(x + 50, y + 20, x + 20, y + 80, x + 80, y + 80);
					break;
				case 2:
					// Draw a smaller rectangle
					fill(colors[(rand + 1) % 5]);
					rect(x + 25, y + 25, 50, 50);
					break;
                    case 3:
                //draw one more triagnle
                fill(colors[(rand+2)%5]);
                triangle(x+60, y +30, x + 20, y + 80,x + 80,y + 80);
			}
		}
	}
}
