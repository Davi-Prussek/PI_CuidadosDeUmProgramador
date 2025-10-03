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
  else if (horas <= 3) emojiTrabalho.textContent = "💻😊";
  else if (horas <= 5) emojiTrabalho.textContent = "💻😐";
  else if (horas <= 8) emojiTrabalho.textContent = "💻⚠️";
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
    if (horasTrabalho <= 3) positivos += 2;
    else if (horasTrabalho <= 5) positivos += 1; // Tempo considerável
    else if (horasTrabalho <= 8) negativos += 1; // Ruim
    else negativos += 3; // Muito ruim

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

  // Parte 3: Sono - Desenvolvido com mais critérios
  if (horasSono >= 7 && horasSono <= 9) positivos += 3; // Sono ideal
  else if (horasSono >= 6 && horasSono < 7)
    positivos += 1; // Sono quase suficiente
  else if (horasSono >= 9.5 && horasSono <= 10)
    negativos += 1; // Sono em excesso
  else if (horasSono < 4) negativos += 4; // Sono muito insuficiente - crítico
  else if (horasSono < 6) negativos += 3; // Sono insuficiente
  else if (horasSono > 10) negativos += 2; // Sono excessivo
  else negativos += 1; // Outros casos

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
      condition: () => data.avaliacaoRotina === "muito-boa" || data.avaliacaoRotina === "boa"
    },
    {
      type: "positive",
      title: "Planejamento Eficaz",
      content: `Planejar suas atividades ${data.planejaAtividades} é uma chave para a produtividade e redução do estresse. Mantenha esse hábito!`,
      condition: () => data.planejaAtividades === "sempre"
    },
    {
      type: "positive",
      title: "Equilíbrio Saudável",
      content: `Seu equilíbrio entre vida pessoal e profissional é ${data.equilibrioRotina}. Isso é crucial para evitar o esgotamento.`,
      condition: () => data.equilibrioRotina === "sim"
    },
    {
      type: "positive",
      title: "Jornada de Trabalho Adequada",
      content: `Com ${horasTrabalho.toFixed(
        1
      )}h de trabalho, você mantém uma carga saudável que preserva sua energia e bem-estar.`,
      condition: () => data.trabalho === "on" && horasTrabalho <= 3
    },
    {
      type: "positive",
      title: "Pausas Inteligentes",
      content: `Fazer pausas regularmente é vital para a saúde mental e física. Continue priorizando-as!`,
      condition: () => data.trabalho === "on" && data.pausasTrabalho === "sim"
    },
    {
      type: "positive",
      title: "Estudo Equilibrado",
      content: `Suas ${horasEstudo.toFixed(
        1
      )}h de estudo representam um tempo produtivo e saudável. Continue intercalando com pausas regulares.`,
      condition: () => data.estudar === "on" && horasEstudo <= 3
    },
    {
      type: "positive",
      title: "Sono Reparador",
      content: `Suas ${horasSono.toFixed(
        1
      )}h de sono estão na faixa ideal (7-9h), proporcionando recuperação completa para corpo e mente.`,
      condition: () => horasSono >= 7 && horasSono <= 9
    },
    {
      type: "positive",
      title: "Uso Consciente de Telas",
      content: `Suas ${horasTela.toFixed(
        1
      )}h de tela demonstram uso moderado e consciente. Excelente para a saúde ocular!`,
      condition: () => horasTela <= 2
    },
    {
      type: "positive",
      title: "Postura Atenta",
      content: `Sua atenção à postura é fundamental para prevenir dores e lesões a longo prazo.`,
      condition: () => data.posturaTelas === "sim"
    },
    {
      type: "positive",
      title: "Ambiente Propício",
      content: `Um ambiente saudável contribui muito para sua concentração e bem-estar.`,
      condition: () => data.ambienteSaudavel === "sim"
    },
    {
      type: "positive",
      title: "Atividade Física",
      content: `Sua frequência de atividade física (${data.atividadeFisica}) é um pilar importante para sua saúde em geral.`,
      condition: () => data.atividadeFisica === "3-4" || data.atividadeFisica === "5+"
    },
    {
      type: "positive",
      title: "Alimentação Balanceada",
      content: `Uma alimentação equilibrada é a base para ter energia e disposição ao longo do dia.`,
      condition: () => data.alimentacao === "equilibrada"
    },
    {
      type: "positive",
      title: "Tempo Livre Bem Aproveitado",
      content: `É ótimo que você inclua atividades saudáveis como lazer ao ar livre e atividade física no seu tempo livre.`,
      condition: () => data.tempoLivre === "on" && (data.lazerLivre === "on" || data.atividadeFisicaLivre === "on")
    },
    {
      type: "positive",
      title: "Qualidade do Sono Excelente",
      content: `Sua rotina de sono está otimizada! Dormir entre 7-9h é fundamental para consolidação da memória, recuperação muscular e regulação hormonal.`,
      condition: () => horasSono >= 7 && horasSono <= 9
    },
    {
      type: "positive",
      title: "Higiene do Sono Adequada",
      content: `Manter uma quantidade adequada de sono fortalece seu sistema imunológico e melhora sua capacidade de concentração durante o dia.`,
      condition: () => horasSono >= 7 && horasSono <= 9
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
      title: "Atenção à Jornada de Trabalho",
      content: `${horasTrabalho.toFixed(1)}h de trabalho ${
        horasTrabalho > 5
          ? "é uma carga excessiva que pode prejudicar sua saúde"
          : "já representa um tempo considerável"
      }. Considere pausas mais frequentes e otimização de tarefas.`,
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
      title: "Cuidado com o Tempo de Estudo",
      content: `${horasEstudo.toFixed(1)}h de estudo ${
        horasEstudo > 5
          ? "é excessivo e pode causar fadiga mental"
          : "já é um tempo considerável"
      }. Intercale com pausas e atividades relaxantes para manter a eficiência.`,
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
    },
    {
      type: "negative",
      title: "Tempo de Tela Excessivo",
      content: `${horasTela.toFixed(1)}h de tela ${
        horasTela > 5
          ? "é prejudicial para seus olhos e bem-estar mental"
          : "já representa um tempo considerável"
      }. Implemente pausas regulares e considere atividades offline.`,
    },
    {
      type: "negative",
      title: "Ajuste a Postura",
      content: `Sua postura (${
        data.posturaTelas === "sim" ? "sim" : "não"
      }) pode precisar de atenção. Pequenos ajustes evitam complicações com a saúde da coluna.`,
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
      content: `A dificuldade que você enfrenta (${data.dificuldadeRotina}) é um sinal ruim. Busque estratégias para lidar com ela.`,
    },
    {
      type: "negative",
      title: "Sono e Produtividade",
      content: `A falta de sono adequada reduz em até 40% sua capacidade de formar novas memórias e afeta diretamente sua produtividade no trabalho e estudos.`,
    },
    {
      type: "negative",
      title: "Impactos da Privação do Sono",
      content: `Dormir menos que o necessário aumenta o risco de problemas cardiovasculares, diabetes e compromete seu sistema imunológico. Priorize seu descanso!`,
    },
    {
      type: "negative",
      title: "Sono Excessivo - Investigar",
      content: `Dormir mais de 10h regularmente pode indicar problemas de saúde subjacentes ou má qualidade do sono. Considere avaliar sua rotina noturna.`,
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
  const validPositiveTips = positiveTipsPool.filter(tip => !tip.condition || tip.condition());
  const shuffledPositiveTips = validPositiveTips.sort(() => 0.5 - Math.random());
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

  // Se não gerou cards positivos suficientes, ajusta para mais cards negativos
  const totalValidCards = shuffledPositiveTips.length + shuffledNegativeTips.length;
  if (generatedCards.length < numberOfCardsToShow && totalValidCards > generatedCards.length) {
    const remainingSlots = numberOfCardsToShow - generatedCards.length;
    const additionalNegativeCards = Math.min(remainingSlots, shuffledNegativeTips.length - numNegativeCards);
    
    for (let i = numNegativeCards; i < numNegativeCards + additionalNegativeCards; i++) {
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
    <p>Olá <strong>${
      data.nome || "usuário"
    }</strong>, com base nas suas respostas, geramos ${numberOfCardsToShow} cards de feedback.</p>
    <p>Sua pontuação indica <strong>${positivos} ponto(s) positivo(s)</strong> e <strong>${negativos} ponto(s) de atenção</strong> em sua rotina.</p>
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
