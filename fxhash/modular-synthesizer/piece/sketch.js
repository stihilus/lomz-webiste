// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

let gridNumX;
let gridNumY;
let xPos;
let yPos;

let rS; // velicina polja
let podizac = 4;
let round;
let sBW; // razmak izmedju polja

let colors = [];
let synthColor;

let wh;

let numberOf2x2;
let numberOf1x1;
let numberOf2x1;
let numberOf1x2;
let numberOfKey;
let numberOfBgd;

let choosen2x2;
let choosen1x1;
let choosen2x1;
let choosen1x2;
let choosenBgd;

let p2x2 = [];
let p1x1 = [];
let p2x1 = [];
let p1x2 = [];
let key = [];
let bgd = [];

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);
  rS = wh / 6;
  round = wh/200;
  sBW = wh/500;

  background(150);
  
  colors = [230,240,250];
  
  synthColor = int(get_random(0, colors.length));
  console.log(synthColor);
  console.log(colors[synthColor]);
  
  gridNumX = int(get_random(2, 6));
  gridNumY = int(get_random(2, 4));
  
  if (gridNumY < 3) {
      podizac = 4;
  } else {
      podizac = 6;
  }
 
  console.log(podizac);

   // background layer
   choosenBgd = int(fxrand() * numberOfBgd);
   image(bgd[choosenBgd], 0, 0, wh, wh);

  

  translate(
    (wh / 2) - (rS * gridNumX)/2,
    (wh / 2) - (rS * gridNumY)/2 - (rS * gridNumY)/podizac // 4 ili 6
  );

  for (let x = 0; x < gridNumX; x += 1) {
    for (let y = 0; y < gridNumY; y += 1) {
      xPos = x * rS;
      yPos = y * rS;
      
      push();
        noStroke();
        fill(colors[synthColor]);
        
        if (fxrand() < .3) {
          rect(xPos+sBW, yPos+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
          choosen1x1 = int(fxrand() * numberOf1x1);
          image(p1x1[choosen1x1], xPos+sBW, yPos+sBW, (rS/2)-sBW, (rS/2)-sBW);

          rect((xPos+(rS/2)+sBW), yPos+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
          choosen1x1 = int(fxrand() * numberOf1x1);
          image(p1x1[choosen1x1], (xPos+(rS/2)+sBW), yPos+sBW, (rS/2)-sBW, (rS/2)-sBW);

          rect((xPos+(rS/2)+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
          choosen1x1 = int(fxrand() * numberOf1x1);
          image(p1x1[choosen1x1], (xPos+(rS/2)+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW);

          rect((xPos+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
          choosen1x1 = int(fxrand() * numberOf1x1);
          image(p1x1[choosen1x1], (xPos+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round);

        }
        else if (fxrand() > .3 && fxrand() < .5) {
          push();
          rect(xPos+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW, round);
          choosen1x2 = int(fxrand() * numberOf1x2);
          image(p1x2[choosen1x2], xPos+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);

          rect((xPos+(rS/2))+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW, round);
          choosen1x2 = int(fxrand() * numberOf1x2);
          image(p1x2[choosen1x2], (xPos+(rS/2))+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);
          pop();
        }
      
        else if (fxrand() > .5 && fxrand() < .7) {
          push();
          rect(xPos+sBW, yPos+sBW, rS-sBW, (rS/2)-sBW, round);
          choosen2x1 = int(fxrand() * numberOf2x1);
          image(p2x1[choosen2x1], xPos+sBW, yPos+sBW, rS-sBW, (rS/2)-sBW);

          rect(xPos+sBW,(yPos+(rS/2))+sBW, rS-sBW, (rS/2)-sBW, round);
          choosen2x1 = int(fxrand() * numberOf2x1);
          image(p2x1[choosen2x1], xPos+sBW,(yPos+(rS/2))+sBW, rS-sBW, (rS/2)-sBW);
          pop();
        }
      
        else {
          rect(xPos+sBW, yPos+sBW, rS-sBW, rS-sBW, round);
          choosen2x2 = int(fxrand() * numberOf2x2);
          image(p2x2[choosen2x2], xPos+sBW, yPos+sBW, rS-sBW, rS-sBW);
        }
      pop();
    }
  }
  
  //keyboard
  push();
    rectMode(CORNER);
    noStroke();
    fill(colors[synthColor]);
    rect(0+sBW,(rS*gridNumY)+sBW,(rS*gridNumX)-sBW, rS-sBW, round); //(rS-wh/150)-sBW

    console.log("key is: " + gridNumX);

    if (gridNumX == 2) {
      image(key[3], 0+sBW,(rS*gridNumY)+sBW,(rS*gridNumX)-sBW, rS-sBW);
    }

    else if (gridNumX == 3) {
      image(key[2], 0+sBW,(rS*gridNumY)+sBW,(rS*gridNumX)-sBW, rS-sBW);
    }

    else if (gridNumX == 4) {
      image(key[1], 0+sBW,(rS*gridNumY)+sBW,(rS*gridNumX)-sBW, rS-sBW);
    }

    else {
      image(key[0], 0+sBW,(rS*gridNumY)+sBW,(rS*gridNumX)-sBW, rS-sBW);
    }


  pop();
  
  

  //wood 
  push();
    rectMode(CORNER);
    noStroke();
    fill('#2C2C2C');
    rect(-(wh/50),0+sBW,wh/50,((rS*gridNumY)+rS)-sBW,round);
    rect((rS*gridNumX)+sBW,0+sBW,wh/50,((rS*gridNumY)+rS)-sBW,round);
  pop();
}

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("genaun"+int(random(0,1000))+".png");
}

// **************************
// *        Random          *
// **************************

function get_random(min, max) {
  return min + fxrand() * (max - min);
}

// **************************
// *        Preload         *
// **************************

function preload() {

  numberOf2x2 = 18;
    for (var i = 0; i < numberOf2x2; i++) {
      p2x2[i] = loadImage("assets/2x2-" + i + ".svg");
    }

    numberOf1x1 = 18;
    for (var i = 0; i < numberOf1x1; i++) {
      p1x1[i] = loadImage("assets/1x1-" + i + ".svg");
    }

    numberOf2x1 = 10;
    for (var i = 0; i < numberOf2x1; i++) {
      p2x1[i] = loadImage("assets/2x1-" + i + ".svg");
    }

    numberOf1x2 = 13;
    for (var i = 0; i < numberOf1x2; i++) {
      p1x2[i] = loadImage("assets/1x2-" + i + ".svg");
    }

    numberOfKey = 4;
    for (var i = 0; i < numberOfKey; i++) {
      key[i] = loadImage("assets/key" + i + ".svg");
    }   

    numberOfBgd = 5;
    for (var i = 0; i < numberOfBgd; i++) {
      bgd[i] = loadImage("assets/bgd" + i + ".svg");
    }

}