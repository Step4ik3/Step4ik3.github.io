function myFunction() {
    var x = document.getElementById("menu__list__mobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    console.log("click works") ;}