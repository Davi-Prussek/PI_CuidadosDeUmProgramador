const HTMLTheme = document.querySelector("html");
const bodyTheme = document.querySelector("body");

const navTheme = document.querySelector("nav");
const tela = window.screen.width;
const headerTheme = document.querySelector("header");
const footerTheme = document.querySelector("footer");    
const mainTheme = document.querySelector("main"); 

const sectionTheme = document.querySelectorAll("section");
const fieldsetTheme = document.querySelectorAll("fieldset");
const divTheme = document.querySelectorAll("div");
const pTheme = document.querySelectorAll("p");
const h1Theme = document.querySelectorAll("h1");
const h2Theme = document.querySelectorAll("h2");
const h3Theme = document.querySelectorAll("h3");
const h4Theme = document.querySelectorAll("h4");
const h5Theme = document.querySelectorAll("h5");
const h6Theme = document.querySelectorAll("h6");
const spanTheme = document.querySelectorAll("span");
const subBarTheme = document.getElementById("sub-menu-bar");

const setaVoltarTheme = document.getElementById("setaVoltar");

const botaoOffTheme = document.getElementById("themeButtonOff");
const botaoOnTheme = document.getElementById("themeButtonOn")

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
    botaoOnTheme.style.display = "none";
    botaoOffTheme.style.display = "block";
    headerTheme.style.backgroundColor = "rgb(0, 0, 0)";
    subBarTheme.style.backgroundColor = "rgb(0, 0, 0)"
    setaVoltarTheme.style.backgroundColor = "rgb( 0, 0, 0)";
    footerTheme.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
    mainTheme.style.backgroundColor = "rgba(5, 0, 23, 1)";
    HTMLTheme.style.backgroundColor = "rgba(5, 0, 23, 1)";
    sectionTheme.forEach(s => {s.style.color = "#ffffff";});
    sectionTheme.forEach(s => {s.style.backgroundColor = "rgb( 0, 0, 0)";});
    fieldsetTheme.forEach(f => {f.style.backgroundColor = "rgba(5, 0, 23, 1)"});
    h2Theme.forEach(h2 => {h2.style.color = "#3c9effff"});
    pTheme.forEach(p => {p.style.color = "#ffffff"});
    localStorage.setItem("theme", "light");
}

function dark() {
    botaoOffTheme.style.display = "none";
    botaoOnTheme.style.display = "block";
    headerTheme.style.backgroundColor = "#0056b3";
    subBarTheme.style.backgroundColor = "#0056b3"
    setaVoltarTheme.style.backgroundColor = "#0056b3";
    footerTheme.style.background = "linear-gradient( #0057b3c4, #002457)";
    mainTheme.style.backgroundColor = "";
    HTMLTheme.style.backgroundColor = "";
    sectionTheme.forEach(s => {s.style.color = "";});
    sectionTheme.forEach(s => {s.style.backgroundColor = "";});
    fieldsetTheme.forEach(f => {f.style.backgroundColor = ""})
    divTheme.forEach(d => { d.style.color = ""; });
    divTheme.forEach(d => { d.style.backgroundColor = ""; });
    h2Theme.forEach(h2 => {h2.style.color = ""});
    pTheme.forEach(p => {p.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOffTheme.addEventListener("click", ligaDesliga);
botaoOnTheme.addEventListener("click", ligaDesliga);
