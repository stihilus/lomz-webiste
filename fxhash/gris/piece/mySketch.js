// Lomz 2022
// https://www.lomz.net

console.log("Lomz:2022.");
console.log("https://www.lomz.net");
//console.log('fxrand test: ' + fxrand());

let gridNumX;
let gridNumY;

let xPos;
let yPos;

let rS; // velicina polja
let round;
let sBW; // razmak izmedju polja

let colors = [];
let synthColor;

let wh;

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);
  rS = wh / 6;
  round = 0;
  sBW = 0;

  textFont("Helvetica");

  // 0 font     1 lines    2 rects    3          4          5 accent
  pallete = [
    ["#323232", "#323232", "#969696", "#B4B4B4", "#C8C8C8", "#C14D32"],
    ["#000000", "#000000", "#DFF5FF", "#DFE2FF", "#0029D3", "#0029D3"],
    ["#323232", "#323232", "#8C7DB6", "#12B77B", "#4674B7", "#8C7DB6"],
    ["#323232", "#323232", "#F8F8F8", "#B69D73", "#F8F8F8", "#B69D73"],
    ["#171717", "#171717", "#FFFFFF", "#EDEDED", "#444444", "#C82A3D"],
    ["#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#000000"],
    ["#19150C", "#19150C", "#5E94C3", "#EEEBE4", "#EEEBE4", "#F46559"],
    ["#0C0821", "#0C0821", "#095B4F", "#F4A0B0", "#E7E8E0", "#F63B32"],
    ["#FFF1DD", "#336D61", "#013B2F", "#013B2F", "#00271B", "#F89792"],
    ["#19150C", "#0035C2", "#ffffff", "#0071FE", "#0071FE", "#FF4A13"],
    ["#000000", "#77552F", "#182280", "#E0D6CC", "#E0D6CC", "#77552F"],
    ["#2E2E2E", "#2E2E2E", "#767DBE", "#C6A841", "#9EBBAD", "#EB7A52"],
    ["#1D1C1C", "#1D1C1C", "#B98CF1", "#828163", "#E2E0E1", "#B98CF1"],
    ["#0F1E19", "#0F1E19", "#E0D6AA", "#E4AC44", "#356F53", "#D26241"],
    ["#070002", "#070002", "#E8E3CC", "#B0BEB9", "#5F6D5D", "#CA4E33"],
    ["#141F22", "#141F22", "#D6D2C1", "#E6E6E6", "#A2B8BB", "#DEF44F"],
    ["#090909", "#313C3C", "#F2ECE6", "#C1B197", "#8EA182", "#A5B1C5"],
  ];

  // random pallet selection
  chosenPall = int(get_random(0, 17));
  //chosenPall = 16;

  console.log("Selected pallete: " + chosenPall);

  background(70);
	//background(pallete[chosenPall][int(get_random(0, 6))]);

  gridNumX = int(get_random(1, 6));
  gridNumY = int(get_random(2, 4));
	
	// lines grid bgd
	push();
	for (var i = 0; i < wh; i += rS/10) {
		stroke(65);
		line(0, i, wh, i);
		line(i, 0, i, wh);
	}
	pop();

  translate(
    wh / 2 - (rS * gridNumX) / 2,
    wh / 2 - (rS * gridNumY) / 2 // 4 ili 6
  );

  //BORDER
  push();
  noFill();
  rect(
    -rS / 10,
    -rS / 10,
    rS * gridNumX + (rS / 10) * 2,
    rS * gridNumY + (rS / 10) * 2
  );
  pop();

  //LINES with numbers
  push();
  stroke(0);
  strokeWeight(1);
  for (i = 0; i < gridNumX + 1; i++) {
    var hLine = int(get_random(3, 10));
    line(rS * i, -(rS / 10), rS * i, -(rS / 10) * hLine);
    push();
    fill(0);
    noStroke();
    textStyle(NORMAL);
    textSize(int(rS * 0.1));
    text(hLine-1, rS * i + rS / 20, -(rS / 10) * hLine + rS / 15);
    pop();
  }
  pop();

  // GRID Layer 1
  
  push();
  for (let x = 0; x < gridNumX; x += 1) {
    for (let y = 0; y < gridNumY; y += 1) {
			let ch = 0.6; // chance to display
      xPos = x * rS;
      yPos = y * rS;

      noStroke();
      fill(pallete[chosenPall][int(get_random(1, 6))]);

      if (fxrand() < 0.3) {
        if (fxrand() < ch) {
          rect(xPos + sBW, yPos + sBW, rS / 2 - sBW, rS / 2 - sBW, round);
        }
        if (fxrand() < ch) {
          rect(
            xPos + rS / 2 + sBW,
            yPos + sBW,
            rS / 2 - sBW,
            rS / 2 - sBW,
            round
          );
        }
        if (fxrand() < ch) {
          rect(
            xPos + rS / 2 + sBW,
            yPos + rS / 2 + sBW,
            rS / 2 - sBW,
            rS / 2 - sBW,
            round
          );
        }
        if (fxrand() < ch) {
          rect(
            xPos + sBW,
            yPos + rS / 2 + sBW,
            rS / 2 - sBW,
            rS / 2 - sBW,
            round
          );
        }
      } else if (fxrand() > 0.3 && fxrand() < 0.5) {
        push();
        if (fxrand() < ch) {
          rect(xPos + sBW, yPos + sBW, rS / 2 - sBW, rS - sBW, round);
        }
        if (fxrand() < ch) {
          rect(xPos + rS / 2 + sBW, yPos + sBW, rS / 2 - sBW, rS - sBW, round);
        }
        pop();
      } else if (fxrand() > 0.5 && fxrand() < 0.7) {
        push();
        if (fxrand() < ch) {
          rect(xPos + sBW, yPos + sBW, rS - sBW, rS / 2 - sBW, round);
        }
        if (fxrand() < ch) {
          rect(xPos + sBW, yPos + rS / 2 + sBW, rS - sBW, rS / 2 - sBW, round);
        }
        pop();

        // TEXT
        push();
        fill(0);
        textSize(int(rS * 0.2));
        text(
          int(get_random(0, 100)),
          xPos + sBW + rS / 10,
          yPos + sBW + rS - rS / 10
        );
        pop();
      } else {
        if (fxrand() < 3) {
          if (fxrand() < ch) {
            rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);

            // TEXT
            push();
            fill(0);
            textSize(int(rS * 0.1));
            text(
              int(get_random(0, 1000)),
              xPos + sBW + rS / 10,
              yPos + sBW + rS - rS / 10
            );
            pop();
          }
        }
      }
    }

    // GRID 2

    push();
    for (let x = 0; x < gridNumX; x += 1) {
      for (let y = 0; y < gridNumY; y += 1) {
				ch = 0.3; // chance to display
        xPos = x * rS;
        yPos = y * rS;

        noStroke();
        noFill();
        stroke(0);

        if (fxrand() < 0.3) {
          if (fxrand() < ch) {
            rect(xPos + sBW, yPos + sBW, rS / 2 - sBW, rS / 2 - sBW, round);
          }
          if (fxrand() < ch) {
            rect(
              xPos + rS / 2 + sBW,
              yPos + sBW,
              rS / 2 - sBW,
              rS / 2 - sBW,
              round
            );
          }
          if (fxrand() < ch) {
            rect(
              xPos + rS / 2 + sBW,
              yPos + rS / 2 + sBW,
              rS / 2 - sBW,
              rS / 2 - sBW,
              round
            );
          }
          if (fxrand() < ch) {
            rect(
              xPos + sBW,
              yPos + rS / 2 + sBW,
              rS / 2 - sBW,
              rS / 2 - sBW,
              round
            );
          }
        } else if (fxrand() > 0.3 && fxrand() < 0.5) {
          push();
          if (fxrand() < ch) {
            rect(xPos + sBW, yPos + sBW, rS / 2 - sBW, rS - sBW, round);
          }
          if (fxrand() < ch) {
            rect(
              xPos + rS / 2 + sBW,
              yPos + sBW,
              rS / 2 - sBW,
              rS - sBW,
              round
            );
          }
          pop();
        } else if (fxrand() > 0.5 && fxrand() < 0.7) {
          push();
          if (fxrand() < ch) {
            rect(xPos + sBW, yPos + sBW, rS - sBW, rS / 2 - sBW, round);
          }
          if (fxrand() < ch) {
            rect(
              xPos + sBW,
              yPos + rS / 2 + sBW,
              rS - sBW,
              rS / 2 - sBW,
              round
            );
          }
          pop();
        } else {
          if (fxrand() < 3) {
            if (fxrand() < ch) {
              rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
            }
          }
        }
      }
			
			// dots
    for (let x = 0; x < gridNumX + 1; x += 1) {
      for (let y = 0; y < gridNumY + 1; y += 1) {
        xPos = x * rS;
        yPos = y * rS;
				push();
        //noStroke();
        noFill();
        stroke(pallete[chosenPall][int(get_random(1, 6))]);
				
				strokeWeight(rS/32);
				point(xPos,yPos);
						// if (fxrand() < 1) {
						// //rect(xPos + sBW, yPos + sBW, rS - sBW, rS - sBW, round);
						// 
						// for (let x = xPos; x < (x+rS); x += 10) {
						// for (let y = yPos; y < (y+rS); y += 10) {
						// point(x,y);
						// }
						// }
						// }
				pop();
			} 
      }			
			// noise gradient END
    }
  }
  pop();

  // TEXT
  push();
  fill(0);
  textSize(int(rS * 0.1));
  text(
    "GRID: " + gridNumX*2 + ":" + gridNumY*2,
    -(rS / 10),
    gridNumY * rS + (rS / 10) * 2
  );
  pop();
}

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == "s" || key == "S") save("Grid" + int(random(0, 10000)) + ".png");
}

// **************************
// *        Random          *
// **************************

function get_random(min, max) {
  return min + fxrand() * (max - min);
}
