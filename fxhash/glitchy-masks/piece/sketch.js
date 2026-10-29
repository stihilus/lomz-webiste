let wh;
// Declare variables for canvas dimensions and geometric shape position
let rectX, rectY;
// Create array to hold color palettes
let pallete = [];
let chosenPall,
  chosenCol,
  copyFromX,
  copyFromY,
  copySize,
  copyToX,
  copyToY,
  copyMove,
  rectSize,
  glitchLineLenght;

//counter variable for limiting number of shapes drawn on canvas
var counter = 0;

function setup() {
  size = min(windowWidth, windowHeight);
  createCanvas(size, size);

  // console.log("fx:" + fxrand());
  console.log(fxhash);

  // Define array of color palettes
  pallete = [
    ["#323232", "#323232", "#969696", "#B4B4B4", "#C8C8C8", "#C14D32"],
    ["#000000", "#000000", "#DFF5FF", "#DFE2FF", "#0029D3", "#0029D3"],
    ["#323232", "#323232", "#8C7DB6", "#12B77B", "#4674B7", "#8C7DB6"],
    ["#323232", "#323232", "#F8F8F8", "#B69D73", "#F8F8F8", "#B69D73"],
    ["#171717", "#171717", "#FFFFFF", "#EDEDED", "#444444", "#C82A3D"],
    ["#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#000000"],
    ["#19150C", "#19150C", "#5E94C3", "#EEEBE4", "#EEEBE4", "#F46559"],
    ["#0C0821", "#0C0821", "#095B4F", "#F4A0B0", "#E7E8E0", "#F63B32"],
    ["#FFF1DD", "#336D61", "#013B2F", "#013B2F", "#00271B", "#F89792"],
    ["#19150C", "#0035C2", "#ffffff", "#0071FE", "#0071FE", "#FF4A13"],
    ["#000000", "#77552F", "#182280", "#E0D6CC", "#E0D6CC", "#77552F"],
    ["#2E2E2E", "#2E2E2E", "#767DBE", "#C6A841", "#9EBBAD", "#EB7A52"],
    ["#1D1C1C", "#1D1C1C", "#B98CF1", "#828163", "#E2E0E1", "#B98CF1"],
    ["#0F1E19", "#0F1E19", "#E0D6AA", "#E4AC44", "#356F53", "#D26241"],
    ["#070002", "#070002", "#E8E3CC", "#B0BEB9", "#5F6D5D", "#CA4E33"],
    ["#141F22", "#141F22", "#D6D2C1", "#E6E6E6", "#A2B8BB", "#DEF44F"],
    ["#090909", "#313C3C", "#F2ECE6", "#C1B197", "#8EA182", "#A5B1C5"],
  ];

  // random pallet selection
  chosenPall = int(get_random(0, 17));

  background(pallete[chosenPall][0]);
  changeBackground(pallete[chosenPall][0]);
  // Copy size
  //copySize =  get_random( size / 3, size / 6)); //px
  // ako se ne varam ovo je obrnuto, 1/6 je manje od 1/3 
  copySize = get_random( 0.16,  0.33);
}


function changeBackground(color) {
  document.body.style.backgroundColor = color;
}


function draw() {
  // Draw rect in center
  if (counter < 30) {
    for (i = 0; i < 20; i++) {
      push();
      noStroke();
      rectMode(CENTER);

      rectX = get_random(0.25, 0.75);
      rectY = get_random(0.25, 0.75);
      rectSize = get_random(0.002, 0.05);

      // random color from pallet
      chosenCol = int(get_random(0, 6));
      fill(pallete[chosenPall][chosenCol]);

      rect(rectX*size, rectY*size, rectSize*size, rectSize*size);
      pop();
    }
    counter++;
  }

  // COPY
  // Copy size
  copySize = get_random( 0.1 ,  0.2);

  if (counter >= 30) {
     
    // Set copy from location
    copyFromX =  get_random(0.47, 0.53);
    copyFromY =  get_random(0.43, 0.57);
    // Set copy to location
    copyToX = get_random(0.47, 0.53);
    copyToY = get_random(0.47, 0.53);
    // space between copy
    copyMove = get_random(0.002, 0.005) ;

    //Downstairs
    for (i = 0; i < 10; i++) {
      glitchLineLenght = int(get_random(30, 50));
      for (i = 0; i < glitchLineLenght; i++) {
        push();
        copy(
          copyFromX*size,
          copyFromY*size,
          copySize*size,
          copySize*size,
          copyToX*size + (i * -copyMove*size)  - copySize*size,
          copyToY*size + i * copyMove*size,
          copySize*size,
          copySize*size
        );
        pop();
      }
    }

   
    //Upstairs
    for (i = 0; i < 10; i++) {
      glitchLineLenght = int(get_random(50, 80));
      for (i = 0; i < glitchLineLenght; i++) {
        push();
        copy(
          copyFromX*size,
          copyFromY*size,
          copySize*size,
          copySize*size,
          copyToX*size + (i * -copyMove*size)  - copySize*size,
          copyToY*size + i * -copyMove*size,
          copySize*size,
          copySize*size
        );
        pop();
      }
    }
    
     //Left
    for (i = 0; i < 10; i++) {
      glitchLineLenght = int(get_random(30, 70));
      for (i = 0; i < glitchLineLenght; i++) {
        push();
        copy(
          copyFromX*size,
          copyFromY*size,
          copySize*size,
          copySize*size,
          copyToX*size + (i * -copyMove*size)  - copySize*size,
          copyToY*size,
          copySize*size,
          copySize*size
        );
        pop();
      }
    }

   //counter
   counter++;
    
    // noLoop and eyes
    if (counter == 32) {
      
      // eyes
      push();
      rectMode(CENTER);
      translate(size/3, size/2);
      rotate(PI / 4);
      noStroke();
      fill(pallete[chosenPall][0]);
      rect(0, 0, size/8, size/8);
      pop();
      
      push();
      rectMode(CENTER);
      translate(width / 3, height / get_random(1.9,2.1));
      rotate(PI / 4);
      noStroke();
      fill(pallete[chosenPall][5]);
      rect(0, 0, size / get_random(15,20), size / get_random(15,20));
      pop();

      noLoop();
      console.log("Finish");

    }
 
 
    // Flip
    push();
    scale(-1, 1);
    copy(0, 0, size / 2, size, -size, 0, size / 2, size);
    pop();
    // End flip
   
  }

}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == "s" || key == "S") save("Title" + int(random(0, 1000)) + ".png");
}

// **************************
// *        Random          *
// **************************

function get_random(min, max) {
  return min + fxrand() * (max - min);
}
