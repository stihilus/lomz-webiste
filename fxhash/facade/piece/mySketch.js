// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

var counter = 1;
var squareColor;
var colorP = [];
var randP;

var randP1;
var randP2;
var randP3;

var num1;
var mainC = "#23212B";

function setup() {
	wh = min(windowWidth, windowHeight);
	createCanvas(wh, wh);
	background('#F0E8D7');

	rS = wh / int(get_random(20, 30)); // square size
	console.log(rS);
	round = 0;
	sBW = 0; // the space between the squares

	colors = ['#484064', '#786B88', '#DFAF66', '#24212C', '#B79767','#EDE1D6', '#C16359', '#38806B', '#719CA9', '#979189'];

	colorP = [0, 4, 8, 12];
	randP = int(get_random(0, colorP.length));
	console.log(colors[randP]);
	console.log(colors.length);

	randP1 = int(get_random(0, colorP.length));
	randP2 = int(get_random(0, colorP.length));
	randP3 = int(get_random(0, colorP.length));

	squareColor = int(get_random(0, colors.length));
	fill(colors[squareColor]);

	gridNumX = int(get_random(5, 16));
	gridNumY = int(get_random(5, 16));

	// lines
	push();
	for (var i = 0; i < wh; i += 5) {
		stroke("#CDC6B4");
		line(0, i, wh, i);
	}
	pop();

	// Background Shapes
	// ellipses
	push();
	for (i = 0; i < int(get_random(3, 18)); i++) {
		noFill();
		stroke(mainC);
		ellipseMode(CENTER);
		ellipse(int(get_random(0, wh)), int(get_random(0, wh)), int(get_random(0, wh / 2)));
	}
	pop();

	// Lines
	push();
	for (i = 0; i < int(get_random(3, 15)); i++) {
		noFill();
		stroke(mainC);
		ellipseMode(CENTER);
		//ellipse(int(get_random(0, wh)), int(get_random(0, wh)), int(get_random(0, wh/2)));
		var line1X = int(get_random(wh / 200, wh - (wh / 200)));
		var line1Y = int(get_random(wh / 200, wh - (wh / 200)));
		line(line1X,
			line1Y,
			line1X,
			line1Y + get_random(wh / 100, wh / 5));
		if (fxrand() < 0.5) {
			line(line1X + get_random(wh / 100, wh / 5),
				line1Y,
				line1X + get_random(wh / 100, wh / 5),
				line1Y);
		}
	}
	pop();

	// numbers random position
	push();
	for (i = 0; i < int(get_random(3, 8)); i++) {
		fill(mainC);
		textSize(wh / 60);
		textFont('Georgia');
		textAlign(RIGHT);
		var textStartX = int(get_random(wh / 100, wh));
		var textStartY = int(get_random(wh / 100, wh));
		var textNumS = int(get_random(0, 99));
		text(textNumS, textStartX, textStartY);
	}
	pop();

	// numbers random position
	push();
	for (i = 0; i < int(get_random(3, 8)); i++) {
		fill(mainC);
		textSize(wh / 60);
		textFont('Georgia');
		textAlign(RIGHT);
		var textStartX = int(get_random(wh / 100, wh));
		var textStartY = int(get_random(wh / 100, wh));
		var textNumS = int(get_random(0, 99));
		text(textNumS, textStartX, textStartY);
	}
	pop();

	// numbers random position
	push();
	for (var g = 0; g < int(get_random(1, 5)); g++) {
	var textStartX = int(get_random(wh / 100, wh));
	var textStartY = int(get_random(wh / 100, wh));
	var textNumS = int(get_random(0, 99));
	var nextPositionT = rS / 2;
		for (i = 0; i < int(get_random(3, 18)); i++) {
			fill(mainC);
			textSize(wh / 60);
			textFont('Georgia');
			textAlign(RIGHT);
			text(i + int(get_random(3, 18)), textStartX + (i * 20), textStartY);
		}
	}
	pop();
	
	// rects
	push();
	for (i = 0; i < int(get_random(3, 8)); i++) {
		noFill();
		stroke(mainC);
		var rectRX = int(get_random(0, wh));
		var rectRY = int(get_random(0, wh));
		rect(rectRX,rectRY,int(get_random(rS/5, rS)),int(get_random(rS/5, rS)));
	}
	pop();
	
	// rects
	push();
	for (i = 0; i < int(get_random(1, 8)); i++) {
		stroke(mainC);
		fill(mainC);
		var rectRX = int(get_random(0, wh));
		var rectRY = int(get_random(0, wh));
		rect(rectRX,rectRY,int(get_random(rS/5, rS)),int(get_random(rS/5, rS)));
	}
	pop();
	
	// marks
	push();
	for (i = 0; i < int(get_random(1, 5)); i++) {
		stroke(mainC);
		noFill();
		var ellX = int(get_random(0, wh));
		var ellY = int(get_random(0, wh));	
		ellipse(ellX, ellY, rS);
		//				x				y				x						y
		line(ellX-(rS),ellY,ellX+rS,ellY);
		line(ellX,ellY-rS,ellX,ellY+rS);
	}
	pop();
	
	
	translate(
		(wh / 2) - (rS * gridNumX) / 2,
		(wh / 2) - (rS * gridNumY) / 2 // 4 ili 6
	);

	// layer 1
	for (let x = 0; x < gridNumX; x += 1) {
		for (let y = 0; y < gridNumY; y += 1) {
			xPos = x * rS;
			yPos = y * rS;

			push();
			stroke("#5D5664");

			if (counter === 1) {
				fill(colors[randP1]);
				rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
				counter = 2;
			} else if (counter === 2) {
				fill(colors[randP2]);
				rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
				counter = 3;
			} else if (counter === 3) {
				fill(colors[randP3]);
				rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
				counter = 1;
			}

			pop();
		}
	}
	
	//horisontal line
	push();
	for (let x = 0; x < gridNumX; x += 1) {
		fill(mainC);
		noStroke();
		xPos = x * rS;
		rect(xPos + sBW, (gridNumY + 3) * rS, rS - sBW, (rS - get_random(rS/10, rS/1.5)));
	}
	pop();


	// layer 2
	for (let x = 0; x < gridNumX; x += 1) {
		for (let y = 0; y < gridNumY; y += 1) {
			xPos = x * rS;
			yPos = y * rS;

			push();
			stroke("#5D5664");

			if (fxrand() < 0.1) {
				randP = int(get_random(0, colors.length));
				fill(colors[randP]);
				rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
				counter = 2;
			}

			if (fxrand() > 0.9) {
				randP = int(get_random(0, colors.length));
				fill(colors[randP]);
				triangle(xPos + sBW, yPos + sBW, xPos + sBW, yPos + rS + sBW, xPos + rS + sBW, yPos + rS + sBW);
				//rect(xPos+sBW, yPos+sBW, rS-sBW, rS-sBW, round);
				counter = 2;
			}

			if (fxrand() > 0.2 && fxrand() < 0.21) {
				randP = int(get_random(0, colors.length));
				fill(colors[randP]);
				ellipseMode(CENTER);
				ellipse((xPos + sBW) + (rS / 2), (yPos + sBW) + (rS / 2), (rS - sBW) / (get_random(2, 4)));
				counter = 2;
			}
			pop();
		}
	}

	// text 1
	push();
	fill("#23212B");
	textSize(wh / 60);
	textFont('Georgia');
	text('gen:' + int(fxrand() * 10000), 0, (rS * gridNumY) + (rS / 2.5));
	pop();

	// text 2 sig
	push();
	fill("#23212B");
	textSize(wh / 60);
	textFont('Georgia');
	textAlign(RIGHT);
	text('lomz 2022', (rS * gridNumX), (rS * gridNumY) + (rS / 2.5));
	pop();

	// numbers left
	push();
	for (var i = 0; i < 4; i++) {
		stroke("#23212B");
		num1 = int(get_random(1, gridNumY));
		line((rS / 2), (rS / 2) + (rS * num1), (-rS / 2), (rS / 2) + (rS * num1));
		fill('#23212B');
		ellipse(-rS / 1.5, (rS * num1) + (rS / 2), rS / 1.5);
		noStroke();
		fill("#F0E8D7");
		textSize(wh / 60);
		textFont('Georgia');
		text(int(get_random(0, 9)), -rS / 1.3, (rS * num1) + (rS / 1.7));
	}
	pop();

	// numbers right
	push();
	for (var i = 0; i < 4; i++) {
		stroke("#23212B");
		num1 = int(get_random(1, gridNumY));
		line((rS / 2) + (rS * gridNumX), (rS / 2) + (rS * num1), (-rS / 2) + (rS * gridNumX), (rS / 2) + (rS * num1));
		fill('#23212B');
		ellipse((rS / 1.5) + (rS * gridNumX), (rS / 2) + (rS * num1), rS / 1.5);
		noStroke();
		fill("#F0E8D7");
		textSize(wh / 60);
		textFont('Georgia');
		text(int(get_random(0, 9)), (rS / 1.75) + (rS * gridNumX), (rS * num1) + (rS / 1.7));
	}
	pop();

}

function draw() {

}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
	if (key == 's' || key == 'S') save("Facade by Lomz: " + int(random(0, 1000)) + ".png");
}

// **************************
// *       Get Random       *
// **************************

function get_random(min, max) {
	return min + fxrand() * (max - min);
}