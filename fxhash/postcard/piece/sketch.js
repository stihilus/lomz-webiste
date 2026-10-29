var numberOfHouses;
var numberOfFields;
var numberOfBgd;

var houses = [];
var fields = [];
var bgd = [];

var wh;
var ranHouse; // random kuca
var ranFields;
var ranExtras;
var ranBgd;
var spaceBwhouses; // razmak izmedju kuca
var hR; // hR houseResizer
var vBloka; // visina bloka
var mnozilac;

var magla;

function setup() {
  wh = windowHeight;
  mnozilac = height;
  console.log("WH: " + wh);
  createCanvas(wh, wh);
  background("#C5D9D2");

  hR = 0.5; // hR houseResizer
  //let m = map(value, 0, 100, 0, width);
  hR = map(mnozilac, 0, height, 0.20, 0); // map za skaliranje kuca u odnosu na velicinu ekrana
  
  //hR = mnozilac;
  console.log("hR: " + hR);

  //magla
  magla = get_random(0, 10);

  spaceBwhouses = get_random(wh / 10, wh / 1.2); // razmak izmedju kuca po X
  ranHouse = int(fxrand() * numberOfHouses); // biranje random kuce iz niza
  ranFields = int(fxrand() * numberOfFields);
  ranBgd = int(fxrand() * numberOfBgd);

  vBloka = 0;

  image(bgd[ranBgd],0,0,wh,wh);  // pozadina

  for (var i = 0; i < get_random(10, 20); i++) { // broj redova
    // polja
      if (i == 0) {
        // stampanje prvog polja odmah nakon prvog reda kuca
        image(fields[ranFields],0,wh / 5 + vBloka,wh,wh); 
      }
    
    for (var x = 0; x < 5; x++) { // broj kuca u redu

      // kuce
      image(
        houses[ranHouse], // stampanje random kuce iz niza
        spaceBwhouses, // X - razmak izmedju kuca, ujedno i pocetak crtanja po X osi
        wh / 4 - houses[ranHouse].height * hR + vBloka, // Y - pozicioniranje kuca na wh/2 i da se poravnaju
        houses[ranHouse].width * hR, // sirina kuce
        houses[ranHouse].height * hR // visina kuce
      );

      //polja
      //stampanje ostalih polja
      if (fxrand() < 0.2) { // sansa da se pojavi polje
        image(fields[ranFields],0,wh / 2.4  + vBloka,wh,wh);
        ranFields = int(fxrand() * numberOfFields); // biranje random sledeceg polja
      }
      
      spaceBwhouses = spaceBwhouses + houses[ranHouse].width * hR - wh / get_random(10, 50);
      ranHouse = int(fxrand() * numberOfHouses); // biranje sledece random kuce iz niza
    }

    //Magla
    push();
    fill(230, 195,155, magla);
    //fill(197, 217,210, magla);
    //rect(0, 0,wh,wh);
    pop();

    vBloka = vBloka + (houses[ranHouse].height * hR) / 3; // ordjivanje visine redova
    spaceBwhouses = get_random(wh / 20, wh / 2); // resetovanje pocetka crtanja kuca u svakom redu
    hR = hR * 1.065; // povecavanje kuca sto su blize kameri
  }
}

function draw() {}

function preload() {
  numberOfHouses = 26;
  for (var i = 0; i < numberOfHouses; i++) {
    houses[i] = loadImage("assets/h" + i + ".png");
  }

  numberOfFields = 11;
  for (var i = 0; i < numberOfFields; i++) {
    fields[i] = loadImage("assets/f" + i + ".png");
  }

  numberOfBgd = 4;
  for (var i = 0; i < numberOfBgd; i++) {
    bgd[i] = loadImage("assets/b" + i + ".png");
  }

}

function get_random(min, max) {
  return min + fxrand() * (max - min);
}

// **************************
// *       Save png         *
// **************************

function keyTyped() {
  if (key == 's' || key == 'S') save("Postcard "+int(random(0,1000))+".png");
}
