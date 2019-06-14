var p = document.getElementById('face__text');
var input = document.getElementsByClassName('face1')[0];
input.onclick = function () {
    p.innerHTML = "Das zu verwendende Video muss auf YouTube hochgeladen worden sein. Fügen Sie nun YouTube-Links hinzu, indem Sie nach einem Video suchen oder die URL aus YouTube einfügen.</br> Denis"
};

var p = document.getElementById('face__text');
var input = document.getElementsByClassName('face2')[0];
input.onclick = function () {
    p.innerHTML = "Du bist etwas Besonderes! Und deine Haare sind es auch. Deshalb bedarf es zunächst einer individuellen, auf Dich zugeschnittenen Haaranalyse. So garantieren wir Dir das bestmögliche Ergebnis mit der besten Behandlungsmethode.</br> Alex"
}


var p = document.getElementById('face__text');
var input = document.getElementsByClassName('face3')[0];
input.onclick = function () {
    p.innerHTML = "Die Textzeile steht unter dem Anzeigentitel und animiert den Nutzer, etwas Bestimmtes zu tun. Sie darf bis zu 90 Zeichen umfassen und ist nach dem kurzen bzw. r Textzeile ist von der Webs</br> Michael"
};

var x = document.getElementById("menulist__item__mobile");

function myFunction() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    $("html, body").toggleClass("scroll-hidden");
    console.Logo("click works");
}