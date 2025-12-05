let resetBtn = document.getElementsByClassName("restart-btn");

function reset() {
  window.location.reload(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function letraMaisc(nome) {
  const prep = ["a", "ante", "após", "até", "com", "contra", "de", "desde", "em",
    "entre", "para", "perante", "por", "sem", "sob", "sobre", "trás", "da", "do"];

  return nome.split(" ").map(palavra => {
      const lower = palavra.toLowerCase();
      return prep.includes(lower) ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(" ");
};

/* ===================== Parte 1 ===================== */

// Avalia rotina
const avaliaRotina = document.getElementById("avaliacaoRotina");
const emojiRotina = document.createElement("span");
avaliaRotina.insertAdjacentElement("afterend", emojiRotina);

avaliaRotina.addEventListener("change", () => {
  const value = avaliaRotina.value;
  if (value === "muito-boa") emojiRotina.textContent = "🔥";
  else if (value === "boa") emojiRotina.textContent = "✌️";
  else if (value === "regular") emojiRotina.textContent = "👌";
  else if (value === "ruim") emojiRotina.textContent = "👎";
  else emojiRotina.textContent = "";
});

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

//Sentir Disposição
const periodoDisposicao = document.getElementById("periodoDisposicao");
const emojiDisposicao = document.createElement("span");
periodoDisposicao.insertAdjacentElement("afterend", emojiDisposicao);

periodoDisposicao.addEventListener("change", () => {
  const value = periodoDisposicao.value;
  if (value === "manha") emojiDisposicao.textContent = "🌞";
  else if (value === "tarde") emojiDisposicao.textContent = "🌇";
  else if (value === "noite") emojiDisposicao.textContent = "🌃";
  else emojiDisposicao.textContent = "";
});

//Equilibrio trabalho/estudo
const equilibrioRotina = document.getElementById("equilibrioRotina");
const emojiEquilibrio = document.createElement("span");
equilibrioRotina.insertAdjacentElement("afterend", emojiEquilibrio);

equilibrioRotina.addEventListener("change", () => {
  const value = equilibrioRotina.value;
  if (value === "sim") emojiEquilibrio.textContent = "👌";
  else if (value === "parcialmente") emojiEquilibrio.textContent = "😑";
  else if (value === "nao") emojiEquilibrio.textContent = "👎";
  else emojiEquilibrio.textContent = "";
});

/* ===================== Parte 2 ===================== */

const trabalho = document.getElementById("trabalho");
const estudo = document.getElementById("estudar");
const tempoLivre = document.getElementById("tempoLivre");

const trabalhoCond = document.getElementById("trabalhoCondicional");
const estudoCond = document.getElementById("estudoCondicional");
const tempoLivreCond = document.getElementById("tempoLivreCondicional");

// Helper: mostra/oculta painel com transição suave
function togglePanel(checkbox, panel) {
  if (!checkbox || !panel) return;
  if (checkbox.checked) {
    panel.style.display = "block";
    // forçar reflow para transição
    void panel.offsetHeight;
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.classList.add("visible");
  } else {
    panel.style.maxHeight = "0px";
    panel.classList.remove("visible");
    // esconder depois da transição para evitar tabulação em elementos ocultos
    setTimeout(() => {
      if (!panel.classList.contains("visible")) panel.style.display = "none";
    }, 350);
  }
}

function updateCheckboxVisual(checkbox) {
  if (!checkbox) return;
  const item =
    checkbox.closest(".checkbox-item") ||
    checkbox.closest(".checkbox-item-inline");
  if (!item) return;
  if (checkbox.checked) item.classList.add("selected");
  else item.classList.remove("selected");
}

function updateFormGroupVisual(checkbox) {
  if (!checkbox) return;
  const group =
    checkbox.closest(".form-group") || checkbox.closest(".checkbox-item");
  if (!group) return;
  const checks = Array.from(group.querySelectorAll('input[type="checkbox"]'));
  const anyChecked = checks.some((c) => c.checked);
  if (anyChecked) group.classList.add("selected");
  else group.classList.remove("selected");
}

// ligar listeners com checagem de existência
if (trabalho) {
  trabalho.addEventListener("change", () => {
    togglePanel(trabalho, trabalhoCond);
    updateCheckboxVisual(trabalho);
  });
}

if (estudo) {
  estudo.addEventListener("change", () => {
    togglePanel(estudo, estudoCond);
    updateCheckboxVisual(estudo);
  });
}

if (tempoLivre) {
  tempoLivre.addEventListener("change", () => {
    togglePanel(tempoLivre, tempoLivreCond);
    updateCheckboxVisual(tempoLivre);
  });
}

// inicializar estado ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  if (trabalho) {
    togglePanel(trabalho, trabalhoCond);
    updateCheckboxVisual(trabalho);
  }
  if (estudo) {
    togglePanel(estudo, estudoCond);
    updateCheckboxVisual(estudo);
  }
  if (tempoLivre) {
    togglePanel(tempoLivre, tempoLivreCond);
    updateCheckboxVisual(tempoLivre);
  }
});

// Lógica de horas de TRABALHO
const horasTrabalho = document.getElementById("horasTrabalho");
const emojiTrabalho = document.createElement("span");
horasTrabalho.insertAdjacentElement("afterend", emojiTrabalho);

horasTrabalho.addEventListener("input", () => {
  const horas = parseHoras(horasTrabalho.value);
  if (horas === 0) emojiTrabalho.textContent = "";
  else if (horas <= 8) emojiTrabalho.textContent = "💻😊";
  else if (horas <= 10) emojiTrabalho.textContent = "💻😐";
  else if (horas <= 12) emojiTrabalho.textContent = "💻⚠️";
  else emojiTrabalho.textContent = "💻😫";
});

//Pausas
const pausasTrabalho = document.getElementById("pausasTrabalho");
const emojiPausas = document.createElement("span");
pausasTrabalho.insertAdjacentElement("afterend", emojiPausas);

pausasTrabalho.addEventListener("change", () => {
  const value = pausasTrabalho.value;
  if (value === "sim") emojiPausas.textContent = "👍";
  else if (value === "nao") emojiPausas.textContent = "👎";
  else emojiPausas.textContent = "";
});

// Lógica de horas de ESTUDO
const horasEstudo = document.getElementById("horasEstudo");
const emojiEstudo = document.createElement("span");
horasEstudo.insertAdjacentElement("afterend", emojiEstudo);

horasEstudo.addEventListener("input", () => {
  const horas = parseHoras(horasEstudo.value);
  if (horas === 0) emojiEstudo.textContent = "";
  else if (horas < 1) emojiEstudo.textContent = "😴";
  else if (horas <= 3) emojiEstudo.textContent = "📚😊";
  else if (horas <= 5) emojiEstudo.textContent = "📚😐";
  else if (horas <= 7) emojiEstudo.textContent = "📚⚠️";
  else emojiEstudo.textContent = "📚🤯";
});

// Lógica para TEMPO LIVRE
const telasLivre = document.getElementById("telasLivre");
const atividadeFisicaLivre = document.getElementById("atividadeFisicaLivre");
const lazerLivre = document.getElementById("lazerLivre");
const outrosLivre = document.getElementById("outrosLivre");

[telasLivre, atividadeFisicaLivre, lazerLivre, outrosLivre].forEach((el) => {
  // Criar spans para emojis se ainda não existirem
  if (!el.dataset.hasEmojiSpan) {
    const emojiSpan = document.createElement("span");
    emojiSpan.className = "emoji-inline";
    el.nextElementSibling.insertAdjacentElement("afterend", emojiSpan);
    el.dataset.hasEmojiSpan = "true";
    el.emojiSpan = emojiSpan;
  }

  el.addEventListener("change", () => {
    // Restaurar os textos originais
    if (!telasLivre.dataset.originalText) {
      telasLivre.dataset.originalText = "Uso de telas (filmes, jogos, celular)";
      telasLivre.nextElementSibling.textContent =
        telasLivre.dataset.originalText;
    }

    if (!atividadeFisicaLivre.dataset.originalText) {
      atividadeFisicaLivre.dataset.originalText = "Atividade física";
      atividadeFisicaLivre.nextElementSibling.textContent =
        atividadeFisicaLivre.dataset.originalText;
    }

    if (!lazerLivre.dataset.originalText) {
      lazerLivre.dataset.originalText = "Lazer ao ar livre";
      lazerLivre.nextElementSibling.textContent =
        lazerLivre.dataset.originalText;
    }

    // Atualizar apenas os emojis
    if (telasLivre.checked) telasLivre.emojiSpan.textContent = "📱😐";
    else telasLivre.emojiSpan.textContent = "";

    if (atividadeFisicaLivre.checked)
      atividadeFisicaLivre.emojiSpan.textContent = "🏃😍";
    else atividadeFisicaLivre.emojiSpan.textContent = "";

    if (lazerLivre.checked) lazerLivre.emojiSpan.textContent = "🌳😊";
    else lazerLivre.emojiSpan.textContent = "";
  });
});

/* ===================== Parte 3 ===================== */

// Sono
const sono = document.getElementById("horasSono");
const sonoEmoji = document.getElementById("sleepEmoji");

sono.addEventListener("input", () => {
  const horas = parseHoras(sono.value);
  if (horas === 0) sonoEmoji.textContent = "";
  else if (horas < 4) sonoEmoji.textContent = "😵‍💫"; // Muito pouco sono
  else if (horas < 6) sonoEmoji.textContent = "😴"; // Pouco sono
  else if (horas < 7) sonoEmoji.textContent = "😪"; // Sono insuficiente
  else if (horas <= 9) sonoEmoji.textContent = "😴💤"; // Sono ideal
  else if (horas <= 10) sonoEmoji.textContent = "😐"; // Sono em excesso
  else sonoEmoji.textContent = "😵"; // Muito sono
});

/* ===================== Parte 4 ===================== */

// Uso de telas
const horasTela = document.getElementById("horasTela");
const telaEmoji = document.createElement("span");
horasTela.insertAdjacentElement("afterend", telaEmoji);

horasTela.addEventListener("input", () => {
  const horas = parseHoras(horasTela.value);
  if (horas === 0) telaEmoji.textContent = "";
  else if (horas <= 2) telaEmoji.textContent = "😊📱";
  else if (horas <= 3) telaEmoji.textContent = "😐📱";
  else if (horas <= 5) telaEmoji.textContent = "⚠️👓";
  else telaEmoji.textContent = "😵‍💫👓";
});

/* ===================== Parte 5 – Postura & Ambiente (emojis) ===================== */
const posturaTelas = document.getElementById("posturaTelas");
const posturaCondicional = document.getElementById("posturaCondicional");
const senteDores = document.getElementById("senteDores");
const dicasAlongamento = document.getElementById("dicasAlongamento");
const ambienteSaudavel = document.getElementById("ambienteSaudavel");

// criar spans de emoji e inserir após os selects (se existirem)
function createEmojiSpanAfter(el) {
  if (!el) return null;
  const span = document.createElement("span");
  span.className = "emoji-inline";
  el.insertAdjacentElement("afterend", span);
  return span;
}

const emojiPostura = createEmojiSpanAfter(posturaTelas);
const emojiSenteDores = createEmojiSpanAfter(senteDores);
const emojiDicasAlong = createEmojiSpanAfter(dicasAlongamento);
const emojiAmbiente = createEmojiSpanAfter(ambienteSaudavel);

function updatePosturaUI() {
  if (!posturaTelas) return;
  const val = posturaTelas.value;
  if (val === "sim") {
    if (emojiPostura) emojiPostura.textContent = "🧍‍♂️✅";
    if (posturaCondicional) posturaCondicional.style.display = "none";
  } else if (val === "parcialmente") {
    if (emojiPostura) emojiPostura.textContent = "🧍‍♀️⚠️";
    if (posturaCondicional) posturaCondicional.style.display = "block";
  } else if (val === "nao") {
    if (emojiPostura) emojiPostura.textContent = "🔴❗";
    if (posturaCondicional) posturaCondicional.style.display = "block";
  } else {
    if (emojiPostura) emojiPostura.textContent = "";
    if (posturaCondicional) posturaCondicional.style.display = "none";
  }
}

function updateSenteDoresUI() {
  if (!senteDores) return;
  const v = senteDores.value;
  if (v === "sim") {
    if (emojiSenteDores) emojiSenteDores.textContent = "😣";
  } else if (v === "nao") {
    if (emojiSenteDores) emojiSenteDores.textContent = "😌";
  } else if (emojiSenteDores) emojiSenteDores.textContent = "";
}

function updateDicasAlongUI() {
  if (!dicasAlongamento) return;
  const v = dicasAlongamento.value;
  if (v === "sim") {
    if (emojiDicasAlong) emojiDicasAlong.textContent = "🤸‍♂️";
  } else if (v === "nao") {
    if (emojiDicasAlong) emojiDicasAlong.textContent = "🚫";
  } else if (emojiDicasAlong) emojiDicasAlong.textContent = "";
}

function updateAmbienteUI() {
  if (!ambienteSaudavel) return;
  const v = ambienteSaudavel.value;
  if (v === "sim") {
    if (emojiAmbiente) emojiAmbiente.textContent = "🌿✅";
  } else if (v === "precisa-melhorar") {
    if (emojiAmbiente) emojiAmbiente.textContent = "💡⚠️";
  } else if (emojiAmbiente) emojiAmbiente.textContent = "";
}

if (posturaTelas) posturaTelas.addEventListener("change", updatePosturaUI);
if (senteDores) senteDores.addEventListener("change", updateSenteDoresUI);
if (dicasAlongamento)
  dicasAlongamento.addEventListener("change", updateDicasAlongUI);
if (ambienteSaudavel)
  ambienteSaudavel.addEventListener("change", updateAmbienteUI);

// ===== IMC: mostrar/ocultar campos quando o usuário escolher calcular IMC =====
const calcularIMC = document.getElementById("calcularIMC");
const imcCondicionalEl = document.getElementById("imcCondicional");
const pesoIMCEl = document.getElementById("pesoIMC");
const alturaIMCEl = document.getElementById("alturaIMC");

function updateImcUI() {
  if (!calcularIMC || !imcCondicionalEl) return;
  if (calcularIMC.value === "sim") {
    imcCondicionalEl.style.display = "block";
    if (pesoIMCEl) pesoIMCEl.setAttribute("required", "required");
    if (alturaIMCEl) alturaIMCEl.setAttribute("required", "required");
    if (pesoIMCEl) pesoIMCEl.focus();
  } else {
    imcCondicionalEl.style.display = "none";
    if (pesoIMCEl) pesoIMCEl.removeAttribute("required");
    if (alturaIMCEl) alturaIMCEl.removeAttribute("required");
  }
}

if (calcularIMC) calcularIMC.addEventListener("change", updateImcUI);

// Validação e UX para os inputs de IMC (à prova de usuário)
function validarCampoIMC() {
  if (!pesoIMCEl || !alturaIMCEl) return true;
  const peso = parseFloat(pesoIMCEl.value);
  const altura = parseFloat(alturaIMCEl.value);
  let ok = true;

  // limpar estados anteriores
  pesoIMCEl.classList.remove("error");
  alturaIMCEl.classList.remove("error");
  let pesoMsg = document.getElementById("pesoImcMsg");
  let alturaMsg = document.getElementById("alturaImcMsg");
  if (!pesoMsg) {
    pesoMsg = document.createElement("div");
    pesoMsg.id = "pesoImcMsg";
    pesoIMCEl.insertAdjacentElement("afterend", pesoMsg);
    pesoMsg.className = "imc-error";
  }
  if (!alturaMsg) {
    alturaMsg = document.createElement("div");
    alturaMsg.id = "alturaImcMsg";
    alturaIMCEl.insertAdjacentElement("afterend", alturaMsg);
    alturaMsg.className = "imc-error";
  }

  pesoMsg.textContent = "";
  alturaMsg.textContent = "";

  if (pesoIMCEl.value !== "") {
    if (isNaN(peso) || peso < 20) {
      pesoIMCEl.classList.add("error");
      pesoMsg.textContent = "Insira um peso entre 20 e 300 kg.";
      ok = false;
    } else if (peso > 300) {
      // clampa automaticamente para 300 sem mensagem
      pesoIMCEl.value = "300";
      // atualizar a variável local para evitar mensagens posteriores
      // não marcar erro nem mostrar mensagem
    }
  }

  if (alturaIMCEl.value !== "") {
    if (isNaN(altura)) {
      alturaIMCEl.classList.add("error");
      alturaMsg.textContent = "Insira uma altura válida entre 0 e 250 cm.";
      ok = false;
    } else if (altura > 250) {
      // clampa automaticamente para 250 sem mensagem
      alturaIMCEl.value = "250";
    }
  }

  return ok;
}

if (pesoIMCEl) {
  pesoIMCEl.addEventListener("input", validarCampoIMC);
  // Bloquear caracteres inválidos (apenas números e controles)
  pesoIMCEl.addEventListener("keydown", (event) => {
    if (
      (event.key >= "0" && event.key <= "9") ||
      [
        "Backspace",
        "Delete",
        "Tab",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
      ].includes(event.key)
    ) {
      return; // deixa passar
    }
    event.preventDefault(); // bloqueia o resto
  });
  // Permitir colar só números, limitando até 300 e min 20
  pesoIMCEl.addEventListener("paste", (event) => {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    const numericPaste = paste.replace(/\D/g, "");
    const parsed = parseInt(numericPaste) || 0;
    const limitedPaste = Math.max(20, Math.min(parsed, 300));
    pesoIMCEl.value = limitedPaste;
  });
}

if (alturaIMCEl) {
  alturaIMCEl.addEventListener("input", validarCampoIMC);
  // Bloquear caracteres inválidos (apenas números e controles)
  alturaIMCEl.addEventListener("keydown", (event) => {
    if (
      (event.key >= "0" && event.key <= "9") ||
      [
        "Backspace",
        "Delete",
        "Tab",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
      ].includes(event.key)
    ) {
      return; // deixa passar
    }
    event.preventDefault(); // bloqueia o resto
  });
  // Permitir colar só números, limitando até 250 e min 100
  alturaIMCEl.addEventListener("paste", (event) => {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    const numericPaste = paste.replace(/\D/g, "");
    const parsed = parseInt(numericPaste) || 0;
    const limitedPaste = Math.max(100, Math.min(parsed, 250));
    alturaIMCEl.value = limitedPaste;
  });
}

// inicializar estado
document.addEventListener("DOMContentLoaded", () => {
  updatePosturaUI();
  updateSenteDoresUI();
  updateDicasAlongUI();
  updateAmbienteUI();
});

/* ===================== Config gerais ===================== */
//Se adicionar algo, divída comentando 🙏

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

// Função para limitar horas a 24h
function limitarHoras(input) {
  input.addEventListener("input", () => {
    const valor = parseFloat(input.value);
    if (valor > 24) {
      input.value = "24";
    }
    validarSomaHoras();
  });
}

// Selecionar todos os inputs de horas
const inputsHoras = [
  document.getElementById("horasSono"),
  document.getElementById("horasTela"),
  document.getElementById("horasTrabalho"),
  document.getElementById("horasEstudo"),
];

inputsHoras.forEach((input) => {
  bloquearCaracteresInvalidos(input);
  limitarHoras(input);
});

const idadeInput = document.getElementById("idade");

// Bloquear letras e símbolos, mas permitir backspace, delete, setas etc.
idadeInput.addEventListener("keydown", (event) => {
  if (
    (event.key >= "0" && event.key <= "9") ||
    [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ].includes(event.key)
  ) {
    return; // deixa passar
  }
  event.preventDefault(); // bloqueia o resto
});

// Permitir colar só números, limitando até 130
idadeInput.addEventListener("paste", (event) => {
  event.preventDefault();
  const paste = (event.clipboardData || window.clipboardData).getData("text");
  const numericPaste = paste.replace(/\D/g, ""); // tira o que não for número
  const limitedPaste = Math.min(parseInt(numericPaste) || 0, 130);
  idadeInput.value = limitedPaste || "";
});

// Limitar valor no input a 130, permitindo vazio
idadeInput.addEventListener("input", () => {
  if (idadeInput.value === "") return; // permite apagar tudo
  const value = parseInt(idadeInput.value) || 0;
  if (value > 130) idadeInput.value = 130;
});

// Função para transformar HH:MM em horas decimais
function parseHoras(valor) {
  if (!valor) return 0;
  const partes = valor.split(":");
  if (partes.length === 2) {
    return parseInt(partes[0]) + parseInt(partes[1]) / 60;
  }
  return parseFloat(valor) || 0;
}

// Criar modal de erro centralizado
function criarModalErro() {
  const modal = document.createElement("div");
  modal.id = "modalErroHoras";
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: modalSlideIn 0.3s ease-out;
  `;

  modalContent.innerHTML = `
    <div style="color: #e74c3c; font-size: 48px; margin-bottom: 15px;">⚠️</div>
    <h3 style="color: #e74c3c; margin-bottom: 15px;">Erro de Validação</h3>
    <p id="mensagemErro" style="margin-bottom: 20px; color: #333; line-height: 1.5;"></p>
    <button id="fecharModalErro" style="
      background: #e74c3c;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    ">Entendi</button>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Adicionar animação CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes modalSlideIn {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  // Event listener para fechar modal
  document.getElementById("fecharModalErro").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fechar modal clicando fora
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  return modal;
}

// Função para validar soma das horas
function validarSomaHoras() {
  const trabalho = document.getElementById("trabalho");
  const estudo = document.getElementById("estudar");

  let somaTotal = 0;
  let atividades = [];

  // Sempre incluir sono
  const horasSono = parseHoras(document.getElementById("horasSono").value);
  if (horasSono > 0) {
    somaTotal += horasSono;
    atividades.push(`Sono: ${horasSono.toFixed(1)}h`);
  }

  // Sempre incluir telas
  const horasTela = parseHoras(document.getElementById("horasTela").value);
  if (horasTela > 0) {
    somaTotal += horasTela;
    atividades.push(`Telas: ${horasTela.toFixed(1)}h`);
  }

  // Incluir trabalho se checkbox marcada
  if (trabalho && trabalho.checked) {
    const horasTrabalho = parseHoras(
      document.getElementById("horasTrabalho").value
    );
    if (horasTrabalho > 0) {
      somaTotal += horasTrabalho;
      atividades.push(`Trabalho: ${horasTrabalho.toFixed(1)}h`);
    }
  }

  // Incluir estudo se checkbox marcada
  if (estudo && estudo.checked) {
    const horasEstudo = parseHoras(
      document.getElementById("horasEstudo").value
    );
    if (horasEstudo > 0) {
      somaTotal += horasEstudo;
      atividades.push(`Estudo: ${horasEstudo.toFixed(1)}h`);
    }
  }

  // Verificar se excede 24h
  if (somaTotal > 24) {
    let modal = document.getElementById("modalErroHoras");
    if (!modal) {
      modal = criarModalErro();
    }

    const mensagem = `
      <strong>Total de horas: ${somaTotal.toFixed(1)}h</strong><br><br>
      Um dia tem apenas 24 horas!<br><br>
      <strong>Suas atividades:</strong><br>
      ${atividades.join("<br>")}
      <br><br>
      Por favor, ajuste os valores para que a soma não exceda 24 horas.
    `;

    document.getElementById("mensagemErro").innerHTML = mensagem;
    modal.style.display = "flex";

    return false;
  }

  return true;
}

/* ===================== Submissão do Formulário ===================== */

const form = document.querySelector(".horasForm");
const resultadosSection = document.querySelector(".results-section");
const cardsContainer = resultadosSection.querySelector(".cards-container"); // Seleciona o novo container de cards

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar soma das horas antes de processar
  if (!validarSomaHoras()) {
    return; // Impede o envio se as horas excedem 24h
  }

  // Coletar dados
  const data = Object.fromEntries(new FormData(form));

  // Calcular métricas básicas
  const horasTrabalho = parseHoras(data.horasTrabalho || "0");
  const horasEstudo = parseHoras(data.horasEstudo || "0");
  const horasSono = parseHoras(data.horasSono || "0"); // Garante que seja '0' se vazio
  const horasTela = parseHoras(data.horasTela || "0"); // Garante que seja '0' se vazio

  // Analisar aspectos positivos e negativos
  let positivos = 0;
  let negativos = 0;

  // Lógica de pontuação (ajuste conforme a importância de cada resposta)
  // Parte 1: Rotina e Disposição
  if (data.avaliacaoRotina === "muito-boa" || data.avaliacaoRotina === "boa")
    positivos += 2;
  else if (data.avaliacaoRotina === "regular") positivos += 1;
  else negativos += 2;

  if (data.planejaAtividades === "sempre") positivos += 2;
  else if (data.planejaAtividades === "as-vezes") positivos += 1;
  else negativos += 2;

  if (data.equilibrioRotina === "sim") positivos += 2;
  else if (data.equilibrioRotina === "parcialmente") positivos += 1;
  else negativos += 2;

  // Parte 2: Atividades Diárias
  if (data.trabalho === "on") {
    // Verifica se a checkbox de trabalho está marcada
    // Ajuste: até 8h considerado normal/positivo; 9-10h pequena atenção; >10h ruim
    if (horasTrabalho <= 3) positivos += 2;
    else if (horasTrabalho <= 5) positivos += 1; // Tempo considerado produtivo
    else if (horasTrabalho <= 8)
      positivos += 1; // 6-8h: faixa normal/brasileira
    else if (horasTrabalho <= 10) negativos += 1; // 9-10h: atenção
    else negativos += 3; // >10h: muito ruim

    if (data.pausasTrabalho === "sim") positivos += 1;
    else negativos += 1;
  }

  if (data.estudar === "on") {
    // Verifica se a checkbox de estudo está marcada
    if (horasEstudo <= 3) positivos += 2;
    else if (horasEstudo <= 5) negativos += 1; // Tempo considerável
    else if (horasEstudo <= 7) negativos += 2; // Ruim
    else negativos += 3; // Muito ruim
  }

  if (data.tempoLivre === "on") {
    // Verifica se a checkbox de tempo livre está marcada
    if (data.telasLivre === "on") negativos += 1; // Uso excessivo de telas no tempo livre
    if (data.atividadeFisicaLivre === "on") positivos += 2;
    if (data.lazerLivre === "on") positivos += 1;
  }

  // Parte 3: Sono - regras ajustadas conforme preferência
  // Desejo: <6 ruim; 7-8 médio; >10 estranho
  if (horasSono < 4) {
    // muito pouco sono — crítico
    negativos += 4;
  } else if (horasSono < 6) {
    // menos de 6h — ruim
    negativos += 3;
  } else if (horasSono >= 6 && horasSono < 7) {
    // entre 6 e <7 — levemente abaixo do ideal
    negativos += 1;
  } else if (horasSono >= 7 && horasSono <= 8) {
    // 7-8h — médio/aceitável
    positivos += 1;
  } else if (horasSono === 9) {
    // 9h — bom
    positivos += 2;
  } else if (horasSono === 10) {
    // 10h — pouco estranho
    negativos += 1;
  } else if (horasSono > 10) {
    // mais de 10h — estranho/excessivo
    negativos += 2;
  } else {
    // fallback conservador
    negativos += 1;
  }

  // Parte 4: Hábitos e Saúde - Ajustado conforme critérios
  if (horasTela <= 2) positivos += 2; // Uso saudável
  else if (horasTela <= 3) positivos += 1; // Uso aceitável
  else if (horasTela <= 5) negativos += 1; // Tempo considerável
  else negativos += 3; // Uso ruim/excessivo

  if (data.posturaTelas === "sim") positivos += 1;
  else negativos += 1;

  if (data.ambienteSaudavel === "sim") positivos += 1;
  else negativos += 1;

  if (data.atividadeFisica === "3-4" || data.atividadeFisica === "5+")
    positivos += 2;
  else if (data.atividadeFisica === "1-2") positivos += 1;
  else negativos += 2;

  if (data.alimentacao === "equilibrada") positivos += 2;
  else if (data.alimentacao === "parcialmente") positivos += 1;
  else negativos += 2;

  // Dificuldade (se a dificuldade é algo que pode ser melhorado, não é estritamente "negativo" no sentido de pontuação, mas sim um ponto de atenção)
  // Podemos usar isso para priorizar dicas.

  // --- Geração de Mensagens Personalizadas (10 Variações) ---
  const allTips = [];

  // Dicas Positivas (baseadas em boas práticas)
  const positiveTipsPool = [
    {
      type: "positive",
      title: "Ótima Rotina!",
      content: `Sua rotina é ${data.avaliacaoRotina}, o que é um excelente sinal de bem-estar. Continue com o bom trabalho!`,
      condition: () =>
        data.avaliacaoRotina === "muito-boa" || data.avaliacaoRotina === "boa",
    },
    {
      type: "positive",
      title: "Planejamento Eficaz",
      content: `Planejar suas atividades ${data.planejaAtividades} é uma chave para a produtividade e redução do estresse. Mantenha esse hábito!`,
      condition: () => data.planejaAtividades === "sempre",
    },
    {
      type: "positive",
      title: "Equilíbrio Saudável",
      content: `Seu equilíbrio entre vida pessoal e profissional é ${data.equilibrioRotina}. Isso é crucial para evitar o esgotamento.`,
      condition: () => data.equilibrioRotina === "sim",
    },
    {
      type: "positive",
      title: "Jornada de Trabalho Adequada",
      content: `Com ${horasTrabalho.toFixed(
        1
      )}h de trabalho, você mantém uma carga saudável que preserva sua energia e bem-estar.`,
      condition: () => data.trabalho === "on" && horasTrabalho <= 3,
    },
    {
      type: "positive",
      title: "Pausas Inteligentes",
      content: `Fazer pausas regularmente é vital para a saúde mental e física. Continue priorizando-as!`,
      condition: () => data.trabalho === "on" && data.pausasTrabalho === "sim",
    },
    {
      type: "positive",
      title: "Estudo Equilibrado",
      content: `Suas ${horasEstudo.toFixed(
        1
      )}h de estudo representam um tempo produtivo e saudável. Continue intercalando com pausas regulares.`,
      condition: () => data.estudar === "on" && horasEstudo <= 3,
    },
    {
      type: "positive",
      title: "Sono Reparador",
      content: `Suas ${horasSono.toFixed(
        1
      )}h de sono estão na faixa ideal (7-9h), proporcionando recuperação completa para corpo e mente.`,
      condition: () => horasSono >= 7 && horasSono <= 9,
    },
    {
      type: "positive",
      title: "Uso Consciente de Telas",
      content: `Suas ${horasTela.toFixed(
        1
      )}h de tela demonstram uso moderado e consciente. Excelente para a saúde ocular!`,
      condition: () => horasTela <= 2,
    },
    {
      type: "positive",
      title: "Postura Atenta",
      content: `Sua atenção à postura é fundamental para prevenir dores e lesões a longo prazo.`,
      condition: () => data.posturaTelas === "sim",
    },
    {
      type: "positive",
      title: "Ambiente Propício",
      content: `Um ambiente saudável contribui muito para sua concentração e bem-estar.`,
      condition: () => data.ambienteSaudavel === "sim",
    },
    {
      type: "positive",
      title: "Atividade Física",
      content: `Sua frequência de atividade física (${data.atividadeFisica}) é um pilar importante para sua saúde em geral.`,
      condition: () =>
        data.atividadeFisica === "3-4" || data.atividadeFisica === "5+",
    },
    {
      type: "positive",
      title: "Alimentação Balanceada",
      content: `Uma alimentação equilibrada é a base para ter energia e disposição ao longo do dia.`,
      condition: () => data.alimentacao === "equilibrada",
    },
    {
      type: "positive",
      title: "Tempo Livre Bem Aproveitado",
      content: `É ótimo que você inclua atividades saudáveis como lazer ao ar livre e atividade física no seu tempo livre.`,
      condition: () =>
        data.tempoLivre === "on" &&
        (data.lazerLivre === "on" || data.atividadeFisicaLivre === "on"),
    },
    {
      type: "positive",
      title: "Qualidade do Sono Excelente",
      content: `Sua rotina de sono está otimizada! Dormir entre 7-9h é fundamental para consolidação da memória, recuperação muscular e regulação hormonal.`,
      condition: () => horasSono >= 7 && horasSono <= 9,
    },
    {
      type: "positive",
      title: "Higiene do Sono Adequada",
      content: `Manter uma quantidade adequada de sono fortalece seu sistema imunológico e melhora sua capacidade de concentração durante o dia.`,
      condition: () => horasSono >= 7 && horasSono <= 9,
    },
  ];

  // Dicas Negativas (baseadas em pontos de melhoria)
  const negativeTipsPool = [
    {
      type: "negative",
      title: "Atenção à Rotina",
      content: `Sua rotina é ${data.avaliacaoRotina}. Pequenas mudanças podem trazer grandes benefícios para seu dia a dia.`,
      condition: () =>
        data.avaliacaoRotina === "ruim" || data.avaliacaoRotina === "regular",
    },
    {
      type: "negative",
      title: "Melhore o Planejamento",
      content: `Planejar suas atividades ${data.planejaAtividades} pode ser um ponto de melhoria. Tente organizar seu dia com antecedência.`,
      condition: () =>
        data.planejaAtividades === "nunca" ||
        data.planejaAtividades === "raramente",
    },
    {
      type: "negative",
      title: "Busque Equilíbrio",
      content: `Seu equilíbrio entre vida pessoal e profissional é ${data.equilibrioRotina}. É importante buscar mais harmonia para evitar o esgotamento.`,
      condition: () =>
        data.equilibrioRotina === "nao" ||
        data.equilibrioRotina === "parcialmente",
    },
    {
      type: "negative",
      title: "Atenção à Jornada de Trabalho",
      content: `${horasTrabalho.toFixed(1)}h de trabalho ${
        horasTrabalho > 5
          ? "é uma carga excessiva que pode prejudicar sua saúde"
          : "já representa um tempo considerável"
      }. Considere pausas mais frequentes e otimização de tarefas.`,
      condition: () => data.trabalho === "on" && horasTrabalho > 3,
    },
    {
      type: "negative",
      title: "Priorize Pausas",
      content: `Você não faz pausas. Pausas curtas e regulares podem aumentar sua produtividade e bem-estar.`,
      condition: () => data.trabalho === "on" && data.pausasTrabalho === "nao",
    },
    {
      type: "negative",
      title: "Cuidado com o Tempo de Estudo",
      content: `${horasEstudo.toFixed(1)}h de estudo ${
        horasEstudo > 5
          ? "é excessivo e pode causar fadiga mental"
          : "já é um tempo considerável"
      }. Intercale com pausas e atividades relaxantes para manter a eficiência.`,
      condition: () => data.estudar === "on" && horasEstudo > 3,
    },
    {
      type: "negative",
      title: "Sono Insuficiente - Atenção!",
      content: `${horasSono.toFixed(1)}h de sono ${
        horasSono < 4
          ? "é criticamente insuficiente e pode afetar gravemente sua saúde"
          : horasSono < 6
          ? "está abaixo do recomendado (7-9h)"
          : horasSono > 10
          ? "é excessivo e pode indicar outros problemas"
          : "precisa ser ajustado"
      }. Priorize uma rotina de sono saudável.`,
      condition: () => horasSono < 7 || horasSono > 9,
    },
    {
      type: "negative",
      title: "Tempo de Tela Excessivo",
      content: `${horasTela.toFixed(1)}h de tela ${
        horasTela > 5
          ? "é prejudicial para seus olhos e bem-estar mental"
          : "já representa um tempo considerável"
      }. Implemente pausas regulares e considere atividades offline.`,
      condition: () => horasTela > 2,
    },
    {
      type: "negative",
      title: "Ajuste a Postura",
      content: `Sua postura pode precisar de atenção. Pequenos ajustes evitam complicações com a saúde da coluna.`,
      condition: () => data.posturaTelas === "nao",
    },
    {
      type: "negative",
      title: "Otimize seu Ambiente",
      content: `Seu ambiente pode ser melhorado para aumentar seu foco e conforto.`,
      condition: () => data.ambienteSaudavel === "nao",
    },
    {
      type: "negative",
      title: "Mais Atividade Física",
      content: `Sua frequência de atividade física (${data.atividadeFisica}) é baixa. Incluir mais movimento pode trazer muitos benefícios.`,
      condition: () =>
        data.atividadeFisica === "0" || data.atividadeFisica === "1-2",
    },
    {
      type: "negative",
      title: "Revise a Alimentação",
      content: `Sua alimentação ${data.alimentacao} pode ser um ponto de melhoria. Uma dieta balanceada é fundamental para sua energia.`,
      condition: () =>
        data.alimentacao === "desbalanceada" ||
        data.alimentacao === "parcialmente",
    },
    {
      type: "negative",
      title: "Atenção à Dificuldade",
      content: `A dificuldade que você enfrenta (${data.dificuldadeRotina}) é um sinal ruim. Busque estratégias para lidar com ela.`,
    },
    {
      type: "negative",
      title: "Sono e Produtividade",
      content: `A falta de sono adequado reduz em até 40% sua capacidade de formar novas memórias e afeta diretamente sua produtividade no trabalho e estudos.`,
    },
    {
      type: "negative",
      title: "Impactos da Privação do Sono",
      content: `Dormir menos que o necessário aumenta o risco de problemas cardiovasculares, diabetes e compromete seu sistema imunológico. Priorize seu descanso!`,
      condition: () => horasSono < 6,
    },
    {
      type: "negative",
      title: "Sono Excessivo - Investigar",
      content: `Dormir mais de 10h regularmente pode indicar problemas de saúde subjacentes ou má qualidade do sono. Considere avaliar sua rotina noturna.`,
      condition: () => horasSono > 10,
    },
  ];

  // Selecionar um número fixo de cards (ex: 6 cards para ter uma boa variedade)
  const numberOfCardsToShow = 6;
  const generatedCards = [];

  // Priorizar dicas com base na pontuação
  // Se mais positivos, mais dicas positivas. Se mais negativos, mais dicas negativas.
  const totalScore = positivos + negativos;
  const positiveRatio = totalScore > 0 ? positivos / totalScore : 0.5; // Evita divisão por zero
  const numPositiveCards = Math.round(numberOfCardsToShow * positiveRatio);
  const numNegativeCards = numberOfCardsToShow - numPositiveCards;

  // Adicionar dicas positivas aleatoriamente (apenas as que atendem às condições)
  const validPositiveTips = positiveTipsPool.filter(
    (tip) => !tip.condition || tip.condition()
  );
  const shuffledPositiveTips = validPositiveTips.sort(
    () => 0.5 - Math.random()
  );
  for (
    let i = 0;
    i < numPositiveCards && i < shuffledPositiveTips.length;
    i++
  ) {
    generatedCards.push(shuffledPositiveTips[i]);
  }

  // Adicionar dicas negativas aleatoriamente (apenas as que atendem às condições)
  const validNegativeTips = negativeTipsPool.filter(
    (tip) => !tip.condition || tip.condition()
  );
  const shuffledNegativeTips = validNegativeTips.sort(
    () => 0.5 - Math.random()
  );
  for (
    let i = 0;
    i < numNegativeCards && i < shuffledNegativeTips.length;
    i++
  ) {
    generatedCards.push(shuffledNegativeTips[i]);
  }

  // Se não gerou cards positivos suficientes, ajusta para mais cards negativos
  const totalValidCards =
    shuffledPositiveTips.length + shuffledNegativeTips.length;
  if (
    generatedCards.length < numberOfCardsToShow &&
    totalValidCards > generatedCards.length
  ) {
    const remainingSlots = numberOfCardsToShow - generatedCards.length;
    const additionalNegativeCards = Math.min(
      remainingSlots,
      shuffledNegativeTips.length - numNegativeCards
    );

    for (
      let i = numNegativeCards;
      i < numNegativeCards + additionalNegativeCards;
      i++
    ) {
      if (i < shuffledNegativeTips.length) {
        generatedCards.push(shuffledNegativeTips[i]);
      }
    }
  }

  // Embaralha os cards gerados para não ficarem sempre na mesma ordem
  generatedCards.sort(() => 0.5 - Math.random());

  // Limpar container e adicionar saudação
  const saudacaoDiv = resultadosSection.querySelector("#saudacaoPersonalizada");
  saudacaoDiv.innerHTML = `
    <p>Olá <strong>${data.nome || "usuário"
    }</strong>, com base nas suas respostas, geramos ${numberOfCardsToShow} cards de feedback.</p>
    <p>Sua pontuação indica <strong>${positivos} ponto(s) positivo(s)</strong> e <strong>${negativos} ponto(s) de atenção</strong> em sua rotina.</p>
  `;

  // Limpar cardsContainer antes de adicionar novos
  cardsContainer.innerHTML = "";

  // Filtrar para garantir apenas 1 card relacionado a sono
  const filteredCards = [];
  let sleepCardAdded = false;
  for (const tip of generatedCards) {
    const isSleep = /sono/i.test(tip.title) || /sono/i.test(tip.content);
    if (isSleep) {
      if (!sleepCardAdded) {
        filteredCards.push(Object.assign({}, tip, { topic: "sono" }));
        sleepCardAdded = true;
      } else {
        continue;
      }
    } else {
      // tentar inferir tópico a partir do título/conteúdo
      let topic = "outros";
      if (/imc|peso|altura/i.test(tip.title + " " + tip.content)) topic = "imc";
      else if (
        /alongamento|alongamentos|alongamento rápido|alongar/i.test(
          tip.title + " " + tip.content
        )
      )
        topic = "alongamento";
      else if (/sono/i.test(tip.title + " " + tip.content)) topic = "sono";
      else if (
        /trabalho|estudo|telas|postura|atividade/i.test(
          tip.title + " " + tip.content
        )
      )
        topic = "habitos";
      filteredCards.push(Object.assign({}, tip, { topic }));
    }
  }

  // === IMC: se o usuário pediu e forneceu dados válidos, inserir resultado e dicas no array de cards
  if (data.calcularIMC === "sim") {
    const peso = parseFloat(data.pesoIMC) || 0;
    const alturaCm = parseFloat(data.alturaIMC) || 0;
    if (peso > 0 && alturaCm > 0) {
      const alturaM = alturaCm / 100;
      const imc = peso / (alturaM * alturaM);
      const imcRounded = imc.toFixed(1);
      // interpretação adaptada por idade (se fornecida) usando faixas predefinidas
      const idade = parseInt(data.idade) || null;
      function getAgeGroupInfo(age) {
        if (!age) return null;
        if (age >= 5 && age <= 9) {
          return {
            min: 13.0,
            max: 17.0,
            avg: 15.0,
            note: "Em crianças, o IMC é avaliado por percentis (IMC-idade/sexo). Esta faixa é uma estimativa.",
          };
        }
        if (age >= 10 && age <= 14) {
          return {
            min: 14.0,
            max: 21.0,
            avg: 17.5,
            note: "Grande variação por idade e sexo; interpretar com tabelas BMI-for-age (percentis).",
          };
        }
        if (age >= 15 && age <= 19) {
          return {
            min: 17.0,
            max: 24.0,
            avg: 20.5,
            note: "A partir dos ~18–20 anos a interpretação aproxima-se da dos adultos; continue usando percentis até 19 anos.",
          };
        }
        if (age >= 20 && age <= 39) {
          return {
            min: 18.5,
            max: 24.9,
            avg: 21.7,
            note: "Faixa “peso saudável” padrão usada por WHO/CDC para adultos.",
          };
        }
        if (age >= 40 && age <= 59) {
          return {
            min: 18.5,
            max: 24.9,
            avg: 21.7,
            note: "Mesma faixa de referência, mas a composição corporal muda com o envelhecimento; considere perímetro da cintura e % gordura.",
          };
        }
        if (age >= 60) {
          return {
            min: 18.5,
            max: 27.0,
            avg: 24.0,
            note: "Para idosos a interpretação pode variar; alguns estudos apontam vantagem em IMCs ligeiramente maiores. Avalie força muscular e funcionalidade.",
          };
        }
        return null;
      }

      const groupInfo = getAgeGroupInfo(idade);
      let imcStatus = "";
      let imcLabel = "";
      let imcNote = "";

      if (!groupInfo) {
        // sem idade válida: cair em classificação adulta padrão
        if (imc < 18.5) imcLabel = "Abaixo do normal (adulto)";
        else if (imc <= 24.9) imcLabel = "Normal (adulto)";
        else imcLabel = "Acima do normal (adulto)";
        imcNote = "Usando cortes WHO/CDC para adultos (18,5–24,9).";
      } else {
        imcNote = groupInfo.note;
        if (imc < groupInfo.min) {
          imcStatus = "Abaixo do normal";
        } else if (imc >= groupInfo.min && imc <= groupInfo.max) {
          imcStatus = "Na faixa saudável";
        } else {
          imcStatus = "Acima do normal";
        }
        imcLabel = imcStatus;
      }

      // montar conteúdo com intervalo e IMC médio quando disponível
      let rangeText = "";
      if (groupInfo) {
        rangeText = ` Intervalo saudável estimado para sua faixa etária: ${groupInfo.min}–${groupInfo.max} kg/m² (IMC médio ≈ ${groupInfo.avg}).`;
      }

      // Construir um texto mais simples e direto para o usuário
      let contentText = "";
      if (idade && idade < 18) {
        contentText = `Para a sua idade (${idade} anos) o IMC deve ser interpretado por percentis (idade/sexo). Este valor é indicativo: ${imcRounded}. Consulte um pediatra para avaliação precisa.`;
      } else {
        const range = groupInfo
          ? `${groupInfo.min}–${groupInfo.max}`
          : "18.5–24.9";
        const avg = groupInfo ? groupInfo.avg : 21.7;
        const healthy = groupInfo
          ? imc >= groupInfo.min && imc <= groupInfo.max
          : imc >= 18.5 && imc <= 24.9;
        if (healthy) {
          contentText = `Na sua faixa (${range} kg/m², IMC médio ≈ ${avg}) seu IMC é ${imcRounded} e está dentro da faixa saudável. Mantenha hábitos saudáveis para conservar esse resultado.`;
        } else {
          const aboveOrBelow =
            imc < (groupInfo ? groupInfo.min : 18.5)
              ? "abaixo do normal"
              : "acima do normal";
          contentText = `Na sua faixa (${range} kg/m², IMC médio ≈ ${avg}) seu IMC é ${imcRounded} e está ${aboveOrBelow}. Com pequenas correções na alimentação e na atividade física você tende a melhorar. Mudanças bruscas devem ser feitas apenas com acompanhamento médico.`;
        }
      }

      // Inserir card IMC sem adicionar o sexo ao final do texto
      filteredCards.push({
        type: "positive",
        title: `Resultado IMC: ${imcRounded} — ${imcLabel}`,
        content: contentText,
        topic: "imc",
      });

      // dicas genéricas de IMC (máx 4) adaptadas por idade
      let imcDicas = [];
      if (idade && idade < 18) {
        imcDicas = [
          {
            type: "positive",
            title: "1. Crescimento saudável",
            content:
              "Para crianças e adolescentes, priorize uma dieta balanceada rica em nutrientes essenciais para o desenvolvimento. Consulte o pediatra para avaliação por percentil.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "2. Atividades lúdicas e regulares",
            content:
              "Estimule brincadeiras ativas, esportes e tempo ao ar livre para promover desenvolvimento físico e hábitos saudáveis.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "3. Evite dietas restritivas",
            content:
              "Em jovens, dietas severas podem prejudicar o crescimento. Procure orientação especializada antes de mudanças drásticas.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "4. Sono e rotina",
            content:
              "Boa noite de sono e rotina consistente são fundamentais para o crescimento e controle do apetite.",
            topic: "imc",
          },
        ];
      } else if (idade && idade >= 65) {
        imcDicas = [
          {
            type: "positive",
            title: "1. Mantenha força muscular",
            content:
              "Exercícios de resistência leves ajudam a preservar massa muscular, importante para mobilidade e saúde em idades avançadas.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "2. Nutrição com proteína adequada",
            content:
              "Inclua fontes de proteína magra e alimentos ricos em nutrientes para reduzir a perda muscular associada ao envelhecimento.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "3. Acompanhamento médico",
            content:
              "Consulte um profissional para ajustar metas e interpretar o IMC considerando composição corporal e fragilidade.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "4. Equilíbrio e prevenção de quedas",
            content:
              "Inclua exercícios de equilíbrio e mobilidade para reduzir risco de quedas e manter autonomia.",
            topic: "imc",
          },
        ];
      } else {
        imcDicas = [
          {
            type: "positive",
            title: "1. Priorize uma alimentação equilibrada",
            content:
              "Inclua mais frutas, legumes, verduras e proteínas magras no dia a dia. Reduzir ultraprocessados e bebidas açucaradas faz diferença sem precisar cortar tudo de uma vez.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "2. Mantenha-se ativo regularmente",
            content:
              "A prática de exercícios não precisa ser intensa — caminhadas, ciclismo ou esportes já ajudam a aumentar o gasto calórico e melhorar o bem-estar.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "3. Beba bastante água",
            content:
              "A hidratação auxilia na digestão, reduz a retenção de líquidos e ajuda a controlar a sensação de fome, evitando excessos nas refeições.",
            topic: "imc",
          },
          {
            type: "positive",
            title: "4. Durma bem e reduza o estresse",
            content:
              "O sono regulado e o controle do estresse contribuem para o equilíbrio hormonal, diminuindo a tendência ao ganho de peso.",
            topic: "imc",
          },
        ];
      }

      imcDicas.slice(0, 4).forEach((d) => filteredCards.push(d));
    }
  }

  // Agrupar por tópico
  const groups = filteredCards.reduce((acc, tip) => {
    const t = tip.topic || "outros";
    if (!acc[t]) acc[t] = [];
    acc[t].push(tip);
    return acc;
  }, {});

  // Ordem de exibição: sono primeiro (se houver), depois IMC, alongamento, habitos, outros
  const order = ["sono", "imc", "alongamento", "habitos", "outros"];
  order.forEach((groupKey) => {
    const items = groups[groupKey];
    if (!items || items.length === 0) return;

    // Criar um wrapper de grupo para garantir separação entre título e os cards
    // usamos 'display: contents' via CSS para que os filhos sejam tratados pelo grid do container
    const groupWrapper = document.createElement("div");
    groupWrapper.className = "group-block";
    cardsContainer.appendChild(groupWrapper);

    // Para grupos que não são 'sono', inserir mini-título dentro do wrapper
    const titleMap = {
      imc: "Resultado IMC",
      alongamento: "Alongamentos & Postura",
      habitos: "Hábitos & Rotina",
      outros: "Outras Dicas",
    };
    if (groupKey !== "sono") {
      const mini = document.createElement("div");
      mini.className = "mini-title";
      mini.textContent = titleMap[groupKey] || "Dicas";
      groupWrapper.appendChild(mini);
    }

    // container interno para os itens do grupo (permite controle se quisermos agrupá-los)
    const itemsContainer = document.createElement("div");
    itemsContainer.className = "group-items";
    groupWrapper.appendChild(itemsContainer);

    // se o grupo tem apenas 1 item, dar classe para ocupar toda a largura
    const singleFull = items.length === 1;
    items.forEach((it, idx) => {
      const card = document.createElement("div");
      card.className = `card ${
        it.type === "positive" ? "card-positive" : "card-negative"
      }`;
      // regra especial: no grupo 'imc', o primeiro card (resultado) deve ocupar toda a largura
      if (groupKey === "imc" && idx === 0) {
        card.classList.add("full-row");
      } else if (singleFull) {
        card.classList.add("full-row");
      } else if (groupKey === "habitos" && idx === items.length - 1) {
        // último card do grupo 'habitos' ocupa o espaço restante (ideal para layout com colunas)
        card.classList.add("full-row");
      }
      card.innerHTML = `<h3>${it.title}</h3><p>${it.content}</p>`;
      itemsContainer.appendChild(card);
    });
  });

  // (IMC agregado diretamente em filteredCards acima)

  // === Alongamentos / Dicas rápidas (parte 5) — inserir como cards no mesmo container ===
  const alongamentoTips = [];
  if (data.dicasAlongamento === "sim") {
    alongamentoTips.push({
      title: "Alongamento Rápido: Pescoço",
      content:
        "Incline a cabeça lentamente para cada lado por 15-20s, repetindo 2x. Ajuda a aliviar tensão cervical.",
    });
    alongamentoTips.push({
      title: "Alongamento Rápido: Ombros",
      content:
        "Eleve os ombros em direção às orelhas e solte; depois puxe um braço sobre o peito por 20s. Repita 2x.",
    });

    if (data.senteDores === "sim") {
      alongamentoTips.push({
        title: "Alívio para Costas",
        content:
          "De pé, apoie as mãos na cintura e faça uma extensão suave da coluna por 10-15s. Repita 3x.",
      });
    }

    if (data.posturaTelas === "nao" || data.posturaTelas === "parcialmente") {
      alongamentoTips.push({
        title: "Ajuste de Postura",
        content:
          "Verifique a altura da tela: ela deve estar ao nível dos olhos. Sente-se com os pés apoiados e o core levemente ativado.",
      });
    }
  }

  if (alongamentoTips.length > 0 && cardsContainer) {
    // header card opcional
    const headerCard = document.createElement("div");
    headerCard.className = "card last-card alongamento-header";
    headerCard.innerHTML = "<h3>🧘‍♂️ Alongamentos & Dicas Rápidas</h3>";
    cardsContainer.appendChild(headerCard);

    alongamentoTips.forEach((tip) => {
      const card = document.createElement("div");
      card.className = "card card-positive";
      card.innerHTML = `<h3>${tip.title}</h3><p>${tip.content}</p>`;
      cardsContainer.appendChild(card);
    });
  }

  // Adicionar seção de próximos passos (mantida como um card especial)
  const nextStepsCard = document.createElement("div");
  nextStepsCard.className = "card last-card";
  nextStepsCard.innerHTML = `
    <h3>🎯 Próximos Passos</h3>
    <div class="result-content">
      <p>Com base em suas respostas, aqui estão algumas ações que você pode tomar para melhorar:</p>
      <ul>
        <li>Implemente uma rotina de sono mais consistente.</li>
        <li>Faça pausas regulares durante o trabalho/estudo.</li>
        <li>Pratique exercícios de alongamento para melhorar a postura.</li>
        <li>Estabeleça limites saudáveis para o uso de telas.</li>
        <li>Inclua atividade física regular em sua rotina.</li>
        <li>Organize seu ambiente de trabalho para reduzir distrações.</li>
        <li>Busque atividades de lazer que promovam relaxamento e bem-estar.</li>
      </ul>
      <p><strong>💡 Dica:</strong> Comece com pequenas mudanças e vá implementando gradualmente. A consistência é mais importante que a perfeição!</p>
    </div>
  `;
  cardsContainer.appendChild(nextStepsCard);

  // Exibir resultados
  resultadosSection.style.display = "block";
  resultadosSection.scrollIntoView({ behavior: "smooth" });
});

// Função para ajustar dinamicamente o margin-top do main baseado na altura do header
function adjustMainMargin() {
  const header = document.getElementById("header");
  const main = document.querySelector("main");

  if (header && main) {
    const headerHeight = header.offsetHeight;
    const extraMargin = 20; // margem extra para evitar sobreposição
    const newMarginTop = headerHeight + extraMargin;

    main.style.marginTop = `${newMarginTop}px`;
    main.style.minHeight = `calc(100vh - ${newMarginTop}px)`;
  }
}

// Ajustar margin quando a página carrega
document.addEventListener("DOMContentLoaded", adjustMainMargin);

// Ajustar margin quando a janela é redimensionada
window.addEventListener("resize", adjustMainMargin);

// Ajustar margin quando o conteúdo do header muda (ex: menu dropdown)
const observer = new MutationObserver(adjustMainMargin);
const header = document.getElementById("header");
if (header) {
  observer.observe(header, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });
}