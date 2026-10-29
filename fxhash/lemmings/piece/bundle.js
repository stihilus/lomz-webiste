(() => {
    var g;
    var bgdN = 1 / 5;
    var layerN1 = 1 / 5;
    var layerN2 = 1 / 7;
    var layerN3 = 1 / 5;
    var layerN4 = 1 / 6;
    var layerN5 = 1 / 5;
    var layerN6 = 1 / 5;
    var layerN7 = 1 / 5;
    var layerN8 = 1 / 5;
    var layerN9 = 1 / 5;
    console.log(fxhash),
        //layer01 - Backgrounds
        console.log(fxrand()),
        
        (document.getElementById("bgd").src = "img/" + 
        ((g = fxrand()) < bgdN ? "bgd01.png" 
        : g < bgdN * 2 ? "bgd02.png"
        : g < bgdN * 3 ? "bgd03.png"
        : g < bgdN * 4 ? "bgd04.png"
        : "bgd05.png")),

        //layer02
        console.log(fxrand()),
        (document.getElementById("krila").src = "img/" + 
        ((g = fxrand()) < layerN1 ? "Krila01.png" 
        : g < layerN1 * 2 ? "Krila02.png"
        : g < layerN1 * 3 ? "Krila03.png"
        : g < layerN1 * 4 ? "Krila04.png"
        : "Krila05.png")),

        //layer03
        console.log(fxrand()),
        (document.getElementById("usi").src = "img/" + 
        ((g = fxrand()) < layerN2 ? "Usi01.png" 
        : g < layerN2 * 2 ? "Usi02.png"
        : g < layerN2 * 3 ? "Usi03.png"
        : g < layerN2 * 4 ? "Usi04.png"
        : "Usi05.png"));

        //layer04
        console.log(fxrand()),
        (document.getElementById("rep").src = "img/" + 
        ((g = fxrand()) < layerN3 ? "Rep01.png" 
        : g < layerN3 * 2 ? "Rep02.png"
        : g < layerN3 * 3 ? "Rep03.png"
        : g < layerN3 * 4 ? "Rep04.png"
        : "Rep05.png"));

        //layer05
        console.log(fxrand()),
        (document.getElementById("telo").src = "img/" + 
        ((g = fxrand()) < layerN4 ? "Telo01.png" 
        : g < layerN4 * 2 ? "Telo02.png"
        : g < layerN4 * 3 ? "Telo03.png"
        : g < layerN4 * 4 ? "Telo04.png"
        : g < layerN4 * 5 ? "Telo05.png"
        : "Telo06.png"));

        //layer06
        console.log(fxrand()),
        (document.getElementById("sara").src = "img/" + 
        ((g = fxrand()) < layerN5 ? "Sara01.png" 
        : g < layerN5 * 2 ? "Sara02.png"
        : g < layerN5 * 3 ? "Sara03.png"
        : g < layerN5 * 4 ? "Sara04.png"
        : "Sara05.png"));

        //layer07
        console.log(fxrand()),
        (document.getElementById("glava").src = "img/" + 
        ((g = fxrand()) < layerN6 ? "Glava01.png" 
        : g < layerN6 * 2 ? "Glava02.png"
        : g < layerN6 * 3 ? "Glava03.png"
        : g < layerN6 * 4 ? "Glava04.png"
        : "Glava05.png"));

        //layer08
        console.log(fxrand()),
        (document.getElementById("nos").src = "img/" + 
        ((g = fxrand()) < layerN7 ? "Nos01.png" 
        : g < layerN7 * 2 ? "Nos02.png"
        : g < layerN7 * 3 ? "Nos03.png"
        : g < layerN7 * 4 ? "Nos04.png"
        : "Nos05.png"));

        //layer09
        console.log(fxrand()),
        (document.getElementById("oci").src = "img/" + 
        ((g = fxrand()) < layerN8 ? "Oci01.png" 
        : g < layerN8 * 2 ? "Oci02.png"
        : g < layerN8 * 3 ? "Oci03.png"
        : g < layerN8 * 4 ? "Oci04.png"
        : "Oci05.png"));
        
        //layer10
        console.log(fxrand()),
        (document.getElementById("sape").src = "img/" + 
        ((g = fxrand()) < layerN9 ? "Sape01.png" 
        : g < layerN9 * 2 ? "Sape02.png"
        : g < layerN9 * 3 ? "Sape03.png"
        : g < layerN9 * 4 ? "Sape04.png"
        : "Sape05.png"));
})();

//COPYRIGHT BY MIHAILO
