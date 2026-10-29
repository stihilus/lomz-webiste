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
  background(200);

  // Print backgrounds
  // [5] character from fxhash string
  reset();
  var assetsArrayBgd = [bgd01, bgd02, bgd03, bgd04, bgd05, bgd06, bgd07, bgd08, bgd09, bgd10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 9));
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
  assetsArrayLyrB = [layerB01, layerB02, layerB03, layerB04, layerB05, layerB06, layerB07, layerB08, layerB09, layerB10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrB = Math.floor(map(valueUnchar[7], 48, 122, 0, 9));
  console.log('Choosen layerB is: ' + choosenLyrB);
  // print image
  image(assetsArrayLyrB[choosenLyrB], 0, 0);

  // Print layerC
  // [8] character from fxhash string
  reset();
  assetsArrayLyrC = [layerC01, layerC02, layerC03, layerC04, layerC05, layerC06, layerC07, layerC08, layerC09, layerC10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrC = Math.floor(map(valueUnchar[7], 48, 122, 0, 9));
  console.log('Choosen layerC is: ' + choosenLyrC);
  // print image
  image(assetsArrayLyrC[choosenLyrC], 0, 0);

}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds
  bgd01 = loadImage("assets/bgd01.png");
  bgd02 = loadImage("assets/bgd02.png");
  bgd03 = loadImage("assets/bgd03.png");
  bgd04 = loadImage("assets/bgd04.png");
  bgd05 = loadImage("assets/bgd05.png");
  bgd06 = loadImage("assets/bgd06.png");
  bgd07 = loadImage("assets/bgd07.png");
  bgd08 = loadImage("assets/bgd08.png");
  bgd09 = loadImage("assets/bgd09.png");
  bgd10 = loadImage("assets/bgd10.png");
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
  layerB10 = loadImage("assets/layerB10.png");
  //LayerC
  layerC01 = loadImage("assets/layerC01.png");
  layerC02 = loadImage("assets/layerC02.png");
  layerC03 = loadImage("assets/layerC03.png");
  layerC04 = loadImage("assets/layerC04.png");
  layerC05 = loadImage("assets/layerC05.png");
  layerC06 = loadImage("assets/layerC06.png");
  layerC07 = loadImage("assets/layerC07.png");
  layerC08 = loadImage("assets/layerC08.png");
  layerC09 = loadImage("assets/layerC09.png");
  layerC10 = loadImage("assets/layerC10.png");
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
