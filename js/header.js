const headerTodos = document.querySelector("header");
header.innerHTML = `<button id="menu-responsivo">
      <img src="img/icons/menu.svg" alt="menu/icon"/>
    </button>
    <a href="index.html" id="titulo_sobreNos"><img src="img/logo_PI-fundo_removido-nova.png" alt="" /></a>
    <nav id="nav">
      <div id="segundo-titulo">
        <h1>
          <a href="index.html" id="titulo_sobreNos-II"><img class="titulo-responsivo"
              src="img/logo_PI-fundo_removido-nova.png" alt="titulo-responsivo" /></a>
        </h1>
      </div>
      <ul class="direcionar_sobreNos">
        <li>
          <a href="index.html">
            <p>Início</p>
          </a>
        </li>
        <li class="comeco">
          <a class="botao" id="botao-I">
            <p>Começar<i class="fa-solid fa-angle-up" style="color: #ffffff;"></i></p>
          </a>
          <ul class="sub-menus" id="sub-menus-I">
            <li>
              <a href="comecar-ambiente.html">
                <p>Ambiente</p>
              </a>
            </li>
            <li>
              <a href="comecar-habitos.html">
                <p>Hábitos</p>
              </a>
            </li>
          </ul>
        </li>
          <li>
          <a href="cuidados.html">
            <p>Cuidados</p>
          </a>
        </li>
        <li>
          <a href="testeHoras.html">
            <p class="link-base">Teste de Horas</p>
          </a>
        </li>
        <li>
          <a href="quiz.html">
            <p class="link-base">Quizzz</p>
          </a>
        </li>
        <li class="sobre-nos">
          <a class="botao-III" id="botao-III">
            <p>Sobre<i class="fa-solid fa-angle-up" style="color: #ffffff;"></i></p>
          </a>
          <ul class="sub-menus" id="sub-menus-III">
            <li>
              <a href="sobreNos.html">
                <p>Nós</p>
              </a>
            </li>
            <li>
              <a href="sobre-o-projeto.html">
                <p>Projeto</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="sub-menu-header" id="sub-menu-bar">
        <li class="theme">
          <button id="themeButtonOff" class="theme">
            <span>Light </span><img class="buttonOff" src="img/icons/botao-desligado.png" alt="icon/off" />
          </button>

          <button id="themeButtonOn" class="theme" style="display: none">
            <span>Dark</span><img class="buttonOn" src="img/icons/botao-desligado.png" alt="icon/on" />
          </button>
        </li>
      </ul>
    </nav>
`;