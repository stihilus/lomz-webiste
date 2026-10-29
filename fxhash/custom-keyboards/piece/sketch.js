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
let numberOf1x1;
let numberOf2x1;
let numberOf1x2;

let p2x2 = [];
let p1x1 = [];
let p2x1 = [];
let p1x2 = [];

let choosen2x2;
let choosen1x1;
let choosen2x1;
let choosen1x2;

let kName = [];
let kOznaka = [];
let kBroj = [];

let kN;
let kO;
let kB;

let ch = 0.8; // sansa za fill-ovana polja
let ch2 = 1; // sansa za stroke-ovana polja

let border;

let pP; // pallete picker
let cP; // color picker

function setup() {
  wh = windowHeight;
  createCanvas(wh, wh);
  rS = wh / 6; // rect size
  round = wh/200;
  sBW = wh/200; // razmak izmedju tastera

  
  
          // bgd[0]   podloga[1] top[2]   tasteri[3-7]
  colors = [['#FFF7E5','#DECBA7','#ECDEC4','#7f7340', '#c6b28d', '#bb8642', '#914532', '#684546','#ECDEC4','#ECDEC4','#ECDEC4','#ECDEC4'],
           ['#636363','#A1A1A1','#D3D3D3','#00a8c6', '#40c0cb', '#f9f2e7', '#aee239', '#8fbe00','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3'],
           ['#ffffff','#EBEBEB','#F1F1F1','#FF9900', '#0075FF', '#C9C9C9', '#C9C9C9', '#C9C9C9','#C9C9C9','#C9C9C9','#C9C9C9','#C9C9C9'],
           ['#5A5A5A','#282828','#343434','#FFD600', '#D43D3D', '#636363', '#636363', '#636363','#636363','#C9C9C9','#C9C9C9','#C9C9C9'],
           ['#242424','#C5C5C5','#E7E7E7','#FFFFFF', '#FFC700', '#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF'],
           ['#BDBDBD','#DDDDDD','#F1F1F1','#C9C9C9', '#EA803B', '#F9E869', '#C9C9C9', '#C9C9C9','#F1F1F1','#F1F1F1','#F1F1F1','#F1F1F1']];

  kName = ['Huka','Dragon','Moon', 'Key', 'Magic', 'Hako'];
  kOznaka = ['B:','PG-','G-','Ro', 'Gx', 'Fx:','R:'];
  kBroj = ['20','30','40','50','60','70','80','90','100',"41","MAX"];

  kN = int(get_random(0, kName.length));
  kO = int(get_random(0, kOznaka.length));
  kB = int(get_random(0, kBroj.length));
  
  pP = int(get_random(0, 6));
  console.log("palette: " + pP);
  cP = int(get_random(3, 12));
  console.log("color: " + cP);
  

  
  synthColor = int(get_random(0, colors.length));
  console.log(synthColor);
  console.log(colors[synthColor]);
  
  gridNumX = int(get_random(2, 5));
  gridNumY = int(get_random(2, 5));

  background(colors[pP][0]);
  
  translate(
    (wh / 2) - (rS * gridNumX)/2,
    (wh / 2) - (rS * gridNumY)/2 // 4 ili 6
  );
  
  // podloga
  push();
  
    //rectMode(CENTER);
    border = wh/100;
    noStroke();
    fill(colors[pP][1]);
    rect(-(border),-(border),(rS * gridNumX)+(border*2),(rS * gridNumY)+(wh/20)+(border*2),round*2);
    fill(colors[pP][2]);
    rect(-(border),-(border),(rS * gridNumX)+(border*2),(rS * gridNumY)+(border*2),round*2);
    
  pop();
    
  // Grid Layer 2
  
  synthColor = int(get_random(0, colors.length));

  push();
  for (let x = 0; x < gridNumX; x += 1) {
    for (let y = 0; y < gridNumY; y += 1) {
      
      xPos = x * rS;
      yPos = y * rS;
      
        //noFill();
        stroke('#282828');

        //synthColor = int(get_random(0, colors.length));
        cP = int(get_random(3, 12));
        fill(colors[pP][cP]);
        
        if (fxrand() < .3) {
          if (fxrand() < ch2) {
            rect(xPos+sBW, yPos+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
            choosen1x1 = int(fxrand() * numberOf1x1);
            image(p1x1[choosen1x1], xPos+sBW, yPos+sBW, (rS/2)-sBW, (rS/2)-sBW);
          }
          if (fxrand() < ch2) {
            rect((xPos+(rS/2)+sBW), yPos+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
            choosen1x1 = int(fxrand() * numberOf1x1);
            image(p1x1[choosen1x1], (xPos+(rS/2)+sBW), yPos+sBW, (rS/2)-sBW, (rS/2)-sBW);
          }
          if (fxrand() < ch2) {
            rect((xPos+(rS/2)+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
            choosen1x1 = int(fxrand() * numberOf1x1);
            image(p1x1[choosen1x1], (xPos+(rS/2)+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW);
          }
          if (fxrand() < ch2) {
            rect((xPos+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round); 
            choosen1x1 = int(fxrand() * numberOf1x1);
            image(p1x1[choosen1x1], (xPos+sBW), (yPos+(rS/2))+sBW, (rS/2)-sBW, (rS/2)-sBW, round);
          }
        }
        else if (fxrand() > .3 && fxrand() < .5) {
          push();
          if (fxrand() < ch2) {
            rect(xPos+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW, round);
            choosen1x2 = int(fxrand() * numberOf1x2);
            image(p1x2[choosen1x2], xPos+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);
          }
          if (fxrand() < ch2) {
            rect((xPos+(rS/2))+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW, round);
            choosen1x2 = int(fxrand() * numberOf1x2);
            image(p1x2[choosen1x2], (xPos+(rS/2))+sBW, yPos+sBW, (rS/2)-sBW, rS-sBW);
          }
          pop();
        }
      
        else if (fxrand() > .5 && fxrand() < .7) {
          push();
          if (fxrand() < ch2) {
            rect(xPos+sBW, yPos+sBW, rS-sBW, (rS/2)-sBW, round);
            choosen2x1 = int(fxrand() * numberOf2x1);
            image(p2x1[choosen2x1], xPos+sBW, yPos+sBW, rS-sBW, (rS/2)-sBW);
          }
          if (fxrand() < ch2) {
            rect(xPos+sBW,(yPos+(rS/2))+sBW, rS-sBW, (rS/2)-sBW, round);
            choosen2x1 = int(fxrand() * numberOf2x1);
            image(p2x1[choosen2x1], xPos+sBW,(yPos+(rS/2))+sBW, rS-sBW, (rS/2)-sBW);
          }
          pop();
        }
      
        else {
          push();
          if (fxrand() < 1) {
            
              rect(xPos+sBW, yPos+sBW, rS-sBW, rS-sBW, round);
              choosen2x2 = int(fxrand() * numberOf2x2);
              image(p2x2[choosen2x2], xPos+sBW, yPos+sBW, rS-sBW, rS-sBW);
            
          }
          pop();
        }
      
    }
  }
  pop();

  push();
  textFont(myFont);
  fill(60);
  textSize(wh/30);
  textAlign(RIGHT);

  text(kName[kN] + ' ' + kOznaka[kO] + kBroj[kB], rS*gridNumX, (rS*gridNumY)+(wh/22));
  pop();
}

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("Keyboard "+int(random(0,1000))+".png");
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

  numberOf2x2 = 6;
    for (var i = 0; i < numberOf2x2; i++) {
      p2x2[i] = loadImage("assets/2x2-" + i + ".svg");
    }

    numberOf1x1 = 22;
    for (var i = 0; i < numberOf1x1; i++) {
      p1x1[i] = loadImage("assets/1x1-" + i + ".svg");
    }

    numberOf2x1 = 10;
    for (var i = 0; i < numberOf2x1; i++) {
      p2x1[i] = loadImage("assets/2x1-" + i + ".svg");
    }

    numberOf1x2 = 10;
    for (var i = 0; i < numberOf1x2; i++) {
      p1x2[i] = loadImage("assets/1x2-" + i + ".svg");
    }

    myFont = loadFont('fonts/SpaceGrotesk.ttf');

     

    // numberOfBgd = 5;
    // for (var i = 0; i < numberOfBgd; i++) {
    //   bgd[i] = loadImage("assets/bgd" + i + ".svg");
    // }

}
