
let numberOfBody;
var body = [];
let randomBody;

let numberOfHead;
var head = [];
let randomHead;


// paper color
let sq_size;
let pg1, pg2;
let tx, ty, rnd;
let paper_color;
let movex = 0;
let movey = 0;
// paper color

//snake length
let snakeLength = 800;
let snakeSeed;

var dens;

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh); // define canvas size
  //background('#E0D3C8');

  snakeSeed = int(fxrand()*1000);
  noiseSeed(snakeSeed);
  console.log('Snake Seed: ' + snakeSeed);

  snakeLength = int(get_random(500, 900));
  console.log('Snake Length: ' + snakeLength);

  pixelDensity(4);
  dens = pixelDensity();

  // paper color
    sq_size = min(windowHeight, windowWidth);
    createCanvas(sq_size, sq_size);
  
    paper_color = color(247, 245, 238);
    pg1 = createGraphics(sq_size*1.2, sq_size*1.2);
    make_paper (pg1, 0, 100);

    background(paper_color);
  
    if (frameCount%10== 0 ) {
      movex = random(-0.2*sq_size, 0);
      movey = random(-0.2*sq_size, 0);
    } 
    image(pg1, movex, movey);
  // paper color

  //choose snake body / head
  randomBody = int(fxrand() * numberOfBody);
  console.log('Snake Body: ' + randomBody);
  randomHead = int(fxrand() * numberOfHead);

  tileSize = wh / 12;
  // Grid
  push();
  for (var y = wh / 12; y < height - wh / 12 - 0.01; y = y + tileSize) {
    for (var x = wh / 12; x < width - wh / 12 - 0.01; x = x + tileSize) {
      noFill();
      stroke(100);
      strokeWeight(.8);
      rect(x, y, tileSize, tileSize);
    }
  }
  pop();
  
  tileSize = wh / 60;
  // Grid
  push();
  for (var y = wh / 12; y < height - wh / 12 - 0.01; y = y + tileSize) {
    for (var x = wh / 12; x < width - wh / 12 - 0.01; x = x + tileSize) {
      noFill();
      stroke(150);
      strokeWeight(.3);
      rect(x, y, tileSize, tileSize);
    }
  }
  pop();
  
  //numbers X
  tileSize = wh / 12;
  var multiplier = int(get_random(2,8));
  var multiplierMem = multiplier;
  for (var x = wh / 12; x < width - wh / 12 - 0.01; x = x + tileSize) {
    textSize(10);
    text(multiplier, x, tileSize-10);
    multiplier = int(multiplier * 1.5);
  }
  
  //numbers Y
  multiplier = multiplierMem;
  for (var y = wh / 12; y < height - wh / 12 - 0.01; y = y + tileSize) {
    textSize(10);
    text(multiplier, tileSize-20, y+8);
    multiplier = int(multiplier * 1.5);
  }

  //snake
  for (var i = 0; i < snakeLength; i++) {
    var xNoise = noise(xStep);
    var yNoise = noise(yStep);

    var r = map(xNoise, 0, 1, 0, width);
    var t = map(yNoise, 0, 1, 0, height);

    //body
    imageMode(CENTER);
    image(body[randomBody], r, t, (body[randomBody].width*xNoise), (body[randomBody].height*xNoise));

    //Ellipse
    push();
    strokeWeight(.4);
    //stroke(11);
    noStroke();
    fill(0,0,0,50);
    ellipse(r, t, (body[randomBody].width*xNoise), (body[randomBody].height*xNoise));
    pop();

    xStep += 0.004;
    yStep += 0.006;
    
    // Save start coordinates
    if ( i == 0) {
      var sR = r;
      var sT = t;
    }
    
    // Save end coordinates
    if ( i == snakeLength - 1) {
      var eR = r;
      var eT = t;
    }
  }
  
  // Text
  push();
    fill(50);
    noStroke();
    textSize(12);
    //ellipse(sR, sT, 5, 5);
    //text('432DFG', sR+10, sT+5);
    //ellipse(eR, eT, 5, 5);
    //text('32DFG4', eR+10, eT+5);
  pop();

  //head
  push();
  imageMode(CORNER);
  image(head[randomBody], eR-(head[randomBody].width*xNoise)+(wh/20), eT-((head[randomBody].height/2)*xNoise)+(wh/130), head[randomBody].width*xNoise, head[randomBody].height*xNoise);
  pop();

//grain
push(); 
  imgGrain = createImage(wh, wh);
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
  imageMode(CORNER);
  image(imgGrain, 0, 0, width, height);
  pop();
//grain

}

var xStep = 0;
var yStep = 0;

function draw() {
  //background(30);
}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("Snake "+int(random(0,1000))+".png");
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

  numberOfBody = 12;
  for (var i = 0; i < numberOfBody; i++) {
    body[i] = loadImage("assets/body" + i + ".png");
  }

  numberOfHead = 12;
  for (var i = 0; i < numberOfHead; i++) {
    head[i] = loadImage("assets/head" + i + ".png");
  }
}

// **************************
// *      paper color       *
// **************************

function make_paper (pg,  x,  y) {
  pg.noStroke();
  tx=x;
  ty=y;
  for (let i=1; i<=pg.width ; i+=5){
    ty=y;
    for (let j=1; j<=pg.height ; j+=5){
      rnd = map(noise(tx, ty), 0, 1, 0, 30);
      pg.fill(red(paper_color)-20, green(paper_color)-20, blue(paper_color)-20, rnd);
      pg.ellipse(i, j, 20, 20);
      ty+=0.05;
    }
    tx+=0.05;
  }

  for (let i=0; i<5000; i++) {
    pg.fill(0, random(2,4));
    pg.ellipse(random(pg.width), random(pg.height), random(3, 5) , random(3, 5));
  }

  for (let i=0; i<300; i++) {
    if (random(1)<0.2) {
      pg.stroke(255,0,0, random(60,125));
    } else {
      pg.stroke(0, random(10,80));
    }
    
    pg.strokeWeight(0.2);
    let alfa = random(0, PI);
    let len = random(5, 20);
    let px = random(pg.width);
    let py= random(pg.height);
    pg.line(px, py, cos(alfa)*len+px, sin(alfa)*len+py);
  }
}
// paper color



