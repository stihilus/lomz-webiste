(() => {
    var g;
    var bgdN = 1 / 7;
    var layerN1 = 1 / 6;
    var layerN2 = 1 / 7;
    var layerN3 = 1 / 5;
    var layerN4 = 1 / 4;
    console.log(fxhash),
        //layer01 - Backgrounds
        console.log(fxrand()),
        
        (document.getElementById("backgrounds").src = "img/" + 
        ((g = fxrand()) < bgdN ? "bgd01.png" 
        : g < bgdN * 2 ? "bgd02.png"
        : g < bgdN * 3 ? "bgd03.png"
        : g < bgdN * 4 ? "bgd04.png"
        : g < bgdN * 5 ? "bgd05.png"
        : g < bgdN * 6 ? "bgd06.png" 
        : "bgd07.png")),

        //layer02
        console.log(fxrand()),
        (document.getElementById("layer01").src = "img/" + 
        ((g = fxrand()) < layerN1 ? "layerA01.png" 
        : g < layerN1 * 2 ? "layerA02.png"
        : g < layerN1 * 3 ? "layerA03.png"
        : g < layerN1 * 4 ? "layerA04.png"
        : g < layerN1 * 5 ? "layerA05.png"
        : "layerA06.png")),

        //layer03
        console.log(fxrand()),
        (document.getElementById("layer02").src = "img/" + 
        ((g = fxrand()) < layerN2 ? "layerB01.png" 
        : g < layerN2 * 2 ? "layerB02.png"
        : g < layerN2 * 3 ? "layerB03.png"
        : g < layerN2 * 4 ? "layerB04.png"
        : g < layerN2 * 5 ? "layerB05.png"
        : g < layerN2 * 6 ? "layerB06.png" 
        : "layerB07.png"));

        //layer04
        console.log(fxrand()),
        (document.getElementById("layer03").src = "img/" + 
        ((g = fxrand()) < layerN3 ? "layerC01.png" 
        : g < layerN3 * 2 ? "layerC02.png"
        : g < layerN3 * 3 ? "layerC03.png"
        : g < layerN3 * 4 ? "layerC04.png"
        : "layerC05.png"));

        //layer05
        console.log(fxrand()),
        (document.getElementById("layer04").src = "img/" + 
        ((g = fxrand()) < layerN4 ? "layerE01.png" 
        : g < layerN4 * 2 ? "layerE02.png"
        : g < layerN4 * 3 ? "layerE03.png"
        : "layerE04.png"));
})();

//COPYRIGHT BY MIHAILO
