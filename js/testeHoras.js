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

//Pausas
const pausasTrabalho = document.getElementById("pausasTrabalho");
const emojiPausas = document.createElement("span");
pausasTrabalho.insertAdjacentElement("afterend", emojiPausas);

pausasTrabalho.addEventListener("change", ()=> {
  const value = pausasTrabalho.value;
  if(value === "sim") emojiPausas.textContent = "👍";
  else if(value === "nao") emojiPausas.textContent = "👎";
  else emojiPausas.textContent = "";
})


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

/* ===================== Parte 3 ===================== */

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

/* ===================== Parte 4 ===================== */

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

/* ===================== Submissão do Formulário ===================== */

const form = document.querySelector('.horasForm');
const resultadosSection = document.querySelector('.results-section');
const container = resultadosSection.querySelector('.container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Coletar dados
  const data = Object.fromEntries(new FormData(form));

  // Calcular métricas básicas
  const horasTrabalho = parseHoras(data.horasTrabalho || '0');
  const horasEstudo = parseHoras(data.horasEstudo || '0');
  const horasSono = parseHoras(data.horasSono);
  const horasTela = parseHoras(data.horasTela);

  // Analisar aspectos positivos e negativos
  let positivos = 0;
  let negativos = 0;

  // Avaliação rotina
  if (data.avaliacaoRotina === 'muito-boa' || data.avaliacaoRotina === 'boa') positivos++;
  else negativos++;

  // Planejamento
  if (data.planejaAtividades === 'sempre') positivos++;
  else negativos++;

  // Equilíbrio
  if (data.equilibrioRotina === 'sim') positivos++;
  else negativos++;

  // Horas trabalho
  if (horasTrabalho <= 8) positivos++;
  else negativos++;

  // Pausas trabalho
  if (data.pausasTrabalho === 'sim') positivos++;
  else negativos++;

  // Horas estudo
  if (horasEstudo <= 4) positivos++;
  else negativos++;

  // Sono
  if (horasSono >= 7) positivos++;
  else negativos++;

  // Telas
  if (horasTela <= 3) positivos++;
  else negativos++;

  // Postura
  if (data.posturaTelas === 'sim') positivos++;
  else negativos++;

  // Ambiente
  if (data.ambienteSaudavel === 'sim') positivos++;
  else negativos++;

  // Atividade física
  if (data.atividadeFisica === '3-4' || data.atividadeFisica === '5+') positivos++;
  else negativos++;

  // Alimentação
  if (data.alimentacao === 'equilibrada') positivos++;
  else negativos++;

  // Dificuldade
  if (data.dificuldadeRotina !== 'excesso-telas' && data.dificuldadeRotina !== 'sono-ruim') positivos++;
  else negativos++;

  // Gerar número aleatório par (2,4,6,8)
  const numCards = [2,4,6,8][Math.floor(Math.random() * 4)];

  // Preparar conteúdos dos cards baseados na análise
  const cardContents = [];

  // Cards positivos
  const positiveTips = [
    `Parabéns por avaliar sua rotina como ${data.avaliacaoRotina}! Continue assim.`,
    `Planejamento ${data.planejaAtividades} é ótimo para produtividade.`,
    `Equilíbrio trabalho/lazer ${data.equilibrioRotina} mostra saúde mental.`,
    `Horas de trabalho ${horasTrabalho.toFixed(1)}h estão adequadas.`,
    `Pausas regulares ajudam na concentração.`,
    `Estudo de ${horasEstudo.toFixed(1)}h é produtivo.`,
    `Sono de ${horasSono.toFixed(1)}h é essencial para saúde.`,
    `Tempo de tela ${horasTela.toFixed(1)}h protege sua visão.`,
    `Postura ${data.posturaTelas} previne dores.`,
    `Ambiente ${data.ambienteSaudavel} favorece o bem-estar.`,
    `Atividade física ${data.atividadeFisica} mantém saudável.`,
    `Alimentação ${data.alimentacao} nutre o corpo.`,
    `Dificuldade ${data.dificuldadeRotina} pode ser trabalhada.`
  ];

  // Cards negativos
  const negativeTips = [
    `Rotina ${data.avaliacaoRotina} pode melhorar com planejamento.`,
    `Falta de planejamento ${data.planejaAtividades} afeta produtividade.`,
    `Equilíbrio ${data.equilibrioRotina} precisa de atenção.`,
    `Horas de trabalho ${horasTrabalho.toFixed(1)}h podem causar burnout.`,
    `Falta de pausas desgasta.`,
    `Estudo de ${horasEstudo.toFixed(1)}h pode ser excessivo.`,
    `Sono de ${horasSono.toFixed(1)}h é insuficiente.`,
    `Tempo de tela ${horasTela.toFixed(1)}h prejudica a visão.`,
    `Postura ${data.posturaTelas} pode causar dores.`,
    `Ambiente ${data.ambienteSaudavel} precisa melhorar.`,
    `Atividade física ${data.atividadeFisica} é baixa.`,
    `Alimentação ${data.alimentacao} desequilibra.`,
    `Dificuldade ${data.dificuldadeRotina} impacta rotina.`
  ];

  // Distribuir cards: mais negativos se mais problemas, etc.
  const total = positivos + negativos;
  const negRatio = negativos / total;
  const posCards = Math.round(numCards * (1 - negRatio));
  const negCards = numCards - posCards;

  // Selecionar aleatoriamente
  const selectedPos = positiveTips.sort(() => 0.5 - Math.random()).slice(0, posCards);
  const selectedNeg = negativeTips.sort(() => 0.5 - Math.random()).slice(0, negCards);

  cardContents.push(...selectedPos, ...selectedNeg);

  // Limpar container e adicionar saudação
  container.innerHTML = `
    <h2>📊 Seus Resultados Personalizados</h2>
    <div id="saudacaoPersonalizada">
      <p>Olá ${data.nome}, com base nas suas respostas, geramos ${numCards} cards de feedback.</p>
      <p>Aspectos positivos: ${positivos}, negativos: ${negativos}.</p>
    </div>
  `;

  // Criar cards
  cardContents.forEach(content => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <h3>💡 Dica Personalizada</h3>
      <div class="result-content">
        <p>${content}</p>
      </div>
    `;
    container.appendChild(card);
  });

  // Adicionar seção de próximos passos
  const nextSteps = document.createElement('div');
  nextSteps.className = 'result-card';
  nextSteps.innerHTML = `
    <h3>🎯 Próximos Passos</h3>
    <div class="result-content">
      <p>Com base em suas respostas, aqui estão algumas ações que você pode tomar:</p>
      <ol>
        <li>Implemente uma rotina de sono mais consistente</li>
        <li>Faça pausas regulares durante o trabalho/estudo</li>
        <li>Pratique exercícios de alongamento para melhorar a postura</li>
        <li>Estabeleça limites saudáveis para o uso de telas</li>
        <li>Inclua atividade física regular em sua rotina</li>
      </ol>
      <div class="cta-section">
        <p><strong>💡 Dica:</strong> Comece com pequenas mudanças e vá implementando gradualmente. A consistência é mais importante que a perfeição!</p>
        <button type="button" onclick="window.print()" class="print-btn">🖨️ Imprimir Resultados</button>
        <button type="button" onclick="location.reload()" class="restart-btn">🔄 Fazer Teste Novamente</button>
      </div>
    </div>
  `;
  container.appendChild(nextSteps);

  // Exibir resultados
  resultadosSection.style.display = 'block';
  resultadosSection.scrollIntoView({ behavior: 'smooth' });
});