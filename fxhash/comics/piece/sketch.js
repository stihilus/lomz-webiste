let gridNumX;
let gridNumY;

let xPos;
let yPos;

let rS; // velicina polja
let round;
let sBW; // razmak izmedju polja

let colors = [];
let synthColor;

let wh;

let numberOf2x2;
let numberOf2x1;
let numberOf1x2;
let numberOfS;

let p2x2 = [];
let p2x1 = [];
let p1x2 = [];
let s = [];

let choosen2x2;
let choosen2x1;
let choosen1x2;
let choosenS;

let border;

let pP; // pallete picker
let cP; // color picker

var dens;

function setup() {
  wh = windowHeight;

  pixelDensity(4);
  dens = pixelDensity();

  createCanvas(wh, wh);
  rS = wh / 4; // rect size
  round = wh/200;
  sBW = wh/200; // razmak izmedju tastera


  gridNumX = int(get_random(2, 4));
  gridNumY = int(get_random(2, 4));

  background(255);
  
  
  

    
  // Grid Layer 2
  
  synthColor = int(get_random(0, colors.length));

  push();

  translate(
    (wh / 2) - (rS * gridNumX)/2,
    (wh / 2) - (rS * gridNumY)/2 // 4 ili 6
  );

  for (let x = 0; x < gridNumX; x += 1) {
    for (let y = 0; y < gridNumY; y += 1) {
      
      xPos = x * rS;
      yPos = y * rS;

        

        
        if (fxrand() < .2) {
          push();
          
            choosen1x2 = int(fxrand() * numberOf1x2);
            image(p1x2[choosen1x2], xPos+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);
          
          
            choosen1x2 = int(fxrand() * numberOf1x2);
            image(p1x2[choosen1x2], (xPos+(rS/2))+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);
          
          pop();
        }
      
        else if (fxrand() > .2 && fxrand() < .25) {
          push();
          
            choosen2x1 = int(fxrand() * numberOf2x1);
            image(p2x1[choosen2x1], xPos+sBW, yPos+sBW, rS-sBW, (rS/2)-sBW);
          

            choosen2x1 = int(fxrand() * numberOf2x1);
            image(p2x1[choosen2x1], xPos+sBW,(yPos+(rS/2))+sBW, rS-sBW, (rS/2)-sBW);

          pop();
        }
      
        else {
          push();

              choosen2x2 = int(fxrand() * numberOf2x2);
              image(p2x2[choosen2x2], xPos+sBW, yPos+sBW, rS-sBW, rS-sBW);

              if (fxrand()< 0.5) {
                choosenS = int(fxrand() * numberOfS);
                image(s[choosenS], xPos+sBW, yPos+sBW, rS-sBW, rS-sBW);
              }

          pop();
        }

        // if (x == 0 && y == 0){
        //   image(title, xPos+sBW, yPos+sBW, rS-sBW, rS-sBW);
        // }
      
    }
  }

  //grain
  push();
  
  translate(
    ((wh / 2) - (rS * gridNumX)/2)*-1,
    ((wh / 2) - (rS * gridNumY)/2)*-1 // 4 ili 6
  );
  
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
  tint(255,25);
  image(imgGrain, 0, 0, width, height);
  pop();
}


function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("comic"+int(random(0,1000))+".png");
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

  numberOf2x2 = 28;
    for (var i = 0; i < numberOf2x2; i++) {
      p2x2[i] = loadImage("assets/2x2-" + i + ".png");
    }

    numberOf2x1 = 10;
    for (var i = 0; i < numberOf2x1; i++) {
      p2x1[i] = loadImage("assets/2x1-" + i + ".jpg");
    }

    numberOf1x2 = 13;
    for (var i = 0; i < numberOf1x2; i++) {
      p1x2[i] = loadImage("assets/1x2-" + i + ".jpg");
    }

    numberOfS = 16;
    for (var i = 0; i < numberOfS; i++) {
      s[i] = loadImage("assets/s" + i + ".png");
    }

    title = loadImage("assets/title.png");

}
