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
        }, 7000);
    }
}

function galaryF() {
    var xy = x;
    setInterval(function galaryF() {


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
        , 400);

}
function galaryc() {
    var cy = c
    setInterval(function galaryc() {


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
        , 400);
}
function galaryb() {
    var vy = dv
    setInterval(function galaryb() {


        dv = dv + 1;
        if (dv == vy) {
            dv = vy;
        }
        if (lang == "en") {
            document.getElementById("galary4").src = "./imgs/" + dv + ".jpg";
        }
        else {
            document.getElementById("galary4").src = "../imgs/" + dv + ".jpg";
        }

    }
        , 400);


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