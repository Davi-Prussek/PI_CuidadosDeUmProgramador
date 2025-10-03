
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
const article = document.querySelectorAll("article");
const li = document.querySelectorAll("main >    ul > li");

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
    h2.forEach(h2 => {h2.style.color = "#3c9effff"});
    section.forEach(s => {s.style.color = "#ffffff";});
    div.forEach(d => { d.style.color = "#ffffff"; });
    article.forEach(article => {article.style.color = "#ffffff"});
    article.forEach(article => {article.style.backgroundColor = "rgba(10, 3, 36, 1)"});
    li.forEach(li => {li.style.backgroundColor = "rgba(5, 0, 23, 1)"});
    li.forEach(li => {li.style.color = "white"});
    li.forEach(li => {li.style.borderBottom = "2px solid black"});
    li.forEach(li => {li.style.borderTop = "2px solid black"});
    li.forEach(li => {li.style.borderRight = "2px solid black"});
    li.forEach(li => {li.style.li = "2px solid black"});
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
    h2.forEach(h2 => {h2.style.color = ""});
    section.forEach(s => {s.style.color = "";});
    div.forEach(d => { d.style.color = ""; });
    div.forEach(d => { d.style.backgroundColor = ""; });
    article.forEach(article => {article.style.color = ""});
    article.forEach(article => {article.style.backgroundColor = ""});
    li.forEach(li => {li.style.backgroundColor = ""});
    li.forEach(li => {li.style.Color = ""});
    li.forEach(li => {li.style.borderTop = "none"});
    li.forEach(li => {li.style.borderRight = "none"});
    li.forEach(li => {li.style.borderRight = "none"});
    li.forEach(li => {li.style.borderBottom = "none"});
    li.forEach(li => {li.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);