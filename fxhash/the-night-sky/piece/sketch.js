// Lomz 2022
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

var inc = 0.1;
var scl = 20;
var cols, rows;
var wh;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var whGrid;
var stars = [];

var mist = [];
var numberOfMist;
var chosenMist;
var angle = Math.floor(fxrand() * 360);

var maskArray = [];
var choosenMask;


function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);  // Define canvas size
  cols = floor(wh / scl);
  rows = floor(wh / scl);
  fr = createP("");

  chosenMist = int(fxrand() * numberOfMist);

  maskArray = [mask4a, mask4b, mask4c, mask4d];
  choosenMask = int(fxrand() * 4);
  console.log(choosenMask);

  whGrid = wh / 8;

  noiseSeed(fxrand() * 1000);

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 600; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

// noise 
function draw() {
  var yoff = 0;

  if (frameCount < 500) {
  // display mask
  image(mask, 0, 0, windowHeight, windowHeight);

    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        stroke(0, 150);
      }
      yoff += inc;

      zoff += 0.0003;
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  }

// Mist
if ( frameCount == 505) {
  push();
  // imageMode(CENTER);
  // rotate(fxrand() * 360);
  
  image(mist[chosenMist], 0, 0, wh, wh);
  pop();
}
  
// Stars

  if (frameCount > 510 && frameCount < 610) {
  numberOfStars = 5; // number of asssets
  for (var i = 0; i < numberOfStars; i++) {
    randomStarPositionX = (fxrand() * wh);
    randomStarPositionX = map(randomStarPositionX, 0, wh, whGrid, wh-whGrid);
    randomStarPositionY = (fxrand() * wh);
    randomStarPositionY = map(randomStarPositionY, 0, wh, whGrid, wh-whGrid);
    stars[i] = [randomStarPositionX,randomStarPositionY];

    // star
    push();
    noStroke();
    fill(255,255,255,fxrand() * 255);
    circle(stars[i][0], stars[i][1], fxrand() * wh/150);
    pop();
    //glow
    glowChance = (fxrand() * 10);
    if (glowChance < .2){
      noStroke();
      fill(255,255,255,20);
      circle(stars[i][0], stars[i][1], (fxrand() * 50 + 10));
      fill(255,255,255,20);
      circle(stars[i][0], stars[i][1], 10);
      fill(255,255,255,30);
      circle(stars[i][0], stars[i][1], 5);
    }
    stroke(255); 
    image(mask4, 0, 0, windowHeight, windowHeight);
  }
}

if (frameCount == 620) {
  image(mask3, 0, 0, windowHeight, windowHeight);
  } 

if (frameCount == 630) {
  image(maskArray[choosenMask], 0, 0, windowHeight, windowHeight);
}

if (frameCount == 640) {
  // test around
  textAlign(CENTER, BOTTOM);
  noStroke(); fill(120);
  textSize(width/80);
  let k=0;
  for (let i=0; i<TWO_PI; i+=PI/12) {
      push();
      translate(cos(i)*width/2.5+width/2, sin(i)*width/2.5+width/2);
      rotate(i-PI/2);
      text ( int(i*(fxrand()*50)) , 0, 0);
      pop();
      k++;
  }
}
}

function preload() {

  mask = loadImage('assets/mask.svg');
  mask2 = loadImage('assets/mask2.svg');
  mask3 = loadImage('assets/mask3.svg');
  mask4 = loadImage('assets/mask4.svg');

  mask4a = loadImage('assets/mask4a.svg');
  mask4b = loadImage('assets/mask4b.svg');
  mask4c = loadImage('assets/mask4c.svg');
  mask4d = loadImage('assets/mask4d.svg');

  // Mist
  numberOfMist = 30;
  for (var i = 0; i < numberOfMist; i++) {
    mist[i] = loadImage("assets/mist" + i + ".svg");
  }
}
