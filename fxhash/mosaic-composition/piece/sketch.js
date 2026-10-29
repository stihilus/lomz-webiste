console.log('Lomz 2022');
console.log('https://www.lomz.net');

let wh;

let copyFromX;
let copyFromY;

let tilesize;
let tileSizeX;
let tileSizeY;

let numberOfBgd;
var bgd = [];
let randomBgd;

let numberOfFrame;
var frame = [];
let randomFrame;

let numberOfTiles;

let c;


function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);

  pixelDensity(4);
  dens = pixelDensity();
  
  background(0);

  randomBgd = int(get_random(0, numberOfBgd));
  //randomBgd = 6;
  randomFrame = int(get_random(0, numberOfFrame));

  console.log(randomBgd);

  tilesize = wh / get_random(20, 30);
  //tilesize = wh / 30;
  tileSizeX = tilesize / 2;
  tileSizeY = tilesize;

  numberOfTiles = wh / tilesize;
  console.log(numberOfTiles);
  console.log(fxrand());


  copyFromX = get_random(0, bgd[randomBgd].width);
  copyFromY = get_random(0, bgd[randomBgd].height);

  // layer 01
  for (var y = 0; y < height; y = y + tileSizeY) {
    for (var x = 0; x < width; x = x + tileSizeX) {
      copy(bgd[randomBgd], copyFromX, copyFromY, tileSizeX, tileSizeY, x, y, tileSizeX, tileSizeY);

      if (fxrand() < 0.05) {
        copyFromX = int(get_random(0, bgd[randomBgd].width));
        copyFromY = int(get_random(0, bgd[randomBgd].height));
      }
    }
  }
  
  //frame
  image(frame[randomFrame], 0, 0, wh, wh);

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
  tint(255,30);
  image(imgGrain, 0, 0, width, height);
  
}

function draw() {

}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("Glitch "+int(random(0,1000))+".png");
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

  numberOfBgd = 10;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/bgd" + i + ".png");
  }

  numberOfFrame = 7;
  for (var i = 0; i < numberOfFrame; i++) {
    frame[i] = loadImage("assets/frame" + i + ".png");
  }
}
