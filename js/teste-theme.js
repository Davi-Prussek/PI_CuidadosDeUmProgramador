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
const subBar = document.getElementById("sub-menu-bar");

const botaoOff = document.getElementById("themeButtonOff");
<<<<<<< HEAD
const botaoOn = document.getElementById("themeButtonOn");
=======
const botaoOn = document.getElementById("themeButtonOn")
>>>>>>> 8b326b61101a53d70461975db1cb49004898e35a

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
<<<<<<< HEAD
=======
    footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
>>>>>>> 8b326b61101a53d70461975db1cb49004898e35a
    main.style.backgroundColor = "rgba(5, 0, 23, 1)";
    HTML.style.backgroundColor = "rgba(16, 16, 16, 1)";
    section.forEach(s => {s.style.color = "#ffffff";});
    section.forEach(s => {s.style.backgroundColor = "#ffffff";});
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
<<<<<<< HEAD
=======
    footer.style.background = "linear-gradient( #0057b3c4, #002457)";
>>>>>>> 8b326b61101a53d70461975db1cb49004898e35a
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