const botaoMenu = document.getElementById("menu-responsivo");
const nav = document.getElementById("nav");
const botao_I = document.getElementById("botao-I");
const botao_II = document.getElementById("botao-II");
const botao_III = document.getElementById("botao-III");

const sub_menus_I = document.getElementById("sub-menus-I");
const sub_menus_III = document.getElementById("sub-menus-III");

let testeTamanho = window.innerWidth;

sub_menus_I.style.display = "none";
sub_menus_III.style.display = "none";

const menu = () => {
if (nav.style.display === "block") {
    nav.style.display = "none";
    
} else {
    nav.style.display = "block";
    }
}
const atoAbrir_I = (event) => {
if (event && event.preventDefault) event.preventDefault();
if (sub_menus_I.style.display == "none") {
    sub_menus_I.style.display = "block";
    botao_I.style.backgroundColor = "rgb(18, 21, 44)";
} else {
    sub_menus_I.style.display = "none";
    botao_I.style.backgroundColor = "";
    botao_I.style.backgroundColor = "";
}
}
const atoAbrir_III = (event) => {
if (event && event.preventDefault) event.preventDefault();
if (sub_menus_III.style.display == "none") {
    sub_menus_III.style.display = "block";
    botao_III.style.backgroundColor = "rgb(18, 21, 44)";
} else {
    sub_menus_III.style.display = "none";
    botao_III.style.backgroundColor = "";
}
botao_III.setAttribute("aria-expanded", sub_menus_III.style.display === "block" ? "true" : "false");    
}
const fecharMenu = (event) => {
    testeTamanho = window.innerWidth;
  if (!nav.contains(event.target) && !botaoMenu.contains(event.target) && testeTamanho < 500) {
    nav.style.display = "none";
    nav.style.backgroundColor = "";
  }
}
botaoMenu.addEventListener("click", menu);
document.addEventListener("click", fecharMenu);
botao_I.addEventListener("click", atoAbrir_I);
botao_III.addEventListener("click", atoAbrir_III);