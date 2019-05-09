var x = document.getElementById("menu__list__mobile");

function myFunction() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    $("html, body").toggleClass("scroll-hidden");
    console.Logo("click works") ;}
