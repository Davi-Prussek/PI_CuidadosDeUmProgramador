const footer1 = document.createElement("footer");
document.querySelector("body").appendChild(footer1);

const ul1 = document.createElement("ul");
ul1.classList.add("lista-principal");
footer1.appendChild(ul1);

let li1 = "";
let h41 = "";
let a = "";
let img = "";
for (let i = 0; i < 3; i++) {
  li1 = document.createElement("li");
  if (i == 0) {
    li1.classList.add("footer-contact");
    h41 = document.createElement("h4");
    h41.innerHTML = "Contato";
    li1.appendChild(h41);
    a = document.createElement("a");
    a.href ="https://www.instagram.com/devsaude_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
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
    li1 = document.createElement("li");
    li1.classList.add("logo");

    const img = document.createElement("img");
    img.src = "img/logo_PI-fundo_removido-nova.png";
    li1.appendChild(img);
  } 
  else if (i == 2) {
    li1.classList.add("linkRp");
    h41 = document.createElement("h4");
    h41.innerText = "Links Rápidos";
    li1.appendChild(h41);
    let div = document.createElement("div");
    div.classList.add("links");
    li1.appendChild(div);
    let divMenor = "";

    for (let i = 0; i < 3; i++) {
      let ul = "";
      if (i == 0) {
        h41 = document.createElement("h4");
        h41.innerText = "Principais";
        divMenor = document.createElement("div");
        divMenor.appendChild(h41);
        ul = document.createElement("ul");
        divMenor.appendChild(ul);
        div.appendChild(divMenor);
        const links = {
          inicio: { text: "Início", href: "index.html" },
          teste: { text: "Teste de Horas", href: "testeHoras.html" },
          rotinas: { text: "Quiz", href: "quiz.html" },
          cuidados: { text: "Cuidados", href: "cuidados.html" },
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
      else if (i == 1) {
        divMenor = document.createElement("div");
        div.appendChild(divMenor);
        h41 = document.createElement("h4");
        h41.innerText = "Começar";
        li1.appendChild(h41);
        ul = document.createElement("ul");
        divMenor.appendChild(h41);
        divMenor.appendChild(ul);
        for (let i = 0; i < 2; i++) {
          let li = document.createElement("li");
          if (i == 0) {
            li = document.createElement("li");
            ul.appendChild(li);
            a = document.createElement("a");
            a.href = "comecar-ambiente.html";
            a.innerText = "Ambiente";
            li.appendChild(a);
          } else {
            li = document.createElement("li");
            ul.appendChild(li);
            a = document.createElement("a");
            a.href = "comecar-habitos.html";
            a.innerText = "Hábitos";
            li.appendChild(a);
          }
        }
      } 
      else {
        divMenor = document.createElement("div");
        div.appendChild(divMenor);
        h41 = document.createElement("h4");
        h41.innerText = "Sobre";
        ul = document.createElement("ul");
        divMenor.appendChild(h41);
        divMenor.appendChild(ul);
        for (let i = 0; i < 2; i++) {

          if (i == 0) {
            li = document.createElement("li");
            ul.appendChild(li);
            a = document.createElement("a");
            a.href = "sobreNos.html";
            a.innerText = "Nós";
            li.appendChild(a);
          } 
          else {
            li = document.createElement("li");
            ul.appendChild(li);
            a = document.createElement("a");
            a.href = "sobre-o-projeto.html";
            a.innerText = "Projeto";
            li.appendChild(a);
          }
        }
      }
    }
  }
  ul1.appendChild(li1);
}
const p = document.createElement("p");
p.innerHTML = "&copy; 2025 Dev-Saúde. Todos os direitos reservados.";
footer1.appendChild(p);
