const HTML = document.querySelector("html");
const body = document.querySelector("body");

const header = document.querySelector("header");
const subBar = document.getElementById("sub-menu-bar");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const section = document.querySelectorAll("section");
const div = document.querySelectorAll("div");
const article = document.querySelectorAll("article");


const parte_I = document.querySelectorAll(".parte-I > section");
const parte_II = document.querySelectorAll(".parte-II > section");
const parte_III = document.querySelectorAll(".parte-III > section");

const parte_I_p = document.querySelectorAll(".parte-I > section > p");
const parte_II_p = document.querySelectorAll(".parte-II > section > p");
const parte_III_p = document.querySelectorAll(".parte-III > section > p");

const face = document.querySelectorAll(".face");

const github = document.querySelectorAll(".github > a");

const span = document.querySelectorAll("span");


const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const h5 = document.querySelectorAll("h5");
const h6 = document.querySelectorAll("h6");


const gitIcon = document.querySelectorAll(".icon-git");


const setaVoltar = document.getElementById("setaVoltar");
const botaoOff = document.getElementById("themeButtonOff");
const botaoOn = document.getElementById("themeButtonOn");

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
    HTML.style.backgroundColor = "rgba(5, 0, 23, 1)";

    header.style.backgroundColor = "rgb(0, 0, 0)";
    subBar.style.backgroundColor = "rgba(0, 0, 0, 1)"
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
    
    parte_I.forEach(parte_I => {parte_I.style.backgroundColor = "black";});
    parte_II.forEach(parte_II => {parte_II.style.backgroundColor = "black";});
    parte_III.forEach(parte_III => {parte_III.style.backgroundColor = "black";});

    parte_I_p.forEach(parte_I_p => {parte_I_p.style.color = "white";});
    parte_II_p.forEach(parte_II_p => {parte_II_p.style.color = "white";});
    parte_III_p.forEach(parte_III_p => {parte_III_p.style.color = "white";});

    face.forEach(face => {face.style.border = "8px solid black";});

    h3.forEach(h3 => {h3.style.color = "#3c9effff"});

    github.forEach(github => {github.style.backgroundColor = "rgba(0, 0, 39, 1)"});

    setaVoltar.style.backgroundColor = "rgb(0, 0, 0)";  
    h2.forEach(h2 => {h2.style.color = "#ffffff"});
    localStorage.setItem("theme", "light");
}

function dark() {
    botaoOff.style.display = "none";
    botaoOn.style.display = "block";
    HTML.style.backgroundColor = "";

    header.style.backgroundColor = "";
    subBar.style.backgroundColor = ""
    footer.style.background = "";
    
    parte_I.forEach(parte_I => {parte_I.style.backgroundColor = "";});
    parte_II.forEach(parte_II => {parte_II.style.backgroundColor = "";});
    parte_III.forEach(parte_III => {parte_III.style.backgroundColor = "";});

    parte_I_p.forEach(parte_I_p => {parte_I_p.style.color = "";});
    parte_II_p.forEach(parte_II_p => {parte_II_p.style.color = "";});
    parte_III_p.forEach(parte_III_p => {parte_III_p.style.color = "";});

    face.forEach(face => {face.style.border = "";});

    h3.forEach(h3 => {h3.style.color = ""});

    github.forEach(github => {github.style.backgroundColor = ""});

    setaVoltar.style.backgroundColor = "";  
    h2.forEach(h2 => {h2.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);