// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

var tileSize;
var wh;
var numberOfAssets;
var numberOfAssetsTexture;
var chosenElement;
var chosenTexture;
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
var rectChance;
var colors = [];
var randomColor;
var featuresGrid;

function setup() {

  wh = windowHeight;
  createCanvas(wh, wh);  // Define canvas size
  background('#F9F0E8');

  //shapes colors
  colors = ['#556B67', '#485142', '#5B4F43', '#998374', '#555C6B', '#724C4C', '#72654C', '#58533F'];
  randomColor = int(fxrand() * colors.length);

  noFill();

  tileNumber = [8,9,10];
  tileSize = wh / tileNumber[int(fxrand() * tileNumber.length)];
  
  //Features
  featuresGrid = wh / tileSize;
  console.log('Grid size: ' + featuresGrid); 

  // Chose element
  chosenElement = int(fxrand() * numberOfAssetsElements);
  
  for (var y = tileSize; y < wh - tileSize - .01; y = y + tileSize) {
      for (var x = tileSize; x < wh - tileSize - .01; x = x + tileSize) {  
          push(); // Start a new drawing state
            //imageMode(CENTER);
            translate(x+tileSize/2,y+tileSize/2);
            rotate((PI/2)*floor(fxrand()*4));

            //Textures
            textureChance = (fxrand() * 100);
            if (textureChance < 95) {
              chosenTexture = int(fxrand() * numberOfAssetsTexture);
              image(textures[chosenTexture], 0, 0, tileSize, tileSize);
            }

            // elements
            elementsChance = (fxrand() * 100);
              if (elementsChance < 30) {
                
                image(elements[chosenElement], 0, 0, tileSize, tileSize);
            }
          pop(); // Restore original state
          
          gridChance1 = int((fxrand() * 2)+1);
          gridChance2 = int((fxrand() * 2)+1);
          
          //Shapes background
          noStroke();
          fill('#F9F0E8');
          rect(x, y, tileSize/gridChance1, tileSize/gridChance2,tileSize); 

          //Stroked shapes
          noFill();
          stroke(0);
          strokeWeight(1); 
          gridChance1 = int((fxrand() * 2)+1);
          gridChance2 = int((fxrand() * 2)+1);
          
          rectChance = (fxrand() * 100);
          if (rectChance < 25) {
            rect(x, y, tileSize/gridChance1, tileSize/gridChance2); 
          }  
      }
  } 

}

function draw() {
}


function preload() {

  numberOfAssetsTexture = 4; // number of asssets
  for (var i = 0; i < numberOfAssetsTexture; i++) {
    textures[i] = loadImage("assets/texture" + i + ".png");
  }

  numberOfAssetsElements = 16; // number of asssets
  for (var i = 0; i < numberOfAssetsElements; i++) {
    elements[i] = loadImage("assets/element" + i + ".png");
  }
}
