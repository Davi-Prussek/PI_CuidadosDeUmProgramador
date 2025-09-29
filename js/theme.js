
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
    header.style.backgroundColor = "rgb(0, 0, 0)";
    subBar.style.backgroundColor = "rgba(0, 0, 0, 1)"
    setaVoltar.style.backgroundColor = "rgb( 0, 0, 0)";
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
    main.style.backgroundColor = "rgba(19, 19, 19, 1)";
    HTML.style.backgroundColor = "rgba(16, 16, 16, 1)";
    section.forEach(s => {s.style.color = "#ffffff";});
    div.forEach(d => { d.style.color = "#ffffff"; });
    div.forEach(d => { d.style.backgroundColor = "black"; });
    p.forEach(p => {p.style.color = "#ffffff"});
    localStorage.setItem("theme", "light");
}

function dark() {
    botaoOff.style.display = "none";
    botaoOn.style.display = "block";
    header.style.backgroundColor = "#0056b3";
    subBar.style.backgroundColor = ""
    setaVoltar.style.backgroundColor = "#0056b3";
    footer.style.background = "linear-gradient( #0057b3c4, #002457)";
    main.style.backgroundColor = "";
    HTML.style.backgroundColor = "";
    section.forEach(s => {s.style.color = "";});
    div.forEach(d => { d.style.color = ""; });
    div.forEach(d => { d.style.backgroundColor = ""; });
    p.forEach(p => {p.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);