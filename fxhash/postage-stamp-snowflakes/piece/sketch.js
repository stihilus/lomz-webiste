// Template for FXHASH
// by lomz.net

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  var assetsArrayBgd = [bgd01, bgd02];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 1));
  console.log('Choosen background is: ' + choosenBgd);
  // print image
  image(assetsArrayBgd[choosenBgd], 0, 0, windowWidth, windowHeight);

  // Print layerA
  // [6] character from fxhash string
  reset();
  var assetsArrayLyrA = [layerA01, layerA02, layerA03, layerA04, layerA05, layerA06, layerA07];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrA = Math.floor(map(valueUnchar[6], 48, 122, 0, 6));
  console.log('Choosen layerA is: ' + choosenLyrA);
  // print image
  image(assetsArrayLyrA[choosenLyrA], 0, 0, windowWidth, windowHeight);

  // Print layerB
  // [7] character from fxhash string
  reset();
  assetsArrayLyrB = [layerB01, layerB02, layerB03, layerB04, layerB05, layerB06];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrB = Math.floor(map(valueUnchar[7], 48, 122, 0, 5));
  console.log('Choosen layerB is: ' + choosenLyrB);
  // print image
  image(assetsArrayLyrB[choosenLyrB], 0, 0, windowWidth, windowHeight);

  // Print layerD
  // [9] character from fxhash string
  reset();
  assetsArrayLyrD = [layerD01, layerD02, layerD03, layerD04, layerD05, layerD06, layerD07,layerD08];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrD = Math.floor(map(valueUnchar[9], 48, 122, 0, 7));
  console.log('Choosen layerD is: ' + choosenLyrD);
  // print image
  image(assetsArrayLyrD[choosenLyrD], 0, 0, windowWidth, windowHeight);

  // Print layerC
  // [8] character from fxhash string
  reset();
  assetsArrayLyrC = [layerC01, layerC02, layerC03, layerC04, layerC05, layerC06, layerC07,layerC08];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrC = Math.floor(map(valueUnchar[8], 48, 122, 0, 7));
  console.log('Choosen layerC is: ' + choosenLyrC);
  // print image
  image(assetsArrayLyrC[choosenLyrC], 0, 0, windowWidth, windowHeight);

  // Print layerE
  // [10] character from fxhash string
  reset();
  assetsArrayLyrE = [layerE01, layerE02, layerE03, layerE04, layerE05, layerE06, layerE07, layerE08, layerE09];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrE = Math.floor(map(valueUnchar[10], 48, 122, 0, 8));
  console.log('Choosen layerE is: ' + choosenLyrE);
  // print image
  image(assetsArrayLyrE[choosenLyrE], 0, 0, windowWidth, windowHeight);

  // Print layerF
  // [11] character from fxhash string
  reset();
  assetsArrayLyrF = [layerF01, layerF02, layerF03, layerF04, layerF05, layerF06, layerF07, layerF08, layerF09, layerF10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrF = Math.floor(map(valueUnchar[11], 48, 122, 0, 9));
  console.log('Choosen layerF is: ' + choosenLyrF);
  // print image
  image(assetsArrayLyrF[choosenLyrF], 0, 0, windowWidth, windowHeight);

  // Print layerG
  // [12] character from fxhash string
  reset();
  assetsArrayLyrG = [layerG01, layerG02, layerG03, layerG04, layerG05, layerG06, layerG07, layerG08, layerG09, layerG10];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrG = Math.floor(map(valueUnchar[12], 48, 122, 0, 9));
  console.log('Choosen layerF is: ' + choosenLyrG);
  // print image
  image(assetsArrayLyrG[choosenLyrG], 0, 0, windowWidth, windowHeight);

}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds
  bgd01 = loadImage("assets/bgd01.png");
  bgd02 = loadImage("assets/bgd02.png");
  //LayerA
  layerA01 = loadImage("assets/layerA01.png");
  layerA02 = loadImage("assets/layerA02.png");
  layerA03 = loadImage("assets/layerA03.png");
  layerA04 = loadImage("assets/layerA04.png");
  layerA05 = loadImage("assets/layerA05.png");
  layerA06 = loadImage("assets/layerA06.png");
  layerA07 = loadImage("assets/layerA07.png");
  //LayerB
  layerB01 = loadImage("assets/layerB01.png");
  layerB02 = loadImage("assets/layerB02.png");
  layerB03 = loadImage("assets/layerB03.png");
  layerB04 = loadImage("assets/layerB04.png");
  layerB05 = loadImage("assets/layerB05.png");
  layerB06 = loadImage("assets/layerB06.png");
  //LayerC
  layerC01 = loadImage("assets/layerC01.png");
  layerC02 = loadImage("assets/layerC02.png");
  layerC03 = loadImage("assets/layerC03.png");
  layerC04 = loadImage("assets/layerC04.png");
  layerC05 = loadImage("assets/layerC05.png");
  layerC06 = loadImage("assets/layerC06.png");
  layerC07 = loadImage("assets/layerC07.png");
  layerC08 = loadImage("assets/layerC08.png");
  //LayerD
  layerD01 = loadImage("assets/layerD01.png");
  layerD02 = loadImage("assets/layerD02.png");
  layerD03 = loadImage("assets/layerD03.png");
  layerD04 = loadImage("assets/layerD04.png");
  layerD05 = loadImage("assets/layerD05.png");
  layerD06 = loadImage("assets/layerD06.png");
  layerD07 = loadImage("assets/layerD07.png");
  layerD08 = loadImage("assets/layerD08.png");
  //LayerE
  layerE01 = loadImage("assets/layerE01.png");
  layerE02 = loadImage("assets/layerE02.png");
  layerE03 = loadImage("assets/layerE03.png");
  layerE04 = loadImage("assets/layerE04.png");
  layerE05 = loadImage("assets/layerE05.png");
  layerE06 = loadImage("assets/layerE06.png");
  layerE07 = loadImage("assets/layerE07.png");
  layerE08 = loadImage("assets/layerE08.png");
  layerE09 = loadImage("assets/layerE09.png");
  //LayerF
  layerF01 = loadImage("assets/layerF01.png");
  layerF02 = loadImage("assets/layerF02.png");
  layerF03 = loadImage("assets/layerF03.png");
  layerF04 = loadImage("assets/layerF04.png");
  layerF05 = loadImage("assets/layerF05.png");
  layerF06 = loadImage("assets/layerF06.png");
  layerF07 = loadImage("assets/layerF07.png");
  layerF08 = loadImage("assets/layerF08.png");
  layerF09 = loadImage("assets/layerF09.png");
  layerF10 = loadImage("assets/layerF10.png");
  //LayerG
  layerG01 = loadImage("assets/layerG01.png");
  layerG02 = loadImage("assets/layerG02.png");
  layerG03 = loadImage("assets/layerG03.png");
  layerG04 = loadImage("assets/layerG04.png");
  layerG05 = loadImage("assets/layerG05.png");
  layerG06 = loadImage("assets/layerG06.png");
  layerG07 = loadImage("assets/layerG07.png");
  layerG08 = loadImage("assets/layerG08.png");
  layerG09 = loadImage("assets/layerG09.png");
  layerG10 = loadImage("assets/layerG10.png");
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
