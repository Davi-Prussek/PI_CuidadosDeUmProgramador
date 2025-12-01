const HTML = document.querySelector("html");
const body = document.querySelector("body");

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

const navTheme = document.getElementById("nav");
const li = document.querySelectorAll("nav > ul > li");
const liMenor = document.querySelectorAll("nav > ul > li > ul > li");

const section = document.querySelectorAll("section");
const div = document.querySelectorAll("div");
const p1 = document.querySelectorAll("p");
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

const ap1_2 = document.querySelector(".ap1-2");

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
    header.classList.add("light");
    header.classList.remove("dark");
    ap1_2.classList.add("ap1-2-dark");
    ap1_2.classList.add("ap1-2");
    body.style.backgroundColor = "rgba(5, 0, 23, 1)";
    botaoOn.style.display = "none";
    botaoOff.style.display = "block";
    header.style.backgroundColor = "rgb(0, 0, 0)";
    subBar.style.backgroundColor = "rgb(0, 0, 0)"
    setaVoltar.style.backgroundColor = "rgb( 0, 0, 0)";
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
    main.style.backgroundColor = "rgb(3, 0, 16)";
    HTML.style.backgroundColor = "rgb(3, 0, 16)";
    let tela = window.innerWidth;
    if (tela < 800) {li.forEach(li => {li.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = "black"})};
    if (tela < 800) {navTheme.style.backgroundColor = "rgba(5, 0, 23, 1)"} else {navTheme.style.backgroundColor = ""};
    if (tela < 800) {liMenor.forEach(liMenor => {liMenor.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = ""})};
    section.forEach(s => {s.style.color = "#ffffff";});
    div.forEach(d => { d.style.color = "#ffffff"; });
    div.forEach(d => { d.style.backgroundColor = "rgba(0, 0, 0, 0.83)"; });
    h2.forEach(h2 => {h2.style.color = "#3c9effff"});
    p1.forEach(p => {p.style.color = "#ffffff"});
    localStorage.setItem("theme", "light");
}

function dark() {
    header.classList.add("dark");
    header.classList.remove("light");
    ap1_2.classList.add("ap1-2");
    ap1_2.classList.remove("ap1-2-dark");
    body.style.backgroundColor = "";
    botaoOff.style.display = "none";
    botaoOn.style.display = "block";
    header.style.backgroundColor = "#0056b3";
    subBar.style.backgroundColor = "#0056b3"
    setaVoltar.style.backgroundColor = "#0056b3";
    footer.style.background = "linear-gradient( #0057b3c4, #002457)";
    main.style.backgroundColor = "";
    HTML.style.backgroundColor = "";
    li.forEach(li => {li.style.backgroundColor = ""});
    navTheme.style.backgroundColor = "";
    liMenor.forEach(liMenor => {liMenor.style.backgroundColor = ""});
    section.forEach(s => {s.style.color = "";});
    div.forEach(d => { d.style.color = ""; });
    div.forEach(d => { d.style.backgroundColor = ""; });
    h2.forEach(h2 => {h2.style.color = ""});
    p1.forEach(p => {p.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);