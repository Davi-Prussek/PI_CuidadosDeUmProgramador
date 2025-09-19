// Avalia rotina
const avaliaRotina = document.getElementById("avaliacaoRotina");
const emojiRotina = document.createElement("span");
avaliaRotina.insertAdjacentElement("afterend", emojiRotina);

avaliaRotina.addEventListener("change", () => {
  const value = avaliaRotina.value;
  if(value === "muito-boa") emojiRotina.textContent = "🔥";
  else if(value === "boa") emojiRotina.textContent = "✌️";
  else if(value === "regular") emojiRotina.textContent = "👌";
  else if(value === "ruim") emojiRotina.textContent = "👎";
  else emojiRotina.textContent = "";
})

// Planejamento do dia
const planejamento = document.getElementById("planejaAtividades");
const emojiPlanejamento = document.createElement("span");
planejamento.insertAdjacentElement("afterend", emojiPlanejamento);

planejamento.addEventListener("change", () => {
  const value = planejamento.value;
  if (value === "sempre") emojiPlanejamento.textContent = "✅📅";
  else if (value === "as-vezes") emojiPlanejamento.textContent = "😐";
  else if (value === "raramente") emojiPlanejamento.textContent = "⚠️";
  else if (value === "nunca") emojiPlanejamento.textContent = "😞";
  else emojiPlanejamento.textContent = "";
});

// Função para bloquear caracteres inválidos (e, E, +, -)
function bloquearCaracteresInvalidos(input) {
  input.addEventListener("keydown", (event) => {
    if (
      event.key === "e" ||
      event.key === "E" ||
      event.key === "+" ||
      event.key === "-"
    ) {
      event.preventDefault();
    }
  });
}

// Selecionar todos os inputs de horas
const inputsHoras = [
  document.getElementById("horasSono"),
  document.getElementById("horasTela"),
  document.getElementById("horasTrabalho"),
  document.getElementById("horasEstudo"),
];
inputsHoras.forEach((input) => bloquearCaracteresInvalidos(input));

// Função para transformar HH:MM em horas decimais
function parseHoras(valor) {
  if (!valor) return 0;
  const partes = valor.split(":");
  if (partes.length === 2) {
    return parseInt(partes[0]) + parseInt(partes[1]) / 60;
  }
  return parseFloat(valor) || 0;
}

// Sono
const sono = document.getElementById("horasSono");
const sonoEmoji = document.getElementById("sleepEmoji");

sono.addEventListener("input", () => {
  const horas = parseHoras(sono.value);
  if (horas === 0) sonoEmoji.textContent = "";
  else if (horas < 7) sonoEmoji.textContent = "😴";
  else if (horas <= 9) sonoEmoji.textContent = "😍";
  else sonoEmoji.textContent = "😐";
});

// Uso de telas
const horasTela = document.getElementById("horasTela");
const telaEmoji = document.createElement("span");
horasTela.insertAdjacentElement("afterend", telaEmoji);

horasTela.addEventListener("input", () => {
  const horas = parseHoras(horasTela.value);
  if (horas === 0) telaEmoji.textContent = "";
  else if (horas > 3) telaEmoji.textContent = "👓";
  else telaEmoji.textContent = "😊";
});

// Parte 2 – Atividades
const trabalho = document.getElementById("trabalho");
const estudo = document.getElementById("estudar");
const tempoLivre = document.getElementById("tempoLivre");

const trabalhoCond = document.getElementById("trabalhoCondicional");
const estudoCond = document.getElementById("estudoCondicional");
const tempoLivreCond = document.getElementById("tempoLivreCondicional");

trabalho.addEventListener("change", () => {
  trabalhoCond.style.display = trabalho.checked ? "block" : "none";
});

estudo.addEventListener("change", () => {
  estudoCond.style.display = estudo.checked ? "block" : "none";
});

tempoLivre.addEventListener("change", () => {
  tempoLivreCond.style.display = tempoLivre.checked ? "block" : "none";
});

// Lógica de horas de TRABALHO
const horasTrabalho = document.getElementById("horasTrabalho");
const emojiTrabalho = document.createElement("span");
horasTrabalho.insertAdjacentElement("afterend", emojiTrabalho);

horasTrabalho.addEventListener("input", () => {
  const horas = parseHoras(horasTrabalho.value);
  if (horas === 0) emojiTrabalho.textContent = "";
  else if (horas <= 8) emojiTrabalho.textContent = "💻🙂";
  else if (horas <= 10) emojiTrabalho.textContent = "😐";
  else emojiTrabalho.textContent = "😫";
});

// Lógica de horas de ESTUDO
const horasEstudo = document.getElementById("horasEstudo");
const emojiEstudo = document.createElement("span");
horasEstudo.insertAdjacentElement("afterend", emojiEstudo);

horasEstudo.addEventListener("input", () => {
  const horas = parseHoras(horasEstudo.value);
  if (horas === 0) emojiEstudo.textContent = "";
  else if (horas < 1) emojiEstudo.textContent = "😴";
  else if (horas <= 4) emojiEstudo.textContent = "📚😍";
  else if (horas <= 7) emojiEstudo.textContent = "😐";
  else emojiEstudo.textContent = "🤯";
});

// Lógica para TEMPO LIVRE
const telasLivre = document.getElementById("telasLivre");
const atividadeFisicaLivre = document.getElementById("atividadeFisicaLivre");
const lazerLivre = document.getElementById("lazerLivre");
const outrosLivre = document.getElementById("outrosLivre");

[telasLivre, atividadeFisicaLivre, lazerLivre, outrosLivre].forEach((el) => {
  el.addEventListener("change", () => {
    if (telasLivre.checked) telasLivre.nextElementSibling.textContent = "📱😐";
    else
      telasLivre.nextElementSibling.textContent =
        "Uso de telas (filmes, jogos, celular)";

    if (atividadeFisicaLivre.checked)
      atividadeFisicaLivre.nextElementSibling.textContent = "🏃😍";
    else
      atividadeFisicaLivre.nextElementSibling.textContent = "Atividade física";

    if (lazerLivre.checked) lazerLivre.nextElementSibling.textContent = "🌳😊";
    else lazerLivre.nextElementSibling.textContent = "Lazer ao ar livre";
  });
});
