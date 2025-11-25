
const HTML = document.querySelector("html");
const body = document.querySelector("body");

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

const titulo = document.getElementById("segundo-titulo");

const section = document.querySelectorAll("section");
const div1 = document.querySelectorAll(".cards > div");
const div2 = document.querySelectorAll(".acoes-cotidianas > div");
const p1 = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const h5 = document.querySelectorAll("h5");
const h6 = document.querySelectorAll("h6");
const span = document.querySelectorAll("span");
const subBar = document.getElementById("sub-menu-bar");
const li = document.querySelectorAll("li");
const liMenor = document.querySelectorAll("nav > ul > li > ul > li");
const navTheme = document.querySelector("nav");

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
    main.style.backgroundColor = "rgba(0, 0, 0, 1)";
    HTML.style.backgroundColor = "rgba(5, 0, 23, 1)";
    let tela = window.innerWidth;
    if (tela < 800) {li.forEach(li => {li.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = "black"})};
    if (tela < 800) {navTheme.style.backgroundColor = "rgba(5, 0, 23, 1)"} else {navTheme.style.backgroundColor = ""};
    if (tela < 800) {liMenor.forEach(liMenor => {liMenor.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = ""})};
    section.forEach(s => {s.style.color = "#ffffff";});
    div1.forEach(d => { d.style.color = "#ffffff"; });
    div1.forEach(d => { d.style.backgroundColor = "rgba(5, 0, 23, 1)"; });
    div2.forEach(d => { d.style.color = "#ffffff"; });
    div2.forEach(d => { d.style.backgroundColor = "rgba(5, 0, 23, 1)"; });
    h1.forEach(h1 => {h1.style.color = "#3c9effff"});
    p1.forEach(p => {p.style.color = "#ffffff"});
    titulo.style.backgroundColor = "rgba(5, 0, 23, 1)"; 
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
    li.forEach(li => {li.style.backgroundColor = ""});
    navTheme.style.backgroundColor = "";
    liMenor.forEach(liMenor => {liMenor.style.backgroundColor = ""});
    section.forEach(s => {s.style.color = "";});
    div1.forEach(d => { d.style.color = ""; });
    div1.forEach(d => { d.style.backgroundColor = ""; });
    div2.forEach(d => { d.style.color = ""; });
    div2.forEach(d => { d.style.backgroundColor = ""; });
    h1.forEach(h1 => {h1.style.color = ""});
    p1.forEach(p => {p.style.color = ""});
    p1.forEach(s => {s.style.backgroundColor = "";});
    titulo.style.backgroundColor = ""; 
    localStorage.setItem("theme", "dark");
}   

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);