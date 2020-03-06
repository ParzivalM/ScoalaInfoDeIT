//PINS este o variabila globala care memoreaza pretul de inscriptionare
let PINS = 0;

function construiesteOption(atrvalue, nodetext) {
    var z = document.createElement("option");
    z.setAttribute("value", atrvalue);
    var t = document.createTextNode(nodetext);
    z.appendChild(t);
    document.getElementById("marimecadru").appendChild(z);
}

function creeazaMarimi() {
    let categoriecadru=document.getElementById("categoriecadru").value;
    console.log("Categoria cadrului ales este " + categoriecadru);

    let numarlistacadre=document.getElementById("marimecadru").options.length;
    let continutlistacadre=document.getElementById("marimecadru").options;
    console.log("Lista de optiuni contine" + numarlistacadre );
    console.log("Continut lista options" + continutlistacadre);

    while (numarlistacadre>0){
        continutlistacadre.remove(0);
        numarlistacadre--;
        console.log("Sunt In While" + numarlistacadre);
    }

    switch (categoriecadru) {
        case "copil" : //S&M
            /*var z = document.createElement("option");
            z.setAttribute("value", "S");
            var t = document.createTextNode("small");
            z.appendChild(t);
            document.getElementById("marimecadru").appendChild(z);
            z = document.createElement("option");
            z.setAttribute("value", "M");
            t = document.createTextNode("medium");
            z.appendChild(t);
            document.getElementById("marimecadru").appendChild(z);*/
            construiesteOption("S","small");
            construiesteOption("M","medium");
            break;
        case "dama" : //S,M,L
            /*var z = document.createElement("option");
            z.setAttribute("value", "S");
            var t = document.createTextNode("small");
            z.appendChild(t);
            document.getElementById("marimecadru").appendChild(z);
            z = document.createElement("option");
            z.setAttribute("value", "M");
            t = document.createTextNode("medium");
            z.appendChild(t);
            document.getElementById("marimecadru").appendChild(z);
            break;*/
            construiesteOption("S","small");
            construiesteOption("M","medium");
            construiesteOption("L","large");
            break;
        case "barbat" ://M,L,XL,XXL
            construiesteOption("M","medium");
            construiesteOption("L","large");
            construiesteOption("XL","extralarge");
            construiesteOption("XXL","extraextralarge");
            break;
        default : console.log("Nu a fost aleasa o categorie de cadru");

    }





}

function inscriptionare(){
    console.log("Inscriptionare");
    let nrcaractere = document.getElementById("inscriptionare").value.length;
    console.log(nrcaractere);
    let pretinscriptionare = nrcaractere*5;
    console.log(pretinscriptionare+"EUR");
    let textinitial = document.getElementById("pretinscriptionare").innerText;
    document.getElementById("pretinscriptionare").innerText=textinitial+" "+pretinscriptionare;
    PINS=pretinscriptionare;
    console.log("pret inscriptionare din functie" + PINS);

}

//console.log("pret inscriptionare" + PINS);