console.log("Lomz 2022");
console.log("Website: " + "https://www.lomz.net");

var wh;
var counter = 1;
var pallete = [];
var chosenPall;

function setup() {
  wh = min(windowWidth, windowHeight);
  createCanvas(wh, wh);

  //textFont('Trebuchet MS');
  //textFont('Georgia');
  //textFont('Courier New');
  textFont("Helvetica");

  boardCol = ["#2A6052", "#323232", "#1D1C1C", "#3574B6"];
  background(boardCol[int(get_random(0, boardCol.length))]);

  console.log("Fxhash: " + fxhash);

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

  rS = wh / 14; // square size

  gridNumX = int(get_random(7, 12));
  gridNumY = int(get_random(8, 12));

  layer2bgdend1 = get_random(30, 70);
  layer2bgdend2 = get_random(0, 70);
  layer2bgdend3 = get_random(10, 35);
  layer2bgdend4 = get_random(35, 60);
  layer2bgdend5 = get_random(10, 25);
  layer2bgdend6 = get_random(25, 30);
  layer2bgdend7 = get_random(35, 40);
  layer2bgdend8 = get_random(40, 50);

  // ---------------------------------------------- board grid

  push();
  tileSize = wh / get_random(18, 21);
  for (var y = -10; y < height - wh / 100 - 0.01; y = y + tileSize) {
    for (var x = -10; x < width - wh / 100 - 0.01; x = x + tileSize) {
      noFill();
      stroke("#ADAAAA");
      strokeWeight(1);
      rect(x, y, tileSize, tileSize);
    }
  }
  pop();

  // ---------------------------------------------- board lines

  push();
  noFill();
  stroke("#ADAAAA");
  strokeWeight(1);
  var lineX = get_random(-wh / 5, 0);
  var lineY = get_random(-wh / 5, 0);
  line(lineX, lineY, wh, wh);
  line(lineX, lineY, wh - wh / 5, wh);
  line(lineX, lineY, wh + wh / 5, wh);
  line(lineX, lineY, wh - wh / 2, wh);
  line(lineX, lineY, wh + wh / 2, wh);
  line(lineX, lineY, wh - wh / 1.2, wh);
  line(lineX, lineY, wh + wh / 1.2, wh);

  ellipse(lineX, lineY, wh + wh / 1.2, wh);
  ellipse(lineX, lineY, wh + wh / 10, wh);
  pop();

  // ---------------------------------------------- translate

  translate(
    wh / 2 - (rS * gridNumX) / 2,
    wh / 2 - (rS * gridNumY) / 2 // 4 ili 6
  );

  //rotate(get_random(-0.2,0.2));  // Rotate poster

  // ---------------------------------------------- layer 1 - shapes
  for (let y = 0; y < gridNumY; y += 1) {
    for (let x = 0; x < gridNumX; x += 1) {
      xPos = x * rS;
      yPos = y * rS;

      // ---------------------------------------------- rect background
      push();
      noStroke();
      fill(pallete[chosenPall][2]);
      rect(xPos, yPos, rS, rS);
      pop();

      // ---------------------------------------------- rect bgd L2
      if (counter < layer2bgdend1) {
        // rect background
        push();
        noStroke();
        fill(pallete[chosenPall][3]);
        rect(xPos, yPos, rS, rS);
        pop();
      }

      // ---------------------------------------------- rect bgd L3
      if (counter < layer2bgdend2) {
        // rect background
        push();
        noStroke();
        fill(pallete[chosenPall][4]);
        rect(xPos, yPos, rS, rS);
        pop();
      }

      // ---------------------------------------------- lines
      if (fxrand() < 0.3) {
        push();
        stroke(pallete[chosenPall][1]);
        strokeWeight(3);
        line(xPos, yPos, xPos + rS / 10, yPos);
        pop();
      }

      // ---------------------------------------------- 2x2
      if (counter > layer2bgdend3 && counter < layer2bgdend4) {
        push();
        stroke(pallete[chosenPall][1]);
        strokeWeight(1);
        noFill();
        rect(xPos, yPos, rS, rS);
        line(xPos, yPos + rS / 2, xPos + rS, yPos + rS / 2);
        line(xPos + rS / 2, yPos, xPos + rS / 2, yPos + rS);
        pop();
      }

      // ---------------------------------------------- 3x3
      if (counter > layer2bgdend5 && counter < layer2bgdend6) {
        push();
        stroke(pallete[chosenPall][1]);
        strokeWeight(1);
        noFill();
        rect(xPos, yPos, rS, rS);
        line(xPos, yPos + rS / 2 / 2, xPos + rS, yPos + rS / 2 / 2); // 1/3
        line(
          xPos,
          yPos + rS / 2 / 2 + rS / 2,
          xPos + rS,
          yPos + rS / 2 / 2 + rS / 2
        ); // 1/3
        line(xPos, yPos + rS / 2, xPos + rS, yPos + rS / 2); // 1/2
        line(xPos + rS / 2, yPos, xPos + rS / 2, yPos + rS);
        line(xPos + rS / 2 / 2, yPos, xPos + rS / 2 / 2, yPos + rS);
        line(
          xPos + rS / 2 / 2 + rS / 2,
          yPos,
          xPos + rS / 2 / 2 + rS / 2,
          yPos + rS
        );
        pop();
      }

      // ---------------------------------------------- DOT
      if (counter > layer2bgdend7 && counter < layer2bgdend8) {
        push();
        fill(pallete[chosenPall][1]);
        noStroke();
        ellipse(xPos, yPos, rS / (wh / 200), rS / (wh / 200));
        pop();
      }

      // ---------------------------------------------- ellipse
      if (fxrand() < 0.025) {
        push();
        noStroke();
        ellipseMode(CORNER);
        fill(pallete[chosenPall][5]);
        ellipse(xPos, yPos, rS, rS);
        pop();
      }

      // ---------------------------------------------- ellipse stroke
      if (y < gridNumY && x < gridNumY && fxrand() < 0.05) {
        push();
        stroke(pallete[chosenPall][1]);
        ellipseMode(CORNER);
        noFill();
        ellipse(xPos, yPos, rS, rS);
        pop();
      }

      counter++;
    }
  }

  // ---------------------------------------------- ellipse stroke 2x2

//   push();
//   noStroke();
//   fill(pallete[chosenPall][5]);
//   ellipseMode(CORNER);

//   for (i = 0; i < 1; i++) {
//     var rX = int(get_random(0, gridNumX - 1));
//     var rY = int(get_random(0, gridNumY - 1));
//     ellipse(rX * rS, rY * rS, rS * 2, rS * 2);
//   }
//   pop();

  // ---------------------------------------------- ellipse fill 2x2

  push();
  stroke(pallete[chosenPall][1]);
  ellipseMode(CORNER);
  noFill();

  for (i = 0; i < 3; i++) {
    if (fxrand() < 0.5) {
      var rX2 = int(get_random(0, gridNumX - 1));
      var rY2 = int(get_random(0, gridNumY - 1));
      ellipse(rX2 * rS, rY2 * rS, rS * 2, rS * 2);
    }
  }
  pop();

  // ---------------------------------------------- layer 1 - typo

  var title = int(get_random(0, words.length));
  console.log("Title: " + words[title]);
  var typoRaw = 1;
  var blues = int(get_random(2, 5));
  var typoX = int(get_random(0, 2));

  for (let y = 0; y < gridNumY; y += 1) {
    for (let x = 0; x < gridNumX; x += 1) {
      xPos = x * rS;
      yPos = y * rS;

      // ---------------------------------------------- title
      if (y < 5 && x < int(get_random(3, 5)) && typoRaw < blues) {
        push();
        fill(pallete[chosenPall][0]);
        textSize(int(rS * 0.9));

        if (fxrand() < 0.5) {
          textStyle(BOLD);
        }

        text(words[title].toUpperCase(), typoX * rS, typoRaw * rS);
        title = int(get_random(0, words.length)); // choose new title
        typoX = int(get_random(0, 2));
        typoRaw++;

        pop();
      }
    }
  }

  // ---------------------------------------------- date
  var d = int(get_random(1, 31));
  var m = int(get_random(1, 12));
  var y = int(get_random(2022, 2024));
  push();
  fill(pallete[chosenPall][0]);
  textSize(int(rS * 0.5));

  text(d + "/" + m + "/" + y, 0, typoRaw * rS);
  console.log("Date: " + d + "/" + m + "/" + y);
  typoRaw++;

  pop();

  // ---------------------------------------------- DJs
  push();
  fill(pallete[chosenPall][0]);
  textSize(int(rS * 0.5));

  var nDJs = int(get_random(1, 4));
  for (i = 0; i < nDJs; i++) {
    var DJs = int(get_random(0, names.length));
    console.log("DJ: " + names[DJs]);

    text(names[DJs], rS, typoRaw * rS);
    typoRaw++;
  }
  pop();

  // ---------------------------------------------- location
  push();
  fill(pallete[chosenPall][0]);
  textSize(int(rS * 0.8));

  let angle2 = radians(90);
  rotate(angle2);

  translate(-rS * -int(get_random(1, 3)), -rS * gridNumX + rS);

  var city = int(get_random(0, cities.length));
  console.log("City: " + cities[city]);
  text(cities[city], 0, 0);
  
  pop();
  
  
  // ---------------------------------------------- test text
  // push();
  // fill(pallete[chosenPall][0]);
  // textSize(int(rS * 0.4));
  // text(cities[city].toUpperCase(), 0, rS * gridNumY);
  // pop();

  // ---------------------------------------------- paper
  push();
  fill("#ffffff");
  noStroke();
  rect(-rS / 2, -rS / 2, rS * gridNumX + rS, rS / 2);
  rect(0, 0, -rS / 2, rS * gridNumY);
  rect(gridNumX * rS, 0, rS / 2, rS * gridNumY);
  rect(-rS / 2, rS * gridNumY + rS / 2, rS * gridNumX + rS, -rS / 2);
  pop();

  // ---------------------------------------------- footer
  push();
  fill("#4F4E4E");
  textSize(int(rS * 0.2));

  text(
    cities[city] + " - " + names[DJs] + " - " + d + "/" + m + "/" + y + " | Size: " + gridNumX + "0" + "x" + gridNumY + "0",
    wh / 100,
    gridNumY * rS + wh / 50
  );
  typoRaw++;
  pop();

  // ---------------------------------------------- footer colors
  push();
  fill("#4F4E4E");
  textSize(int(rS * 0.2));

  let angle3 = radians(90);
  rotate(angle3);

  //translate(wh/100,-wh/100);

  text("Palette:", wh / 100, wh / 50);
  stroke("#4F4E4E");

  fill(pallete[chosenPall][0]);
  rect(wh / 15, wh / 100, wh / 60, wh / 60);

  fill(pallete[chosenPall][1]);
  rect(wh / 11, wh / 100, wh / 60, wh / 60);

  fill(pallete[chosenPall][2]);
  rect(wh / 8.7, wh / 100, wh / 60, wh / 60);

  fill(pallete[chosenPall][3]);
  rect(wh / 7.3, wh / 100, wh / 60, wh / 60);

  fill(pallete[chosenPall][4]);
  rect(wh / 6.25, wh / 100, wh / 60, wh / 60);

  fill(pallete[chosenPall][5]);
  rect(wh / 5.5, wh / 100, wh / 60, wh / 60);

  pop();

  // ---------------------------------------------- cropmarks
  push();
  stroke("#4F4E4E");

  line(0, -wh / 100, 0, -wh / 40);
  line(-wh / 100, 0, -wh / 40, 0);

  line(rS * gridNumX, -wh / 40, rS * gridNumX, -wh / 100);
  line(rS * gridNumX + wh / 40, 0, rS * gridNumX + wh / 100, 0);

  line(0, rS * gridNumY + wh / 100, 0, rS * gridNumY + wh / 40);
  line(-wh / 100, rS * gridNumY, -wh / 40, rS * gridNumY);

  line(
    rS * gridNumX,
    rS * gridNumY + wh / 40,
    rS * gridNumX,
    rS * gridNumY + wh / 100
  );
  line(
    rS * gridNumX + wh / 40,
    rS * gridNumY,
    rS * gridNumX + wh / 100,
    rS * gridNumY
  );

  pop();
}

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == "s" || key == "S")
    save("Poster by Lomz: " + int(random(0, 1000)) + ".png");
}

// **************************
// *       Get Random       *
// **************************

function get_random(min, max) {
  return min + fxrand() * (max - min);
}
