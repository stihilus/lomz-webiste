// Template for FXHASH
// by lomz.net

function setup() {
  createCanvas(600, 600);

  console.log('Fxhash is: ' + fxhash);  // print fxhash

  var fxhashLenght = 49; // Lenght of fxhash
  let splitfxhash = split(fxhash, ''); // Split fxhash

  let value = []; // Array for all simbols from fxhash
  let valueUnchar = [];

  // separate fxhash to objects in array

  for (i = 0; i < fxhashLenght; i++) {
  value[i] = splitfxhash[i];
  valueUnchar[i] = unchar(value[i]);
  }

  // print test
  // unchar value from 48 to 122
  console.log('The fifth character from fxhash is ' + value[5]);
  console.log('The fifth unchar value is: ' + (unchar(value[5])));
  console.log('The fifth unchar character from fxhash is ' + valueUnchar[5]);

  //setup for generative graphics
  background(255);

  // Print backgrounds
  // [5] character from fxhash string
  reset();
  var assetsArrayBgd = [bgd01, bgd02, bgd03];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 2));
  console.log('Choosen background is: ' + choosenBgd);
  // print image
  image(assetsArrayBgd[choosenBgd], 0, 0);

  // Print layerA
  // [6] character from fxhash string
  reset();
  var assetsArrayLyrA = [layerA01, layerA02, layerA03, layerA04, layerA05, layerA06, layerA07, layerA08, layerA09, layerA10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrA = Math.floor(map(valueUnchar[6], 48, 122, 0, 9));
  console.log('Choosen layerA is: ' + choosenLyrA);
  // print image
  image(assetsArrayLyrA[choosenLyrA], 0, 0);

  // Print layerB
  // [7] character from fxhash string
  reset();
  assetsArrayLyrB = [layerB01, layerB02, layerB03, layerB04, layerB05, layerB06, layerB07, layerB08, layerB09];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrB = Math.floor(map(valueUnchar[7], 48, 122, 0, 8));
  console.log('Choosen layerB is: ' + choosenLyrB);
  // print image
  image(assetsArrayLyrB[choosenLyrB], 0, 0);

  // Print layerC
  // [8] character from fxhash string
  reset();
  assetsArrayLyrC = [layerC01, layerC02, layerC03, layerC04, layerC05, layerC06, layerC07];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrC = Math.floor(map(valueUnchar[8], 48, 122, 0, 6));
  console.log('Choosen layerC is: ' + choosenLyrC);
  // print image
  image(assetsArrayLyrC[choosenLyrC], 0, 0);

  // Print layerC
  // [9] character from fxhash string
  reset();
  assetsArrayLyrD = [layerD01, layerD02, layerD03, layerD04, layerD05];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrD = Math.floor(map(valueUnchar[9], 48, 122, 0, 4));
  console.log('Choosen layerD is: ' + choosenLyrD);
  // print image
  image(assetsArrayLyrD[choosenLyrD], 0, 0);

}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds
  bgd01 = loadImage("assets/bgd01.png");
  bgd02 = loadImage("assets/bgd02.png");
  bgd03 = loadImage("assets/bgd03.png");
  //LayerA
  layerA01 = loadImage("assets/layerA01.png");
  layerA02 = loadImage("assets/layerA02.png");
  layerA03 = loadImage("assets/layerA03.png");
  layerA04 = loadImage("assets/layerA04.png");
  layerA05 = loadImage("assets/layerA05.png");
  layerA06 = loadImage("assets/layerA06.png");
  layerA07 = loadImage("assets/layerA07.png");
  layerA08 = loadImage("assets/layerA08.png");
  layerA09 = loadImage("assets/layerA09.png");
  layerA10 = loadImage("assets/layerA10.png");
  //LayerB
  layerB01 = loadImage("assets/layerB01.png");
  layerB02 = loadImage("assets/layerB02.png");
  layerB03 = loadImage("assets/layerB03.png");
  layerB04 = loadImage("assets/layerB04.png");
  layerB05 = loadImage("assets/layerB05.png");
  layerB06 = loadImage("assets/layerB06.png");
  layerB07 = loadImage("assets/layerB07.png");
  layerB08 = loadImage("assets/layerB08.png");
  layerB09 = loadImage("assets/layerB09.png");
  //LayerC
  layerC01 = loadImage("assets/layerC01.png");
  layerC02 = loadImage("assets/layerC02.png");
  layerC03 = loadImage("assets/layerC03.png");
  layerC04 = loadImage("assets/layerC04.png");
  layerC05 = loadImage("assets/layerC05.png");
  layerC06 = loadImage("assets/layerC06.png");
  layerC07 = loadImage("assets/layerC07.png");
  //LayerD
  layerD01 = loadImage("assets/layerD01.png");
  layerD02 = loadImage("assets/layerD02.png");
  layerD03 = loadImage("assets/layerD03.png");
  layerD04 = loadImage("assets/layerD04.png");
  layerD05 = loadImage("assets/layerD05.png");
  layerD06 = loadImage("assets/layerD06.png");
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
