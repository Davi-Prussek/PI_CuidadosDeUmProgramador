const footer1 = document.createElement("footer");
document.querySelector("body").appendChild(footer1);

const ul1 = document.createElement("ul");
footer1.appendChild(ul1);

let li1 = "";
let h41 = "";
let a = "";
let img = "";
for (let i = 0; i < 3;i++) {
li1 = document.createElement("li");
if (i == 0) {
li1.classList.add("footer-contact");
h41 = document.createElement("h4");
h41.innerText = "Contato";
li1.appendChild(h41);
a = document.createElement("a");
a.href = "https://www.instagram.com/devsaude_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
a.target = "_blank";
a.rel = "noopener noreferrer";

img = document.createElement("img");
img.src = "img/icons/instagram-brands-solid-full.svg";

a.appendChild(img);
img.alt = "Instagram do Dev-Saúde";
img.classList.add("midia");
li1.appendChild(a);
}
else if (i == 1) {
const liLogo = document.createElement("li");
liLogo.classList.add("logo");

const imgLogo = document.createElement("img");
imgLogo.src = "img/logo_PI-fundo_removido-nova.png";
liLogo.appendChild(imgLogo);

ul1.appendChild(liLogo);


} else if (i == 2) {
li1.classList.add("linkRp");
h41.innerText = "Links Rápidos";
li1.appendChild(h41);
const ul = document.createElement("ul");
li1.appendChild(ul);
const links = {
  inicio: { text: "Início", href: "index.html" },
  teste: { text: "Teste de Horas", href: "testeHoras.html" },
  rotinas: { text: "Rotinas", href: "rotinas.html" },
  cuidados: { text: "Cuidados", href: "cuidados.html" },
  sobre: { text: "Sobre nós", href: "sobreNos.html" }
};
for (const key in links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = links[key].href;
    a.innerText = links[key].text;
    li.appendChild(a);
    ul.appendChild(li);
}

}
ul1.appendChild(li1);
}
const p = document.createElement("p");
p.innerText = "&copy; 2025 Dev-Saúde. Todos os direitos reservados.";
footer1.appendChild(p);