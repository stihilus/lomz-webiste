var gdPosition;
var newpositionGD = 240;
var newpositionLD = 240;
var button;
var tileSize;
let fontRegular;
let fontBold;
var wh;

function preload() {
  fontRegular = loadFont('fonts/SpaceGrotesk.ttf');
  fontBold = loadFont('fonts/SpaceGrotesk-SemiBold.ttf');
}

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);  // define canvas size
  background(9,17,86);
  noFill();
  stroke(255);

  // Gradient background
  var gc = [[9, 17, 86],[44, 43, 234],[0, 22, 164],[125, 45, 227],[43, 0, 164],[0, 154, 164],[180, 45, 227],[0, 7, 164],[45, 118, 227]];
  var cc = int(fxrand() * gc.length);
  console.log(cc);
  c1 = color(gc[cc][0], gc[cc][1], gc[cc][2]);
  var cc = int(fxrand() * 3);
  c2 = color(gc[cc][0], gc[cc][1], gc[cc][2]);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  // Map Grid
  tileSize = wh / 10;
  noFill();
  for (var y = wh / 20; y < height - (wh / 20); y = y + tileSize) {
    for (var x = wh / 20; x < width - (wh / 20); x = x + tileSize) {
        stroke(255,255,255,50);
        rect(x, y, tileSize, tileSize);
      }
    }

  // Background Stars
  for (var x = 0; x < 420; x ++) {

    dodatakGD = fxrand() * wh - 200;
    dodatakLD = fxrand() * wh - 200;
    newpositionGD = newpositionGD + dodatakGD;
    newpositionLD = newpositionLD + dodatakLD;

    starSize = fxrand() * (wh/180);
    noStroke();
    fill(255,255,255, fxrand() * 255); 
    ellipse(newpositionGD , newpositionLD , starSize, starSize);
      
    newpositionGD = 230;
    newpositionLD = 230;  
  }

  // Planet name
  textFont(fontBold); // FONT REGULAR ***
  var startName = ["Cass", "Centa", "Dra", "Equu", "Erida", "Forn", "In", "Lac", "Le", "Lep", "Micro", "Mus", "Nor", "Oct", "Ophi"];
  var endName = ["ax", "nus", "leus", "gium", "dra", "rus", "ion", "vo", "asus"];

  fill(255);
  textSize(wh / 15); 
  textAlign(CENTER);
  text(startName[int(fxrand() * startName.length)] + endName[int(fxrand() * endName.length)], wh/2, wh - (wh / 5.5));
  
  // Grid Info X
  textSize(wh / 60);
  var brojX = int(fxrand()*1000);
  for (var y = wh / 16; y < height - (wh / 20); y = y + tileSize) {
    text(brojX, wh /36, y);
    brojX = brojX + 1;
  }

  // Grid Info Y
  var brojY = int(fxrand()*1000);
  for (var x = wh / 16; x < height - (wh / 20); x = x + tileSize) {
    text(brojY, x, wh /25);
    brojY = brojY + 1;
  }

  // Circuit frame
  stroke(255);
  strokeWeight(3);
  fill(9,17,86,100);
  ellipse(wh /2 ,wh/2.31, wh - (wh / 2.5), wh - (wh / 2.5));
  strokeWeight(1);
  ellipse(wh /2 ,wh/2.31, wh - (wh / 2.3), wh - (wh / 2.3));


  // Constellation
  var minPosition = wh / 3.5;
  var maxPosition = wh - (wh /2.5);
  var krug1x = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug1y = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug2x = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug2y = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug3x = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug3y = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug4x = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug4y = map(fxrand(), 0, 1, minPosition, maxPosition);

  // crtanje repa
  var krug5x = map(fxrand(), 0, 1, minPosition, maxPosition);
  var krug5y = map(fxrand(), 0, 1, minPosition, maxPosition);
  
  // planet nama position X, Y
  var pnpx = wh / 80;
  var pnpy = wh / 200;

  textFont(fontRegular); // FONT REGULAR ***

  var starNameStart = ["Cass", "Centa", "Dra", "Equu", "Erida", "Forn", "In", "Lac", "Le", "Lep", "Micro", "Mus", "Nor", "Oct", "Ophi"];
  var starNameEnd = ["ax", "nus", "leus", "gium", "dra", "rus", "ion", "vo", "asus"];
  
  fill(255);
  //textFont(fontRegular);
  textSize(15); 
  textAlign(LEFT);
  noStroke();
  text(starNameStart[int(fxrand() * starNameStart.length)] + starNameEnd[int(fxrand() * starNameEnd.length)], krug1x + pnpx, krug1y + pnpy);
  
  stroke(255);
  ellipse(krug1x , krug1y , 10, 10); // elipsa sa koortinatama pocetka linije
  stroke(255,255,255,80);
  line(krug1x, krug1y, krug2x, krug2y); // (x1,y1, x2,y2) dve kordinate za pocak linije i za kraj
  ellipse(krug2x , krug2y , 10, 10); // elipsa sa koortinatama kraja linije
  text(starNameStart[int(fxrand() * starNameStart.length)] + starNameEnd[int(fxrand() * starNameEnd.length)], krug2x + pnpx, krug2y + pnpy);

  line(krug2x, krug2y, krug3x, krug3y); // (x1,y1, x2,y2) dve kordinate za pocak linije i za kraj

  ellipse(krug3x , krug3y , 10, 10); // elipsa sa koortinatama pocetka linije
  text(starNameStart[int(fxrand() * starNameStart.length)] + starNameEnd[int(fxrand() * starNameEnd.length)], krug3x + pnpx, krug3y + pnpy);
  stroke(255,255,255,80);
  line(krug3x, krug3y, krug4x, krug4y); // (x1,y1, x2,y2) dve kordinate za pocak linije i za kraj
  ellipse(krug4x , krug4y , 10, 10); // elipsa sa koortinatama kraja linije
  text(starNameStart[int(fxrand() * starNameStart.length)] + starNameEnd[int(fxrand() * starNameEnd.length)], krug4x + pnpx, krug4y + pnpy);

  line(krug1x, krug1y, krug4x, krug4y); // (x1,y1, x2,y2) dve kordinate za pocak linije i za kraj

  // crtanje repa
  stroke(255,255,255,80);
  line(krug1x, krug1y, krug5x, krug5y); // (x1,y1, x2,y2) dve kordinate za pocak linije i za kraj
  ellipse(krug5x , krug5y , 10, 10); // elipsa sa koortinatama kraja linije
  text(starNameStart[int(fxrand() * starNameStart.length)] + starNameEnd[int(fxrand() * starNameEnd.length)], krug5x + pnpx, krug5y + pnpy);

  // Constellation Info
  textAlign(CENTER);
  text("Size: " + int(fxrand()*100000) + " zr³ | Location: " + (brojX - 5) + " : " + (brojY - 5), wh/2, wh - (wh / 7));
  var elements = ["Rf","U","Pa","Th","Pm","Nd","Pr","Ce","Sg","H", "Li", "Na", "Sc", "Nb", "Cr", "Ta", "Re", "Tc", "Cr"];
  text("Suns: " + int(fxrand()*5) + " | Elements: " + random(elements) + ", " + random(elements) + ", "+ random(elements) + ", " + random(elements), wh/2, wh - (wh / 8.6));
  var DiscovererFirst = ["Harlan ", "Elena ","Guinevere ", "Celia ", "Piers ", "Sidney ", "Roger ", "Josephine ", "Frederick ", "Jenson ", "Beata ", "Gina ", "Rosa ", "Gardner ", "Eda ", "Fletcher ", "Ingram ", "Brooke ", "Jeff "];
  var DiscovererLast = ["Jordan", "Paul", "Chandler", "Andrus", "Erickson", "Gray", "Vasquez", "Clayton", "Gregory", "Blanton", "Geis", "Neel", "Schuman", "Mcgee", "Hale", "Howard"];

  text("Discoverer: " + random(DiscovererFirst) + random(DiscovererLast), wh/2, wh - (wh / 11.5));
  
}

function draw() {
  
}
