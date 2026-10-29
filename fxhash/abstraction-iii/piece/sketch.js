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
  // console.log('The fifth character from fxhash is ' + value[5]);
  // console.log('The fifth unchar value is: ' + (unchar(value[5])));
  // console.log('The fifth unchar character from fxhash is ' + valueUnchar[5]);

  //Choose asset pack
  // 0 - 6 | 7 - 13 | 14 - 20 | 21 - 27
  var shifterNumber = [0,7,14,21];
  var shifter = shifterNumber[Math.floor(map(valueUnchar[5], 48, 122, 0, 4))];
  console.log('Shifter is:' + shifter);
  


  //setup for generative graphics
  background(255);

  // Print backgrounds
  // [5] character from fxhash string
  reset();
  var assetsArrayBgd = [bgd01, bgd02, bgd03, bgd04, bgd05, bgd06, bgd07, 
    bgd01a, bgd02a, bgd03a, bgd04a, bgd05a, bgd06a, bgd07a, 
    bgd01b, bgd02b, bgd03b, bgd04b, bgd05b, bgd06b, bgd07b,
    bgd01c, bgd02c, bgd03c, bgd04c, bgd05c, bgd06c, bgd07c];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 6));
  console.log('Choosen background is: ' + choosenBgd);
  // print image
  image(assetsArrayBgd[choosenBgd + shifter], 0, 0, windowWidth, windowHeight);

  // Print layerA
  // [6] character from fxhash string
  reset();
  var assetsArrayLyrA = [layerA01, layerA02, layerA03, layerA04, layerA05, layerA06, layerA07,
    layerA01a, layerA02a, layerA03a, layerA04a, layerA05a, layerA06a, layerA07a,
    layerA01b, layerA02b, layerA03b, layerA04b, layerA05b, layerA06b, layerA07b,
    layerA01c, layerA02c, layerA03c, layerA04c, layerA05c, layerA06c, layerA07c];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrA = Math.floor(map(valueUnchar[6], 48, 122, 0, 6));
  console.log('Choosen layerA is: ' + choosenLyrA);
  // print image
  image(assetsArrayLyrA[choosenLyrA + shifter], 0, 0, windowWidth, windowHeight);

  // Print layerB
  // [7] character from fxhash string
  reset();
  assetsArrayLyrB = [layerB01, layerB02, layerB03, layerB04, layerB05, layerB06, layerB07,
    layerB01a, layerB02a, layerB03a, layerB04a, layerB05a, layerB06a, layerB07a,
    layerB01b, layerB02b, layerB03b, layerB04b, layerB05b, layerB06b, layerB07b,
    layerB01c, layerB02c, layerB03c, layerB04c, layerB05c, layerB06c, layerB07c];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrB = Math.floor(map(valueUnchar[7], 48, 122, 0, 6));
  console.log('Choosen layerB is: ' + choosenLyrB);
  // print image
  image(assetsArrayLyrB[choosenLyrB + shifter] , 0, 0, windowWidth, windowHeight);

  // Print layerC
  // [8] character from fxhash string
  reset();
  assetsArrayLyrC = [layerC01, layerC02, layerC03, layerC04, layerC05, layerC06, layerC07,
    layerC01a, layerC02a, layerC03a, layerC04a, layerC05a, layerC06a, layerC07a,
    layerC01b, layerC02b, layerC03b, layerC04b, layerC05b, layerC06b, layerC07b,
    layerC01c, layerC02c, layerC03c, layerC04c, layerC05c, layerC06c, layerC07c];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrC = Math.floor(map(valueUnchar[8], 48, 122, 0, 5));
  console.log('Choosen layerC is: ' + choosenLyrC);
  // print image
  image(assetsArrayLyrC[choosenLyrC + shifter], 0, 0, windowWidth, windowHeight);

  // Print layerC
  // [9] character from fxhash string
  reset();
  assetsArrayLyrD = [layerD01, layerD02, layerD03, layerD04, layerD05, layerD06, layerD07,
    layerD01a, layerD02a, layerD03a, layerD04a, layerD05a, layerD06a, layerD07a,
    layerD01b, layerD02b, layerD03b, layerD04b, layerD05b, layerD06b, layerD07b,
    layerD01c, layerD02c, layerD03c, layerD04c, layerD05c, layerD06c, layerD07c];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrD = Math.floor(map(valueUnchar[9], 48, 122, 0, 6));
  console.log('Choosen layerD is: ' + choosenLyrD);
  // print image
  image(assetsArrayLyrD[choosenLyrD + shifter], 0, 0, windowWidth, windowHeight);

  // Print layerC
  // [9] character from fxhash string
  reset();
  assetsArrayLyrE = [layerE01, layerE02, layerE03, layerE04, layerE05, layerE06, layerE07,
    layerE01a, layerE02a, layerE03a, layerE04a, layerE05a, layerE06a, layerE07a,
    layerE01b, layerE02b, layerE03b, layerE04b, layerE05b, layerE06b, layerE07b,
    layerE01c, layerE02c, layerE03c, layerE04c, layerE05c, layerE06c, layerE07];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrE = Math.floor(map(valueUnchar[10], 48, 122, 0, 6));
  console.log('Choosen layerD is: ' + choosenLyrE);
  // print image
  image(assetsArrayLyrE[choosenLyrE + shifter], 0, 0, windowWidth, windowHeight);


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

  bgd01a = loadImage("assets/bgd01a.png");
  bgd02a = loadImage("assets/bgd02a.png");
  bgd03a = loadImage("assets/bgd03a.png");
  bgd04a = loadImage("assets/bgd04a.png");
  bgd05a = loadImage("assets/bgd05a.png");
  bgd06a = loadImage("assets/bgd06a.png");
  bgd07a = loadImage("assets/bgd07a.png");

  bgd01b = loadImage("assets/bgd01b.png");
  bgd02b = loadImage("assets/bgd02b.png");
  bgd03b = loadImage("assets/bgd03b.png");
  bgd04b = loadImage("assets/bgd04b.png");
  bgd05b = loadImage("assets/bgd05b.png");
  bgd06b = loadImage("assets/bgd06b.png");
  bgd07b = loadImage("assets/bgd07b.png");

  bgd01c = loadImage("assets/bgd01c.png");
  bgd02c = loadImage("assets/bgd02c.png");
  bgd03c = loadImage("assets/bgd03c.png");
  bgd04c = loadImage("assets/bgd04c.png");
  bgd05c = loadImage("assets/bgd05c.png");
  bgd06c = loadImage("assets/bgd06c.png");
  bgd07c = loadImage("assets/bgd07c.png");
  
  //LayerA
  layerA01 = loadImage("assets/layerA01.png");
  layerA02 = loadImage("assets/layerA02.png");
  layerA03 = loadImage("assets/layerA03.png");
  layerA04 = loadImage("assets/layerA04.png");
  layerA05 = loadImage("assets/layerA05.png");
  layerA06 = loadImage("assets/layerA06.png");
  layerA07 = loadImage("assets/layerA07.png");

  layerA01a = loadImage("assets/layerA01a.png");
  layerA02a = loadImage("assets/layerA02a.png");
  layerA03a = loadImage("assets/layerA03a.png");
  layerA04a = loadImage("assets/layerA04a.png");
  layerA05a = loadImage("assets/layerA05a.png");
  layerA06a = loadImage("assets/layerA06a.png");
  layerA07a = loadImage("assets/layerA07a.png");

  layerA01b = loadImage("assets/layerA01b.png");
  layerA02b = loadImage("assets/layerA02b.png");
  layerA03b = loadImage("assets/layerA03b.png");
  layerA04b = loadImage("assets/layerA04b.png");
  layerA05b = loadImage("assets/layerA05b.png");
  layerA06b = loadImage("assets/layerA06b.png");
  layerA07b = loadImage("assets/layerA07b.png");

  layerA01c = loadImage("assets/layerA01c.png");
  layerA02c = loadImage("assets/layerA02c.png");
  layerA03c = loadImage("assets/layerA03c.png");
  layerA04c = loadImage("assets/layerA04c.png");
  layerA05c = loadImage("assets/layerA05c.png");
  layerA06c = loadImage("assets/layerA06c.png");
  layerA07c = loadImage("assets/layerA07c.png");
  
  //LayerB
  layerB01 = loadImage("assets/layerB01.png");
  layerB02 = loadImage("assets/layerB02.png");
  layerB03 = loadImage("assets/layerB03.png");
  layerB04 = loadImage("assets/layerB04.png");
  layerB05 = loadImage("assets/layerB05.png");
  layerB06 = loadImage("assets/layerB06.png");
  layerB07 = loadImage("assets/layerB07.png");

  layerB01a = loadImage("assets/layerB01a.png");
  layerB02a = loadImage("assets/layerB02a.png");
  layerB03a = loadImage("assets/layerB03a.png");
  layerB04a = loadImage("assets/layerB04a.png");
  layerB05a = loadImage("assets/layerB05a.png");
  layerB06a = loadImage("assets/layerB06a.png");
  layerB07a = loadImage("assets/layerB07a.png");

  layerB01b = loadImage("assets/layerB01b.png");
  layerB02b = loadImage("assets/layerB02b.png");
  layerB03b = loadImage("assets/layerB03b.png");
  layerB04b = loadImage("assets/layerB04b.png");
  layerB05b = loadImage("assets/layerB05b.png");
  layerB06b = loadImage("assets/layerB06b.png");
  layerB07b = loadImage("assets/layerB07b.png");

  layerB01c = loadImage("assets/layerB01c.png");
  layerB02c = loadImage("assets/layerB02c.png");
  layerB03c = loadImage("assets/layerB03c.png");
  layerB04c = loadImage("assets/layerB04c.png");
  layerB05c = loadImage("assets/layerB05c.png");
  layerB06c = loadImage("assets/layerB06c.png");
  layerB07c = loadImage("assets/layerB07c.png");


  //LayerC
  layerC01 = loadImage("assets/layerC01.png");
  layerC02 = loadImage("assets/layerC02.png");
  layerC03 = loadImage("assets/layerC03.png");
  layerC04 = loadImage("assets/layerC04.png");
  layerC05 = loadImage("assets/layerC05.png");
  layerC06 = loadImage("assets/layerC06.png");
  layerC07 = loadImage("assets/layerC07.png");

  layerC01a = loadImage("assets/layerC01a.png");
  layerC02a = loadImage("assets/layerC02a.png");
  layerC03a = loadImage("assets/layerC03a.png");
  layerC04a = loadImage("assets/layerC04a.png");
  layerC05a = loadImage("assets/layerC05a.png");
  layerC06a = loadImage("assets/layerC06a.png");
  layerC07a = loadImage("assets/layerC07a.png");

  layerC01b = loadImage("assets/layerC01b.png");
  layerC02b = loadImage("assets/layerC02b.png");
  layerC03b = loadImage("assets/layerC03b.png");
  layerC04b = loadImage("assets/layerC04b.png");
  layerC05b = loadImage("assets/layerC05b.png");
  layerC06b = loadImage("assets/layerC06b.png");
  layerC07b = loadImage("assets/layerC07b.png");

  layerC01c = loadImage("assets/layerC01c.png");
  layerC02c = loadImage("assets/layerC02c.png");
  layerC03c = loadImage("assets/layerC03c.png");
  layerC04c = loadImage("assets/layerC04c.png");
  layerC05c = loadImage("assets/layerC05c.png");
  layerC06c = loadImage("assets/layerC06c.png");
  layerC07c = loadImage("assets/layerC07c.png");

  //LayerD
  layerD01 = loadImage("assets/layerD01.png");
  layerD02 = loadImage("assets/layerD02.png");
  layerD03 = loadImage("assets/layerD03.png");
  layerD04 = loadImage("assets/layerD04.png");
  layerD05 = loadImage("assets/layerD05.png");
  layerD06 = loadImage("assets/layerD06.png");
  layerD07 = loadImage("assets/layerD07.png");

  layerD01a = loadImage("assets/layerD01a.png");
  layerD02a = loadImage("assets/layerD02a.png");
  layerD03a = loadImage("assets/layerD03a.png");
  layerD04a = loadImage("assets/layerD04a.png");
  layerD05a = loadImage("assets/layerD05a.png");
  layerD06a = loadImage("assets/layerD06a.png");
  layerD07a = loadImage("assets/layerD07a.png");

  layerD01b = loadImage("assets/layerD01b.png");
  layerD02b = loadImage("assets/layerD02b.png");
  layerD03b = loadImage("assets/layerD03b.png");
  layerD04b = loadImage("assets/layerD04b.png");
  layerD05b = loadImage("assets/layerD05b.png");
  layerD06b = loadImage("assets/layerD06b.png");
  layerD07b = loadImage("assets/layerD07b.png");

  layerD01c = loadImage("assets/layerD01c.png");
  layerD02c = loadImage("assets/layerD02c.png");
  layerD03c = loadImage("assets/layerD03c.png");
  layerD04c = loadImage("assets/layerD04c.png");
  layerD05c = loadImage("assets/layerD05c.png");
  layerD06c = loadImage("assets/layerD06c.png");
  layerD07c = loadImage("assets/layerD07c.png");

  //LayerE
  layerE01 = loadImage("assets/layerE01.png");
  layerE02 = loadImage("assets/layerE02.png");
  layerE03 = loadImage("assets/layerE03.png");
  layerE04 = loadImage("assets/layerE04.png");
  layerE05 = loadImage("assets/layerE05.png");
  layerE06 = loadImage("assets/layerE06.png");
  layerE07 = loadImage("assets/layerE07.png");

  layerE01a = loadImage("assets/layerE01a.png");
  layerE02a = loadImage("assets/layerE02a.png");
  layerE03a = loadImage("assets/layerE03a.png");
  layerE04a = loadImage("assets/layerE04a.png");
  layerE05a = loadImage("assets/layerE05a.png");
  layerE06a = loadImage("assets/layerE06a.png");
  layerE07a = loadImage("assets/layerE07a.png");

  layerE01b = loadImage("assets/layerE01b.png");
  layerE02b = loadImage("assets/layerE02b.png");
  layerE03b = loadImage("assets/layerE03b.png");
  layerE04b = loadImage("assets/layerE04b.png");
  layerE05b = loadImage("assets/layerE05b.png");
  layerE06b = loadImage("assets/layerE06b.png");
  layerE07b = loadImage("assets/layerE07b.png");

  layerE01c = loadImage("assets/layerE01c.png");
  layerE02c = loadImage("assets/layerE02c.png");
  layerE03c = loadImage("assets/layerE03c.png");
  layerE04c = loadImage("assets/layerE04c.png");
  layerE05c = loadImage("assets/layerE05c.png");
  layerE06c = loadImage("assets/layerE06c.png");
  layerE07c = loadImage("assets/layerE07c.png");

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
