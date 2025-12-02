const postura = document.getElementById("postura");
const luzSolar = document.getElementById("luz-solar");
const burnOut = document.getElementById("burn-out");
const telas = document.getElementById("telas");

const buttonPostura = document.getElementById("postura-router");
const buttonLuzSolar = document.getElementById("luz-solar-router");
const buttonBurnOut = document.getElementById("burn-out-router");
const buttonTelas = document.getElementById("telas-router");

postura.style.display = "block";
luzSolar.style.display = "none";
burnOut.style.display = "none";
telas.style.display = "none";

buttonPostura.style.backgroundColor = "#4882bf";
buttonPostura.style.borderRadius = "15px";

function rotas(event) {
 const id = event.currentTarget.id;

    if (id == "postura-router") {
        postura.style.display = "block";
        luzSolar.style.display = "none";
        burnOut.style.display = "none";
        telas.style.display = "none";

    } else if (id == "luz-solar-router") {
        luzSolar.style.display = "block";
        postura.style.display = "none";
        burnOut.style.display = "none";
        telas.style.display = "none";

    } else if (id == "burn-out-router") {
        burnOut.style.display = "block";
        postura.style.display = "none";
        luzSolar.style.display = "none";
        telas.style.display = "none";

    } else if (id == "telas-router") {
        telas.style.display = "block";
        postura.style.display = "none";
        luzSolar.style.display = "none";
        burnOut.style.display = "none";
    }

if (postura.style.display == "block") {
    buttonPostura.style.backgroundColor = "#4882bf";
    buttonPostura.style.borderRadius = "15px";

    buttonLuzSolar.style.backgroundColor = "";
    buttonLuzSolar.style.borderRadius = "";
    buttonBurnOut.style.backgroundColor = "";
    buttonBurnOut.style.borderRadius = "";
    buttonTelas.style.backgroundColor = "";
    buttonTelas.style.borderRadius = "";

} else if (luzSolar.style.display == "block") {
    buttonLuzSolar.style.backgroundColor = "#4882bf";
    buttonLuzSolar.style.borderRadius = "15px";

    buttonPostura.style.backgroundColor = "";
    buttonPostura.style.borderRadius = "";
    buttonBurnOut.style.backgroundColor = "";
    buttonBurnOut.style.borderRadius = "";
    buttonTelas.style.backgroundColor = "";
    buttonTelas.style.borderRadius = "";

} else if (burnOut.style.display == "block") {
    buttonBurnOut.style.backgroundColor = "#4882bf";
    buttonBurnOut.style.borderRadius = "15px";

    buttonPostura.style.backgroundColor = "";
    buttonPostura.style.borderRadius = "";
    buttonLuzSolar.style.backgroundColor = "";
    buttonLuzSolar.style.borderRadius = "";
    buttonTelas.style.backgroundColor = "";
    buttonTelas.style.borderRadius = "";

} else if (telas.style.display == "block") {
    buttonTelas.style.backgroundColor = "#4882bf";
    buttonTelas.style.borderRadius = "15px";

    buttonPostura.style.backgroundColor = "";
    buttonPostura.style.borderRadius = "";
    buttonLuzSolar.style.backgroundColor = "";
    buttonLuzSolar.style.borderRadius = "";
    buttonBurnOut.style.backgroundColor = "";
    buttonBurnOut.style.borderRadius = "";
}

}

buttonPostura.addEventListener("click", rotas);
buttonLuzSolar.addEventListener("click", rotas);
buttonBurnOut.addEventListener("click", rotas);
buttonTelas.addEventListener("click", rotas);