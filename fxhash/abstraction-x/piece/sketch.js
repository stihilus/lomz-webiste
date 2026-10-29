// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

var tileSize;
var wh;
var tileNumber;
var numberOfAssets;
var assets = [];
var textures = [];
var tileNumber = [];
var elements = [];
var selectedAsset;
var textureChance;
var shapeChance;
var elementsChance;
var gridChance1;
var gridChance2;

function preload() {
  numberOfAssets = 5; // number of asssets
  for (var i = 0; i < numberOfAssets; i++) {
    assets[i] = loadImage("assets/asset" + i + ".png");
  }

  numberOfAssetsTexture = 4; // number of asssets
  for (var i = 0; i < numberOfAssetsTexture; i++) {
    textures[i] = loadImage("assets/texture" + i + ".png");
  }

}

function setup() {

  wh = windowHeight;
  createCanvas(wh, wh);  // define canvas size
  

  background('#F9F0E8');
  noFill();

  tileNumber = [4,5];
  tileSize = wh / tileNumber[int(fxrand() * tileNumber.length)];

  for (var y = tileSize; y < wh - tileSize - .01; y = y + tileSize) {
      for (var x = tileSize; x < wh - tileSize - .01; x = x + tileSize) {  
          push(); // Start a new drawing state
            //imageMode(CENTER);
            translate(x+tileSize/2,y+tileSize/2);
            rotate((PI/2)*floor(fxrand()*4));

            //shapes
            selectedAsset = int(fxrand() * numberOfAssets);

            shapeChance = (fxrand() * 100);
            
            if (x > 0 || x <= 20) {
            image(assets[selectedAsset], 0, 0, tileSize, tileSize/2);
            }

            else if (x > 21 || x <= 40) {
            image(assets[selectedAsset], 0, 0, tileSize/2, tileSize/2);
            }

            else if (x > 41 || x <= 90) {
              image(assets[selectedAsset], tileSize/2, tileSize/2, tileSize, tileSize);
            }

            else if (x > 91 || x <= 100) {
              image(assets[selectedAsset], 0, 0, tileSize, tileSize);
            }

            //textures
            textureChance = (fxrand() * 100);
            //console.log('Chance to texture: ' + textureChance); 
            if (textureChance < 70) {
            numberOfAssetsTexture = int(fxrand() * numberOfAssetsTexture);
            image(textures[numberOfAssetsTexture], 0, 0, tileSize, tileSize);
            }
          pop(); // Restore original state
          
          //Grid
          stroke(0);
          strokeWeight(1); 
          
          gridChance1 = int((fxrand() * 2)+1);
          gridChance2 = int((fxrand() * 2)+1);
          console.log('chance1:' + gridChance1);
          console.log('chance2:' + gridChance2);
          
          rect(x, y, tileSize/gridChance1, tileSize/gridChance2); 
          
      }
  } 

}

function draw() {
  
}
