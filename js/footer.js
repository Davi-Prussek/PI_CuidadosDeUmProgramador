/* ===== Footer ===== */
const footer1 = document.createElement("footer");
document.querySelector("body").appendChild(footer1);

const ul1 = document.createElement("ul");
ul1.classList.add("lista-principal");
footer1.appendChild(ul1);

// ===== Contato =====
let li1 = document.createElement("li");
li1.classList.add("footer-contact");

let h41 = document.createElement("h4");
h41.innerHTML = "Contato";
li1.appendChild(h41);

let a = document.createElement("a");
a.href ="https://www.instagram.com/devsaude_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
a.target = "_blank";
a.rel = "noopener noreferrer";

let img = document.createElement("img");
img.src = "img/icons/instagram-brands-solid-full.svg";
img.alt = "Instagram do Dev-Saúde";
img.classList.add("midia");

a.appendChild(img);
li1.appendChild(a);

ul1.appendChild(li1);


// ===== Logo =====
let li2 = document.createElement("li");
li2.classList.add("logo");

let a2 = document.createElement("a");
a2.href = "./index.html";

let img2 = document.createElement("img");
img2.src = "img/logo_PI-fundo_removido-nova.png";

a2.appendChild(img2);
li2.appendChild(a2);
ul1.appendChild(li2);


/* ===== Links Rápidos ===== */
let li3 = document.createElement("li");
li3.classList.add("linkRp");
ul1.appendChild(li3);

let h42 = document.createElement("h4");
h42.innerText = "Links Rápidos";
li3.appendChild(h42);

const divLinks = document.createElement("div");
divLinks.classList.add("links");
li3.appendChild(divLinks);


const links = [
  {titulo: "Principais",
    links: [
      { href: "index.html", texto: "Início" },
      { href: "testeHoras.html", texto: "Teste de horas" },
      { href: "quiz.html", texto: "Quiz" },
      { href: "cuidados.html", texto: "Cuidados" }
    ]},
  {titulo: "Começar",
    links: [
      { href: "comecar-ambiente.html", texto: "Ambiente" },
      { href: "comecar-habitos.html", texto: "Hábitos" }
    ]},
  {titulo: "Sobre",
    links: [
      { href: "sobreNos.html", texto: "Sobre nós" },
      { href: "sobre-o-projeto.html", texto: "Sobre o projeto" }
    ]}];

for (let item of links) {

  let div = document.createElement("div");
  divLinks.appendChild(div);

  let h4 = document.createElement("h4");
  h4.innerText = item.titulo;
  div.appendChild(h4);

  let ul1 = document.createElement("ul");
  div.appendChild(ul1);

  for (let i = 0; i < item.links.length; i++) {

    let li1 = document.createElement("li");
    let a1 = document.createElement("a");

    ul1.appendChild(li1);
    li1.appendChild(a1);

    a1.href = item.links[i].href;
    a1.innerText = item.links[i].texto;
  }
}

const p = document.createElement("p");
p.innerHTML = "&copy; 2025 Dev-Saúde. Todos os direitos reservados.";
footer1.appendChild(p);