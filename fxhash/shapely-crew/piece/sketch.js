// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

// vars
var numberOfBgd;
var choosenBgd;
var numberOfFigures;
var choosenFigures;
var numberOfFaces;
var choosenFaces;
var numberOfHands;
var choosenHands;
var numberOfUnique;
var choosenUnique;
var numberOfName1;
var choosenName1;

// arrays
var bgd = [];
var figure = [];
var face = [];
var hands = [];
var unique = [];
var name1 = [];

function setup() {
  createCanvas(windowHeight, windowHeight);

  console.log('Fxhash is: ' + fxhash);  // print fxhash

  //setup for generative graphics
  background(255);
  reset();

  // background layer
  choosenBgd = int(fxrand() * numberOfBgd);
  console.log(choosenBgd);
  image(bgd[choosenBgd], 0, 0, windowHeight, windowHeight);

  choosenFigures = int(fxrand() * numberOfFigures);
  console.log(choosenFigures);
  image(figure[choosenFigures], 0, 0, windowHeight, windowHeight);

  choosenFaces = int(fxrand() * numberOfFaces);
  console.log(choosenFaces);
  image(face[choosenFaces], 0, 0, windowHeight, windowHeight);

  choosenHands = int(fxrand() * numberOfHands);
  console.log(choosenHands);
  image(hands[choosenHands], 0, 0, windowHeight, windowHeight);

  choosenUnique = int(fxrand() * numberOfUnique);
  console.log(choosenUnique);
  image(unique[choosenUnique], 0, 0, windowHeight, windowHeight);

  choosenName1 = int(fxrand() * numberOfName1);
  console.log(choosenName1);
  image(name1[choosenName1], 0, 0, windowHeight, windowHeight);
  

}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds

  numberOfBgd = 4;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/bgd" + i + ".png");
  }

  numberOfFigures = 28;
  for (var i = 0; i < numberOfFigures; i++) {
    figure[i] = loadImage("assets/figure" + i + ".png");
  }

  numberOfFaces = 9;
  for (var i = 0; i < numberOfFaces; i++) {
    face[i] = loadImage("assets/face" + i + ".png");
  }

  numberOfHands = 10;
  for (var i = 0; i < numberOfHands; i++) {
    hands[i] = loadImage("assets/hands" + i + ".png");
  }

  numberOfUnique = 11;
  for (var i = 0; i < numberOfUnique; i++) {
    unique[i] = loadImage("assets/unique" + i + ".png");
  }

  numberOfName1 = 11;
  for (var i = 0; i < numberOfName1; i++) {
    name1[i] = loadImage("assets/name" + i + ".png");
  }
  
}

// **************************
// *        Reset           *
// **************************

function reset() {
  resetMatrix(); // reset canvas
  imageMode(CENTER);
  translate(width / 2, height / 2);
}

function draw() {
}

