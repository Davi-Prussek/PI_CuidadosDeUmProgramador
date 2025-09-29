
const HTML = document.querySelector("html");
const body = document.querySelector("body");

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

const section = document.querySelectorAll("section");
const div = document.querySelectorAll("div");
const p = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const h5 = document.querySelectorAll("h5");
const h6 = document.querySelectorAll("h6");
const span = document.querySelectorAll("span");
const gitIcon = document.querySelectorAll(".icon-git")
const a = document.querySelectorAll(".link-git");
const subBar = document.getElementById("sub-menu-bar");

const setaVoltar = document.getElementById("setaVoltar");

const botaoOff = document.getElementById("themeButtonOff");
const botaoOn = document.getElementById("themeButtonOn")

const ligadoDesligado = document.getElementById("desligado");

window.onload = () => {
    const tema = localStorage.getItem("theme");
    if (tema == "light") {
        light();
    } else {
        dark();
    }
}
const ligaDesliga = () => {
    const atual = localStorage.getItem("theme");
    if (atual == "light") {
        dark();
    } else {
        light();
    }   }   

function light() {
    botaoOn.style.display = "none";
    botaoOff.style.display = "block";

    HTML.style.backgroundColor = "rgba(19, 19, 19, 1)";
    main.style.backgroundColor = "rgba(19, 19, 19, 1)";
    header.style.backgroundColor = "rgb(0, 0, 0)";
    subBar.style.backgroundColor = "rgba(0, 0, 0, 1)"
    body.style.background = "rgba(19, 19, 19, 1)";
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";

    section.forEach(s => { s.style.color = "#ffffff"; });
    div.forEach(d => { d.style.color = "#ffffff"; });
    div.forEach(d => { d.style.backgroundColor = "black"; });

    gitIcon.forEach(gtiICon => { gtiICon.src = "../img/icons/github-brands-solid-full branco.svg" });
    setaVoltar.style.backgroundColor = "rgb(0, 0, 0)";
    h2.forEach(h2 => {h2.style.color = "#ffffff"});
    a.forEach(a => {a.style.color = "white"});

    localStorage.setItem("theme", "light");
}

function dark() {
    botaoOff.style.display = "none";
    botaoOn.style.display = "block";

    header.style.backgroundColor = "#0056b3";
    subBar.style.backgroundColor = ""
    setaVoltar.style.backgroundColor = "#0056b3";
    footer.style.background = "linear-gradient( #0057b3c4, #002457)";
    main.style.backgroundColor = "white";
    HTML.style.backgroundColor = "white";
    section.forEach(s => {s.style.color = "";});
    gitIcon.forEach(gtiICon => {gtiICon.src = "../img/icons/github-brands-solid-full.svg"});
    div.forEach(d => { d.style.color = "black"; });
    div.forEach(d => { d.style.backgroundColor = "white"; });
    h2.forEach(h2 => {h2.style.color = ""});
    body.style.background = "white";
    a.forEach(a => {a.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);