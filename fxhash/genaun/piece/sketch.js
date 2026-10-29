// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

// vars
var numberOfBgd;
var numberOfBig;
var numberOfSmall;
var numberOfRuckaBig;
var numberOfRuckaSmall;
var numberOfKabalSmall;
var numberOfKabalBig;

var choosenBgd;
var choosenBig;
var choosenSmall;
var choosenRuckaBig;
var choosenRuckaSmall;
var choosenKabalSmall;
var choosenKabalBig;

let wh;
let tilesize;
let delilac;
let partSize;
let mnozilac;

let shadowBig;
let shadowSmall;

// arrays
var bgd = [];
var big = [];
var small = [];
var ruckaBig = [];
var ruckaSmall = [];
var kabalSmall = [];
var kabalBig = [];

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);
  background(200);
  noLoop();
	noStroke();
    
  delilac = 3;
  console.log(delilac);
  tileSize = wh / delilac;

  // mnozilac bira da li je uredjaj 2x2 ili 1x2
  mnozilac = int(get_random(1, 3));
  console.log('Dimenzije: '+ mnozilac + 'x2');

  console.log('Fxhash is: ' + fxhash);  // print fxhash

  //setup for generative graphics
  background(255);
  reset();

  // background layer
  choosenBgd = int(fxrand() * numberOfBgd);
  image(bgd[choosenBgd], 0, 0, wh, wh);

  // rucka
  choosenRuckaBig = int(fxrand() * numberOfRuckaBig);
  choosenRuckaSmall = int(fxrand() * numberOfRuckaSmall);
  choosenKabalSmall = int(fxrand() * numberOfKabalSmall);
  choosenKabalBig = int(fxrand() * numberOfKabalBig);

  if (mnozilac == 1) {
    image(kabalSmall[choosenKabalSmall], 0, 0, wh, wh);
    image(shadowSmall, 0, 0, wh, wh);
    image(ruckaSmall[choosenRuckaSmall], 0, 0, wh, wh);
  } else {
    image(kabalBig[choosenKabalBig], 0, 0, wh, wh);
    image(shadowBig, 0, 0, wh, wh);
    image(ruckaBig[choosenRuckaBig], 0, 0, wh, wh);
  }

}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds

  numberOfBgd = 6;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/bgd" + i + ".svg");
  }
  
  numberOfBig = 18;
  for (var i = 0; i < numberOfBig; i++) {
    big[i] = loadImage("assets/big" + i + ".svg");
  }

  numberOfSmall = 31;
  for (var i = 0; i < numberOfSmall; i++) {
    small[i] = loadImage("assets/small" + i + ".svg");
  }

  numberOfRuckaSmall = 8;
  for (var i = 0; i < numberOfRuckaSmall; i++) {
    ruckaSmall[i] = loadImage("assets/ruckaSmall" + i + ".svg");
  }

  numberOfRuckaBig = 6;
  for (var i = 0; i < numberOfRuckaBig; i++) {
    ruckaBig[i] = loadImage("assets/ruckaBig" + i + ".svg");
  }

  numberOfKabalSmall = 4;
  for (var i = 0; i < numberOfKabalSmall; i++) {
    kabalSmall[i] = loadImage("assets/kabalSmall" + i + ".svg");
  }

  numberOfKabalBig = 5;
  for (var i = 0; i < numberOfKabalBig; i++) {
    kabalBig[i] = loadImage("assets/kabalBig" + i + ".svg");
  }

  shadowBig = loadImage('assets/shadowBig.svg');
  shadowSmall = loadImage('assets/shadowSmall.svg');

}

// **************************
// *        Reset           *
// **************************

function reset() {
  resetMatrix(); // reset canvas
  imageMode(CENTER);
  translate(width / 2, height / 2);
}

// **************************
// *        Draw            *
// **************************

function draw() {
  
  // grid
  for (var y = wh / (delilac*2); y < height - wh / (delilac*2) - 0.01; y = y + tileSize) {
    for (var x = wh / (delilac*mnozilac); x < width - wh / (delilac*mnozilac) - 0.01; x = x + tileSize) {
      partSize = fxrand();
			if (partSize < 0.3) {
				smallPart(x, y, tileSize/2);
				smallPart(x+tileSize/2, y, tileSize/2);
				smallPart(x, y+tileSize/2, tileSize/2);
				smallPart(x+tileSize/2, y+tileSize/2, tileSize/2);
			} 

      else {
      	bigPart(x, y, tileSize);
			}
		}
  }
}

// Big parts
function bigPart(x, y, s) {
  push();
  choosenBig = int(fxrand() * numberOfBig);
  console.log('big: '+ choosenBig);
  imageMode(CORNER);
  image(big[choosenBig], x, y, s, s);
  pop();
}

// Small parts
function smallPart(x, y, s) {
  push();
  choosenSmall = int(fxrand() * numberOfSmall);
  imageMode(CORNER);
  image(small[choosenSmall], x, y, s, s);
  pop();
}

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

