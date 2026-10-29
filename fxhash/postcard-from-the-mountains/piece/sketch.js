console.log("Lomz 2022");
console.log("https://www.lomz.net");
// The title of your piece goes here (not visible on hicetnunc)

var numberOfBgd;
var numberOfMountains;

var dens;

var numberOfFields;
var numberOfHouses;
var bgd = [];
var mountains = [];
var fields = [];
var house = [];
var ranBgd;
var ranMountains;
var ranFields;
var ranHouse;

var houseX;

var houseSize;
var houseChange;

var wh;

var heightPosition;

var listMountains;
var listFields;
var listHouses;


function setup() {
  wh = windowHeight;
  console.log("WH: " + wh);
  createCanvas(wh, wh);
  background("#36565B");

  pixelDensity(4);
  dens = pixelDensity();

  randomSeed(fxrand()*1000);

  // random planina
  listMountains = generateMountains();
  console.log(listMountains);

  // random polje
  listFields = generateFields();
  console.log(listFields);

  // random kuce
  listHouses = generateFields();
  console.log(listHouses);



  // pozadina
  ranBgd = int(fxrand() * numberOfBgd);
  image(bgd[ranBgd],0,0,wh,wh);  
  
  heightPosition = get_random(wh/5, wh/50);
  console.log(heightPosition);

  // pocetak crtanja planina
  // brda brda
  
  for (var i = 0; i < 3; i++) {
    image(mountains[listMountains[i]],0,heightPosition,wh,wh);  

    // odredjivanje pozicije sledece planine
    heightPosition = heightPosition + get_random(wh/20, wh/10);
  }

  // pocetak crtanja polja
  heightPosition = heightPosition + get_random(wh/20, wh/10);

  for (var i = 0; i < 4; i++) {
    
    ranHouse = int(fxrand() * numberOfHouses); // random odabir prve kuce
    houseX = map(fxrand(),0,1,0,(wh-(wh/5))); // velicina kuce

    // stampanje polja
    image(fields[listFields[i]],0,heightPosition,wh,wh);  

    // odredjivanje pozicije sledece planine
    heightPosition = heightPosition + get_random(wh/5, wh/15);
  }

  //grain
  imgGrain = createImage(width, height);
  imgGrain.loadPixels();
  for (let i = 0; i < dens * (width * height); i += dens) {
      grc = color(random(255));
      imgGrain.pixels[i] = red(grc);
      imgGrain.pixels[i + 1] = green(grc);
      imgGrain.pixels[i + 2] = blue(grc);
      imgGrain.pixels[i + 3] = alpha(grc);
  }
  imgGrain.updatePixels();
  tint(255,20);
  image(imgGrain, 0, 0, width, height);
  
}

function draw() {}

// **************************
// *    Random no repeat    *
// **************************

function generateMountains() {
  let arrayContainer = [];

  const genNum = int(random(0, numberOfMountains));
  arrayContainer.push(genNum);
  //console.time();
  for (let counter = 1; counter < numberOfMountains; counter++) {
    let newGen = int(random(0, numberOfMountains));
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = int(random(0, numberOfMountains));
    }
    arrayContainer.push(newGen);
  }
  return arrayContainer;
}

function generateFields() {
  let arrayContainer = [];

  const genNum = int(random(0, numberOfFields));
  arrayContainer.push(genNum);
  //console.time();
  for (let counter = 1; counter < numberOfFields; counter++) {
    let newGen = int(random(0, numberOfFields));
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = int(random(0, numberOfFields));
    }
    arrayContainer.push(newGen);
  }
  return arrayContainer;
}

function generateHouses() {
  let arrayContainer = [];

  const genNum = int(random(0, numberOfHouses));
  arrayContainer.push(genNum);
  //console.time();
  for (let counter = 1; counter < numberOfHouses; counter++) {
    let newGen = int(random(0, numberOfHouses));
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = int(random(0, numberOfHouses));
    }
    arrayContainer.push(newGen);
  }
  return arrayContainer;
}

// **************************
// *        Preload         *
// **************************

function preload() {

  numberOfBgd = 8;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/b" + i + ".png");
  }

  numberOfMountains = 11;
  for (var i = 0; i < numberOfMountains; i++) {
    mountains[i] = loadImage("assets/m" + i + ".png");
  }

  numberOfFields = 12;
  for (var i = 0; i < numberOfFields; i++) {
    fields[i] = loadImage("assets/f" + i + ".png");
  }

}

function get_random(min, max) {
  return min + fxrand() * (max - min);
}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("Postcard "+int(random(0,1000))+".png");
}
