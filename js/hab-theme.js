
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
const h3_Span = document.querySelectorAll("h3 > span");
const span = document.querySelectorAll("span");
const subBar = document.getElementById("sub-menu-bar");
const ul = document.querySelectorAll("ul");
const li = document.querySelectorAll("li");
const setaVoltar = document.getElementById("setaVoltar");
const article2 = document.querySelectorAll("article > div")
const article = document.querySelectorAll("article")
const article3 = document.getElementsByClassName(".sinais");
const seta = document.getElementById("frente-tras");

const parte__I = document.getElementsByClassName("parte-I");
const parte__II = document.getElementsByClassName("parte-II");
const parte__III = document.getElementsByClassName("parte-III");
const parte__IV = document.getElementsByClassName("parte-IV");

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
    main.style.backgroundColor = "rgba(5, 0, 23, 1)";
    HTML.style.backgroundColor = "rgba(5, 0, 23, 1)";
    section.forEach(section => {section.style.backgroundColor = ""})
    article.forEach(article => {article.style.backgroundColor = "#202020ff"});
    article2.forEach(article2 => {article2.style.backgroundColor = "#202020ff"});
    ul.forEach(ul => {ul.style.color = "#ffffff";});
    li.forEach(li => {li.style.color = "white"})
    div.forEach(d => { d.style.color = "#ffffff"; });
    div.forEach(div =>{div.style.backgroundColor = "#202020ff"});
    article.forEach(article => {article.style.backgroundColor = "rgba(5, 0, 23, 1)"});
    p.forEach(p => {p.style.color = "#ffffff"});
    seta.style.backgroundColor = "transparent";
    h3.forEach(h3 => {h3.style.border = "5px solid #ffffff"});
    h3_Span.forEach(h3_Span => {h3_Span.style.color = "white"});

    parte__I.style.backgroundColor = "#202020ff";
    parte__II.style.backgroundColor = "#202020ff";
    parte__III.style.backgroundColor = "#202020ff";
    parte__IV.style.backgroundColor = "#202020ff";
    
    localStorage.setItem("theme", "light");
}

function dark() {
botaoOn.style.display = "none";
    botaoOff.style.display = "block";
    header.style.backgroundColor = "";
    subBar.style.backgroundColor = ""
    setaVoltar.style.backgroundColor = "";
    footer.style.background = "";
    main.style.backgroundColor = "";
    HTML.style.backgroundColor = "";
    section.forEach(section => {section.style.backgroundColor = ""})
    article.forEach(article => {article.style.backgroundColor = ""});
    article2.forEach(article2 => {article2.style.backgroundColor = ""});
    ul.forEach(ul => {ul.style.color = "";});
    li.forEach(li => {li.style.color = ""})
    div.forEach(d => { d.style.color = ""; });
    div.forEach(div =>{div.style.backgroundColor = ""});
    article.forEach(article => {article.style.backgroundColor = ""});
    p.forEach(p => {p.style.color = ""});
    seta.style.backgroundColor = "";
    h3.forEach(h3 => {h3.style.border = ""});
    h3_Span.forEach(h3_Span => {h3_Span.style.color = ""});
    localStorage.setItem("theme", "dark");
}

botaoOff.addEventListener("click", ligaDesliga);
botaoOn.addEventListener("click", ligaDesliga);