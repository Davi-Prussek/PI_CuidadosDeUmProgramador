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

/* ===================== Submissão do Formulário ===================== */

const form = document.querySelector(".horasForm");
const resultadosSection = document.querySelector(".results-section");
const cardsContainer = resultadosSection.querySelector(".cards-container"); // Seleciona o novo container de cards

form.addEventListener("submit", (e) => {
  e.preventDefault();

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
    if (horasTrabalho <= 8) positivos += 2;
    else if (horasTrabalho <= 10) negativos += 1;
    else negativos += 2;

    if (data.pausasTrabalho === "sim") positivos += 1;
    else negativos += 1;
  }

  if (data.estudar === "on") {
    // Verifica se a checkbox de estudo está marcada
    if (horasEstudo <= 4) positivos += 2;
    else if (horasEstudo <= 7) positivos += 1;
    else negativos += 2;
  }

  if (data.tempoLivre === "on") {
    // Verifica se a checkbox de tempo livre está marcada
    if (data.telasLivre === "on") negativos += 1; // Uso excessivo de telas no tempo livre
    if (data.atividadeFisicaLivre === "on") positivos += 2;
    if (data.lazerLivre === "on") positivos += 1;
  }

  // Parte 3: Sono
  if (horasSono >= 7 && horasSono <= 9) positivos += 3;
  else if (horasSono >= 6 || horasSono <= 10) positivos += 1;
  else negativos += 3;

  // Parte 4: Hábitos e Saúde
  if (horasTela <= 3) positivos += 2;
  else if (horasTela <= 5) negativos += 1;
  else negativos += 2;

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
    },
    {
      type: "positive",
      title: "Planejamento Eficaz",
      content: `Planejar suas atividades ${data.planejaAtividades} é uma chave para a produtividade e redução do estresse. Mantenha esse hábito!`,
    },
    {
      type: "positive",
      title: "Equilíbrio Saudável",
      content: `Seu equilíbrio entre vida pessoal e profissional é ${data.equilibrioRotina}. Isso é crucial para evitar o esgotamento.`,
    },
    {
      type: "positive",
      title: "Jornada de Trabalho Adequada",
      content: `Com ${horasTrabalho.toFixed(
        1
      )}h de trabalho, você está em um bom caminho para manter a energia e o foco.`,
    },
    {
      type: "positive",
      title: "Pausas Inteligentes",
      content: `Fazer pausas ${
        data.pausasTrabalho === "sim" ? "regularmente" : "raramente"
      } é vital para a saúde mental e física. Continue priorizando-as!`,
    },
    {
      type: "positive",
      title: "Estudo Focado",
      content: `Dedicar ${horasEstudo.toFixed(
        1
      )}h ao estudo é um tempo produtivo. Lembre-se de intercalar com descansos.`,
    },
    {
      type: "positive",
      title: "Sono Reparador",
      content: `Com ${horasSono.toFixed(
        1
      )}h de sono, você está fornecendo ao seu corpo o descanso necessário para recarregar.`,
    },
    {
      type: "positive",
      title: "Uso Consciente de Telas",
      content: `Seu tempo de tela de ${horasTela.toFixed(
        1
      )}h é um bom indicativo de uso consciente. Proteja seus olhos!`,
    },
    {
      type: "positive",
      title: "Postura Atenta",
      content: `Sua atenção à postura (${
        data.posturaTelas === "sim" ? "sim" : "não"
      }) é fundamental para prevenir dores e lesões a longo prazo.`,
    },
    {
      type: "positive",
      title: "Ambiente Propício",
      content: `Um ambiente ${
        data.ambienteSaudavel === "sim" ? "saudável" : "não tão saudável"
      } contribui muito para sua concentração e bem-estar.`,
    },
    {
      type: "positive",
      title: "Atividade Física",
      content: `Sua frequência de atividade física (${data.atividadeFisica}) é um pilar importante para sua saúde geral.`,
    },
    {
      type: "positive",
      title: "Alimentação Balanceada",
      content: `Uma alimentação ${data.alimentacao} é a base para ter energia e disposição ao longo do dia.`,
    },
    {
      type: "positive",
      title: "Tempo Livre Bem Aproveitado",
      content: `É ótimo que você inclua ${
        data.lazerLivre === "on" ? "lazer ao ar livre" : ""
      } e ${
        data.atividadeFisicaLivre === "on" ? "atividade física" : ""
      } no seu tempo livre.`,
    },
  ];

  // Dicas Negativas (baseadas em pontos de melhoria)
  const negativeTipsPool = [
    {
      type: "negative",
      title: "Atenção à Rotina",
      content: `Sua rotina é ${data.avaliacaoRotina}. Pequenas mudanças podem trazer grandes benefícios para seu dia a dia.`,
    },
    {
      type: "negative",
      title: "Melhore o Planejamento",
      content: `Planejar suas atividades ${data.planejaAtividades} pode ser um ponto de melhoria. Tente organizar seu dia com antecedência.`,
    },
    {
      type: "negative",
      title: "Busque Equilíbrio",
      content: `Seu equilíbrio entre vida pessoal e profissional é ${data.equilibrioRotina}. É importante buscar mais harmonia para evitar o esgotamento.`,
    },
    {
      type: "negative",
      title: "Cuidado com a Jornada",
      content: `Trabalhar ${horasTrabalho.toFixed(
        1
      )}h pode ser exaustivo. Considere otimizar seu tempo ou delegar tarefas.`,
    },
    {
      type: "negative",
      title: "Priorize Pausas",
      content: `Você ${
        data.pausasTrabalho === "sim" ? "faz pausas" : "não faz pausas"
      }. Pausas curtas e regulares podem aumentar sua produtividade e bem-estar.`,
    },
    {
      type: "negative",
      title: "Gerencie o Estudo",
      content: `Dedicar ${horasEstudo.toFixed(
        1
      )}h ao estudo pode ser excessivo. Garanta que você não esteja sobrecarregando sua mente.`,
    },
    {
      type: "negative",
      title: "Invista no Sono",
      content: `Com apenas ${horasSono.toFixed(
        1
      )}h de sono, seu corpo pode não estar se recuperando totalmente. Tente melhorar sua higiene do sono.`,
    },
    {
      type: "negative",
      title: "Reduza o Tempo de Tela",
      content: `Seu tempo de tela de ${horasTela.toFixed(
        1
      )}h é alto. Considere limites para proteger sua visão e mente.`,
    },
    {
      type: "negative",
      title: "Ajuste a Postura",
      content: `Sua postura (${
        data.posturaTelas === "sim" ? "sim" : "não"
      }) pode precisar de atenção. Pequenos ajustes evitam grandes dores.`,
    },
    {
      type: "negative",
      title: "Otimize seu Ambiente",
      content: `Um ambiente ${
        data.ambienteSaudavel === "sim" ? "saudável" : "não tão saudável"
      } pode ser melhorado para aumentar seu foco e conforto.`,
    },
    {
      type: "negative",
      title: "Mais Atividade Física",
      content: `Sua frequência de atividade física (${data.atividadeFisica}) é baixa. Incluir mais movimento pode trazer muitos benefícios.`,
    },
    {
      type: "negative",
      title: "Revise a Alimentação",
      content: `Sua alimentação ${data.alimentacao} pode ser um ponto de melhoria. Uma dieta balanceada é fundamental para sua energia.`,
    },
    {
      type: "negative",
      title: "Atenção à Dificuldade",
      content: `A dificuldade que você enfrenta (${data.dificuldadeRotina}) é um sinal. Busque estratégias para lidar com ela.`,
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

  // Adicionar dicas positivas aleatoriamente
  const shuffledPositiveTips = positiveTipsPool.sort(() => 0.5 - Math.random());
  for (
    let i = 0;
    i < numPositiveCards && i < shuffledPositiveTips.length;
    i++
  ) {
    generatedCards.push(shuffledPositiveTips[i]);
  }

  // Adicionar dicas negativas aleatoriamente
  const shuffledNegativeTips = negativeTipsPool.sort(() => 0.5 - Math.random());
  for (
    let i = 0;
    i < numNegativeCards && i < shuffledNegativeTips.length;
    i++
  ) {
    generatedCards.push(shuffledNegativeTips[i]);
  }

  // Se por algum motivo não gerou cards suficientes (ex: pools pequenos), preenche com o que sobrou
  while (
    generatedCards.length < numberOfCardsToShow &&
    shuffledPositiveTips.length + shuffledNegativeTips.length >
      generatedCards.length
  ) {
    if (generatedCards.length < shuffledPositiveTips.length) {
      generatedCards.push(shuffledPositiveTips[generatedCards.length]);
    } else if (generatedCards.length < shuffledNegativeTips.length) {
      generatedCards.push(
        shuffledNegativeTips[
          generatedCards.length - shuffledPositiveTips.length
        ]
      );
    }
  }

  // Embaralha os cards gerados para não ficarem sempre na mesma ordem
  generatedCards.sort(() => 0.5 - Math.random());

  // Limpar container e adicionar saudação
  const saudacaoDiv = resultadosSection.querySelector("#saudacaoPersonalizada");
  saudacaoDiv.innerHTML = `
    <p>Olá <strong>${
      data.nome || "usuário"
    }</strong>, com base nas suas respostas, geramos ${numberOfCardsToShow} cards de feedback.</p>
    <p>Sua pontuação indica <strong>${positivos} pontos positivos</strong> e <strong>${negativos} pontos de atenção</strong> em sua rotina.</p>
  `;

  // Limpar cardsContainer antes de adicionar novos
  cardsContainer.innerHTML = "";

  // Criar cards
  generatedCards.forEach((tip) => {
    const card = document.createElement("div");
    card.className = `card ${
      tip.type === "positive" ? "card-positive" : "card-negative"
    }`; // Adiciona classe para estilização
    card.innerHTML = `
      <h3>${tip.title}</h3>
      <p>${tip.content}</p>
    `;
    cardsContainer.appendChild(card);
  });

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
