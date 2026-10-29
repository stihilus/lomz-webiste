let chosenCol;
let pallete = [];

function setup() {
  // create canvas
  size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  noLoop(); // we osnly need to draw once

  // Define array of color palettes
  pallete = [
    //     bgd    grass     flowers 1.     2.             3.        4.
    ["#DFDFDB", "#383433", "#323232", "#B4B4B4", "#C8C8C8", "#FFEB3B"], // 0
    ["#ECEBCF", "#383433", "#9C172D", "#E5D04F", "#9C172D", "#9C172D"], // 1
    ["#D0CDB1", "#47382B", "#E0998E", "#79B6A6", "#F3A860", "#79B6A6"], // 2
    ["#B7AA97", "#201F1D", "#EF5346", "#515750", "#333534", "#646157"], // 3
    ["#FCF6E6", "#2E2D2D", "#F86402", "#14589F", "#FCF6E6", "#B7B7B7"], // 4
    ["#EDE4C5", "#27292C", "#717288", "#C29264", "#955539", "#C7463C"], // 5
    ["#F0DAB7", "#081705", "#B2CBAE", "#EEBA45", "#EE381F", "#246AA4"], // 6
    ["#D4C698", "#282828", "#204A32", "#EFEAD6", "#5677C4", "#F0E9D7"], // 7
    ["#ffffff", "#000000", "#000000", "#ffffff", "#000000", "#ffffff"], // 8
    ["#E5E3E1", "#2F2A6A", "#E9E6E6", "#D3BBB6", "#403976", "#D9C3B2"], // 9
    ["#CBD5DB", "#1B2C4F", "#7F98AC", "#55591C", "#EEDE68", "#F1A12B"], // 10
    ["#D7E7E6", "#143C3E", "#D5A787", "#F08A76", "#C4D2BA", "#BA9D9D"], // 11
  ];

  // randomize pallet
  var chosenPall = int(get_random(0, 12));
  console.log("selected pallete: " + chosenPall);

  // set background color
  background(pallete[chosenPall][0]);

  // adjust these values to change the look of the noise
  noiseSeed(get_random(1, 10000000)); // noise seed
  //noiseSeed(99); // noise seed

  let scale = get_random(0.001, 0.005); // the scale of the noise - default 0.005
  console.log("noise: " + scale);
  let octaves = 4; // the number of layers of noise to combine
  let falloff = 0.5; // the rate at which each octave contributes less to the final noise

  // LAYER 2
  // loop through every pixel in the canvas and set its color based on Perlin noise
  for (let y = 0; y < 1; y += 0.005) {
    for (let x = 0; x < 1; x += 0.005) {
      let noiseValue = 0;
      let amplitude = 1;
      let frequency = 3;

      for (let i = 0; i < octaves; i++) {
        noiseValue += noise(x * frequency, y * frequency) * amplitude;
        amplitude *= falloff;
        frequency *= 2;
      }

      let colorValue = map(noiseValue, 0, 1, 0, 158);

      // lines and flowers
      push();
      if (colorValue > 128) {
        stroke(pallete[chosenPall][1]);
        strokeWeight(size/800);

        // flower
        if (get_random(0, 1) < 0.001) {
          // random color from pallet
          chosenCol = int(get_random(1, 6));
          stroke(pallete[chosenPall][chosenCol]);
          var flowerSize = get_random(0, 0.05);
          strokeWeight(flowerSize * size);
        }

        var offset = get_random(-0.01, 0.01); // grass offset
        var grassH = get_random(0, 0.04); // grass heigth
        line(
          x * size - offset * size,
          y * size,
          x * size,
          y * size - grassH * size
        );
      }
      pop();
    }
  }

  //frame
  push();
  noFill();
  stroke(pallete[chosenPall][0]);
  strokeWeight(size / get_random(2.5,8));
  rect(0, 0, width, height);
  pop();

  // texture
  for (let x = 0; x < size; x += size / 200) {
    push();
    stroke(1, 10);
    strokeWeight(size / 700);
    line(x, 0, x, size);
    pop();
  }
}

function draw() {}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == "s" || key == "S") save("Fields by Lomz: " + $fx.hash + ".png");
}

// **************************
// *        Random          *
// **************************

function get_random(min, max) {
  return min + $fx.rand() * (max - min);
}
