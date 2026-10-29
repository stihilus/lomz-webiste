// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

var wh;
var numberOfBgd;
var choosenBgd;
var numberOfGramophone;
var chosenGramophone;
var numberOfColorSensor;
var numberOfNeedle;
var chosenVinyl;
var chosenVinylL1;
var numberOfVinyl;
var numberOfVinylL1;
var bgd = [];
var gramophone = [];
var vinyl = [];
var vinylL1 = [];
var colorSensor = [];
var needle = [];
var needleX;
var needleY;
var vinylSize;
var angle = Math.floor(fxrand() * 360);
var needleColor;
var needlePosition = 0;
var currentNeedlePosition = 1;
var needleMap;
var rMap;
var gMap;
var bMap;
var vinylSpeed = 0.05;
var needleSpeed = 0.001;
// Tone
let tempo = 150 + Math.floor(fxrand() * 150);
console.log(tempo);
let nextTick = 0;
let muted = false;
let kick;
let hh;
let bd;
let rim;
let keys;
let wood;
let tm;
let cr;
let mat;
let pc;
let g;
let tC = 0; // tick counter

// Features
window.$fxhashFeatures = {
  "Tempo": tempo,
  "Start position": angle,
};


function setup() {

  wh = windowHeight;
  createCanvas(wh, wh);  // Define canvas size
  background('#F9F0E8');

  vinylSize = wh - (wh / 2.75);
  angleMode(DEGREES);

  // background layer
  choosenBgd = int(fxrand() * numberOfBgd);
  image(bgd[choosenBgd], 0, 0, windowHeight, windowHeight);

  // Gramophone
  chosenGramophone = int(fxrand() * numberOfGramophone);
  image(gramophone[chosenGramophone], 0, 0, windowHeight, windowHeight);  

  // Vinyl
  chosenVinyl = int(fxrand() * numberOfVinyl);
  chosenVinylL1 = int(fxrand() * numberOfVinylL1);
}

function draw() {

  // Vinyl
    push();
    translate(wh / 2.45, wh / 2.16);
    rotate(angle);
    imageMode(CENTER);
    image(vinyl[chosenVinyl], 0, 0, vinylSize, vinylSize);
    image(vinylL1[chosenVinylL1], 0, 0, vinylSize, vinylSize);
    angle+=vinylSpeed;
    pop();

  // Needle
    push();
      imageMode(CENTER);
      ellipseMode(CENTER);
      // noStroke();
      needleX = wh / 1.46;
      needleY = wh / 2.16;

      // Start X - wh / 1.46 | End X - wh / 1.95
      needleMap = map(currentNeedlePosition,1 ,5 ,1.46 ,1.95);
      
      // move needle
      translate(wh / needleMap, needleY);
      
      //Getting color from vinyl
      needleColor = get(wh / needleMap, needleY);

      // fill needle
      fill(needleColor);
      ellipse(0, 0, 10, 10);

      image(needle[chosenGramophone], 0, 0, wh/13,wh/13); 

      currentNeedlePosition += needleSpeed;

      if (currentNeedlePosition > 5){
        currentNeedlePosition = 1;
      }
      
    pop();
    
    // ------------------------------------------------------------------------------------------ Samples
    let timeNow = millis();
    if (timeNow > nextTick) {

      //play([startTime], [rate], [amp], [cueStart], [duration])
      tC += 1;
      // RED
      if (needleColor[0] > 120 && tC == int(fxrand() * 4)){
        kick.play(0,(fxrand() * 3 + 1),fxrand());
      }

      if (needleColor[0] > 120 && tC == 4 || tC == 2){
        cr.play(0,0,fxrand());
      }

      if (needleColor[0] < 50 && tC == 4){
        mat.play(0,(fxrand() * 3 + 1),1);
      }

      // GREEN
      if (needleColor[1] > 180 && tC == int(fxrand() * 4)){
          hh.play(0,0,fxrand());
      }

      if (needleColor[1] > 230 || tC == int(fxrand() * 4)){
        wood.play(0,0,fxrand());
      }

      if (needleColor[1] > 230 || tC == 2){
        keys.play(0,0,fxrand());
      }

      if (needleColor[1] > 200 || tC == 4){
        pc.play(0,(fxrand() * 2 + 1),fxrand());
      }

      // BLUE
      if (needleColor[2] > 100 && tC == 2 && tC == 4){
        bd.play(0,0,fxrand());
      }

      if (needleColor[2] > 100 && tC == 2 || tC == 4){
        rim.play(0,0,fxrand());
      }

      if (needleColor[2] < 100 && tC == 3){
        tm.play(0,0,fxrand());
      }

      if (needleColor[2] < 50 && tC == 2){
        g.play(0,fxrand(),fxrand() * .3);
      }

      if (tC == 4) {
        tC = 0;
      }

      nextTick = timeNow + 60000/tempo;
    }

    // ------------------------------------------------------------------------------------------ Samples

    // RGB LED display
    push();
      noStroke();
      //background
      fill(needleColor[0],0,0);
      ellipse(wh - (wh/8.3), wh/5.2, wh/100, wh/100);

      fill(0,needleColor[1],0);
      ellipse(wh - (wh/9.6), wh/5.2, wh/100, wh/100);

      fill(0,0,needleColor[2]);
      ellipse(wh - (wh/11.4), wh/5.2, wh/100, wh/100);
    pop();


  // ColorSensor
    image(colorSensor[chosenGramophone], 0, 0, windowHeight, windowHeight); 

}


function preload() {

  // Graphic assets
  numberOfBgd = 7;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/bgd" + i + ".svg");
  }

  numberOfGramophone = 4;
  for (var i = 0; i < numberOfGramophone; i++) {
    gramophone[i] = loadImage("assets/gramophone" + i + ".svg");
  }

  numberOfVinyl = 11;
  for (var i = 0; i < numberOfVinyl; i++) {
    vinyl[i] = loadImage("assets/vinyl" + i + ".png");
  }

  numberOfVinylL1 = 5;
  for (var i = 0; i < numberOfVinylL1; i++) {
    vinylL1[i] = loadImage("assets/vinylL" + i + ".png");
  }

  numberOfColorSensor = 4; // number of asssets
  for (var i = 0; i < numberOfColorSensor; i++) {
    colorSensor[i] = loadImage("assets/colorSensor" + i + ".svg");
  }

  numberOfNeedle = 4; // number of asssets
  for (var i = 0; i < numberOfNeedle; i++) {
    needle[i] = loadImage("assets/needle" + i + ".svg");
  }

  // Audio
  kick = loadSound('samples/kick.wav');
  hh = loadSound('samples/hh.wav');
  bd = loadSound('samples/bd.wav');
  rim = loadSound('samples/rim.wav');
  keys = loadSound('samples/keys.wav');
  wood = loadSound('samples/wood.wav');
  tm = loadSound('samples/tm.wav');
  cr = loadSound('samples/cr.wav');
  mat = loadSound('samples/mat.wav');
  pc = loadSound('samples/pc.wav');
  ro = loadSound('samples/ro.wav');
  g = loadSound('samples/g.wav');
  kick.playMode('restart');
}
