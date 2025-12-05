document.addEventListener('DOMContentLoaded', () => {
  const HTMLTheme = document.documentElement;
  const bodyTheme = document.body;

  const navTheme = document.querySelector('nav');
  const tela = window.screen.width;
  const headerTheme = document.getElementById('header'); // existe no seu HTML
  const footerTheme = document.querySelector('footer');
  const mainTheme = document.querySelector('main');

  const sectionTheme = document.querySelectorAll('section');
  const fieldsetTheme = document.querySelectorAll('fieldset');
  const divTheme = document.querySelectorAll('div');
  const pTheme = document.querySelectorAll('p');
  const h2Theme = document.querySelectorAll('h2');

  const subBarTheme = document.getElementById('sub-menu-bar');
  const IMCCond = document.getElementById('imcCondicional');

  const setaVoltarTheme = document.getElementById('setaVoltar');

  const botaoOffTheme = document.getElementById('themeButtonOff');
  const botaoOnTheme = document.getElementById('themeButtonOn');

  const resetButton = document.getElementById('resetButton');

  // segurança: se algum elemento essencial estiver faltando, mostramos no console
  if (!headerTheme) console.warn('header não encontrado: verifique id="header"');
  if (!IMCCond) console.warn('imcCondicional não encontrado: verifique id="imcCondicional"');

  // carregar tema salvo
  const temaSalvo = localStorage.getItem('theme');
  if (temaSalvo === 'light') {
    setLight();
  } else {
    setDark();
  }

  function toggleTheme() {
    const atual = localStorage.getItem('theme');
    if (atual === 'light') {
      setDark();
    } else {
      setLight();
    }
  }

  // FUNÇÕES de aplicar tema (com checagens)
  function setLight() {
    // classes seguras
    if (headerTheme) {
      headerTheme.classList.add('light');
      headerTheme.classList.remove('dark');
    }

    if (botaoOnTheme) botaoOnTheme.style.display = 'none';
    if (botaoOffTheme) botaoOffTheme.style.display = 'block';

    if (headerTheme) headerTheme.style.backgroundColor = 'rgb(0, 0, 0)';
    if (subBarTheme) subBarTheme.style.backgroundColor = 'rgb(0, 0, 0)';
    if (setaVoltarTheme) setaVoltarTheme.style.backgroundColor = 'rgb(0,0,0)';
    if (footerTheme) footerTheme.style.background = 'linear-gradient(rgb(8,8,8), rgb(0,0,0))';
    if (mainTheme) mainTheme.style.backgroundColor = 'rgba(5,0,23,1)';
    HTMLTheme.style.backgroundColor = 'rgba(5,0,23,1)';

    sectionTheme.forEach(s => {
      s.style.color = '#ffffff';
      s.style.backgroundColor = 'rgb(0,0,0)';
    });

    fieldsetTheme.forEach(f => { f.style.backgroundColor = 'rgba(5,0,23,1)'; });

    // Divs: deixar explicitamente escuras no modo LIGHT
    divTheme.forEach(d => {
      d.style.backgroundColor = '#000'; // fundo escuro
      // se quiser texto claro nas divs:
      d.style.color = '#fff';
    });

    h2Theme.forEach(h2 => { h2.style.color = '#3c9eff'; });
    pTheme.forEach(p => { p.style.color = '#fff'; });

    if (resetButton) {
      resetButton.style.background = '#fff';
      resetButton.style.color = 'rgba(5,0,23,1)';
    }

    if (IMCCond) {
      IMCCond.style.backgroundColor = '#000';
      IMCCond.style.color = '#fff';
    }

    localStorage.setItem('theme', 'light');
  }

  function setDark() {
    if (headerTheme) {
      headerTheme.classList.add('dark');
      headerTheme.classList.remove('light');
    }

    if (botaoOffTheme) botaoOffTheme.style.display = 'none';
    if (botaoOnTheme) botaoOnTheme.style.display = 'block';

    // remove overrides - volta ao padrão do CSS
    if (headerTheme) headerTheme.style.backgroundColor = '';
    if (subBarTheme) subBarTheme.style.backgroundColor = '';
    if (setaVoltarTheme) setaVoltarTheme.style.backgroundColor = '';
    if (mainTheme) mainTheme.style.backgroundColor = '';
    HTMLTheme.style.backgroundColor = '';

    sectionTheme.forEach(s => {
      s.style.color = '';
      s.style.backgroundColor = '';
    });

    fieldsetTheme.forEach(f => { f.style.backgroundColor = ''; });

    // Divs: remover override no dark (voltar para o padrão do CSS)
    divTheme.forEach(d => {
      d.style.backgroundColor = '';
      d.style.color = '';
    });

    h2Theme.forEach(h2 => { h2.style.color = ''; });
    pTheme.forEach(p => { p.style.color = ''; });

    if (footerTheme) footerTheme.style.background = 'linear-gradient(#0057b3c4, #002457)';

    if (resetButton) {
      resetButton.style.background = '#004d99';
      resetButton.style.color = '';
    }

    if (IMCCond) {
      IMCCond.style.backgroundColor = '#2929295a';
      IMCCond.style.color = '';
    }

    localStorage.setItem('theme', 'dark');
  }

  // eventos para alternar tema — apenas se os botões existirem
  if (botaoOffTheme) botaoOffTheme.addEventListener('click', toggleTheme);
  if (botaoOnTheme) botaoOnTheme.addEventListener('click', toggleTheme);

});
