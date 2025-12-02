const HTML = document.querySelector("html");
const body = document.querySelector("body");

const routerPage = document.getElementById("router-pages");
const routerPageLi = document.querySelectorAll("#router-pages li button");

const titulo = document.getElementById("segundo-titulo");

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
const article = document.querySelectorAll("article");
const li4 = document.querySelectorAll("li");
let tela = window.innerWidth;

const setaVoltar = document.getElementById("setaVoltar");

const botaoOff = document.getElementById("themeButtonOff");
const botaoOn = document.getElementById("themeButtonOn")

const ligadoDesligado = document.getElementById("desligado");

const mainTheme = document.querySelector("main");

const imgPostura = document.querySelector("#postura-router img"); 
const imgLuzSolar = document.querySelector("#luz-solar-router img");
const imgBurnOut = document.querySelector("#burn-out-router img");
const imgTelas = document.querySelector("#telas-router img");

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
    tela = window.innerWidth;
    mainTheme.classList.add("default-dark");
    mainTheme.classList.remove("default");
    article.forEach(article => {article.style.backgroundColor = "rgba(8, 0, 39, 1)"});
    li4.forEach(li4 => {li4.style.color = "white"});
    body.style.backgroundImage = "linear-gradient(180deg, rgba(15, 12, 45, 1) 0%, rgba(6, 0, 32, 0.8) 100%)";
    botaoOn.style.display = "none";
    botaoOff.style.display = "block";
    header.style.backgroundColor = "rgb(0, 0, 0)";
    subBar.style.backgroundColor = "rgb(0, 0, 0)"
    setaVoltar.style.backgroundColor = "rgb( 0, 0, 0)";
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
    HTML.style.backgroundColor = "black";
    if (tela < 800) {li.forEach(li => {li.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = "black"})};
    if (tela < 800) {navTheme.style.backgroundColor = "rgba(5, 0, 23, 1)"} else {navTheme.style.backgroundColor = ""};
    if (tela < 800) {liMenor.forEach(liMenor => {liMenor.style.backgroundColor = "rgba(5, 0, 23, 1)"})} else {li.forEach(li => {li.style.backgroundColor = ""})};
    section.forEach(s => {s.style.color = "#ffffff";});
    span.forEach(span => {span.style.color = "#ffffff";});
    div.forEach(d => { d.style.color = "#ffffff"; });
    titulo.style.backgroundColor = "rgba(5, 0, 23, 1)"; 
    localStorage.setItem("theme", "light");
    HTML.style.setProperty("--h3-glow-color", "rgba(255, 255, 255, 0.4)");

    imgPostura.src = "./img/icons/icon-cuidados/postura-dark.png";
    imgLuzSolar.src = "./img/icons/icon-cuidados/sol-dark.png";
    imgBurnOut.src = "./img/icons/icon-cuidados/fogo-dark.png";
    imgTelas.src = "./img/icons/icon-cuidados/telas-dark.png";
}

function dark() {
    header.classList.add("dark");
    header.classList.remove("light");
    mainTheme.classList.remove("default-dark");
    mainTheme.classList.add("default");
    article.forEach(article => {article.style.backgroundColor = ""});
    li4.forEach(li4 => {li4.style.color = ""});
    body.style.backgroundImage = "";
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
    span.forEach(span => {span.style.color = "";});
    div.forEach(d => { d.style.backgroundColor = ""; });
    titulo.style.backgroundColor = "";
    localStorage.setItem("theme", "dark");
    HTML.style.setProperty("--h3-glow-color", "rgba(0, 0, 0, 0.4)");
    
    imgPostura.src = "../img/icons/icon-cuidados/postura.png";
    imgLuzSolar.src = "../img/icons/icon-cuidados/sol.png";
    imgBurnOut.src = "../img/icons/icon-cuidados/fogo.png";
    imgTelas.src = "../img/icons/icon-cuidados/telas.png";
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);