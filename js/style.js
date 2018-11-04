function homeClick(i) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("homediv").style = "display: ";
    document.getElementById("Aboutdiv").style = "display:none ";
    document.getElementById("Contactdiv").style = "display:none ";
    document.getElementById("cvdiv").style = "display:none ";


}
function aboutClick(him) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    him.parentNode.classList.add("active");
    document.getElementById("Aboutdiv").style = "display: ";
    document.getElementById("homediv").style = "display:none ";
    document.getElementById("Contactdiv").style = "display:none ";
    document.getElementById("cvdiv").style = "display:none ";
}
function contactClick(her) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    her.parentNode.classList.add("active");
    document.getElementById("Contactdiv").style = "display: ";
    document.getElementById("Aboutdiv").style = "display:none ";
    document.getElementById("homediv").style = "display:none ";
    document.getElementById("cvdiv").style = "display:none ";
}

function cvClick(me) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    me.parentNode.classList.add("active");
    document.getElementById("Contactdiv").style = "display:none ";
    document.getElementById("Aboutdiv").style = "display:none ";
    document.getElementById("homediv").style = "display:none ";
    document.getElementById("cvdiv").style = "display: ";

}
var startCounter = counter;
window.onload = function () {

    if (document.getElementById("imSlider")) {
        //every thing here will be done after the page load

        setInterval(function () {
            //every thing here will be repeated

            counter = counter + 1;
            if (counter == limCounter) {
                counter = startCounter;
            }
            if (lang == "en") {
                document.getElementById("imSlider").style = "background-size: cover ;background-repeat:no-repeat ;height: 100% ;width: 100%;background-image: url('./imgs/" + counter + ".jpg')";
            }
            else {
                document.getElementById("imSlider").style = "background-size: cover ;background-repeat:no-repeat ;height: 100% ;width: 100%;background-image: url('../imgs/" + counter + ".jpg')";
            }
        }, 5000);
    }
}
var damas = true;
var damasInterval;
function galaryF() {
    if (damas) {
        var xy = x;

        damasInterval = setInterval(function galaryF() {


            x = x + 1;
            if (x == xc) {
                x = xy;
            }
            if (lang == "en") {
                document.getElementById("galary2").src = "./imgs/" + x + ".jpg";
            }
            else {
                document.getElementById("galary2").src = "../imgs/" + x + ".jpg";
            }

        }
            , 2500);
        damas = false;
    }
    else {
        clearInterval(damasInterval);
        damas = true;
    }
}
var hamburg = true;
var hamburgInterval;
function galaryc() {
    if (hamburg) {
        var cy = c

        hamburgInterval = setInterval(function galaryc() {


            c = c + 1;
            if (c == cx) {
                c = cy;
            }
            if (lang == "en") {
                document.getElementById("galary3").src = "./imgs/" + c + ".jpg";
            }
            else {
                document.getElementById("galary3").src = "../imgs/" + c + ".jpg";
            }

        }
            , 2500);
        hamburg = false;
    }
    else {
        clearInterval(hamburgInterval);
        hamburg = true;
    }
}
var istanbul = true;
var istanbulInterval;
function galaryb() {
    if (istanbul) {
        var vy = dv
        istanbulInterval = setInterval(function galaryb() {


            dv = dv + 1;
            if (dv == vx) {
                dv = vy;
            }
            if (lang == "en") {
                document.getElementById("galary4").src = "./imgs/" + dv + ".jpg";
            }
            else {
                document.getElementById("galary4").src = "../imgs/" + dv + ".jpg";
            }

        }
            , 2500);
        istanbul = false;
    }
    else {
        clearInterval(istanbulInterval);
        istanbul = true
    }


}





function showmenu() {
    let checkStyle = document.getElementById("mainmenu").getAttribute("style");
    if (checkStyle == "display: block;") {
        document.getElementById("mainmenu").style = "display: none;";
    }
    else {
        document.getElementById("mainmenu").style = "display: block;";
    }
}