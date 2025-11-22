    //Parte principal
    const HTML = document.querySelector("html");

    //Sub parte principal
    const body = document.querySelector("body");

    //3 partes principais(cabeça, torso e pé)
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    //Partes específicas
    const section = document.querySelectorAll("section");
    const div = document.querySelectorAll("div");
    const p1 = document.querySelectorAll("p");
    const h1 = document.querySelectorAll("h1");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h4 = document.querySelectorAll("h4");
    const h5 = document.querySelectorAll("h5");
    const h6 = document.querySelectorAll("h6");
    const span = document.querySelectorAll("span");
    const subBar = document.getElementById("sub-menu-bar");

    const setaVoltar = document.getElementById("setaVoltar");

    const botaoOff = document.getElementById("themeButtonOff");
    const botaoOn = document.getElementById("themeButtonOn")

    const ligadoDesligado = document.getElementById("desligado");

    window.onload = () => {
        const tema = localStorage.getItem("theme");
        if (tema == "light") {
            light();
        } else {
            dark();
        }
    }
    const ligaDesliga = () => {
        const atual = localStorage.getItem("theme");
        if (atual == "light") {
            dark();
        } else {
            light();
        }   }   

    function light() {
        botaoOn.style.display = "none";
        botaoOff.style.display = "block";
        
        header.style.backgroundColor = "rgb(0, 0, 0)";
        subBar.style.backgroundColor = "rgba(0, 0, 0, 1)"
        setaVoltar.style.backgroundColor = "rgb( 0, 0, 0)";
        footer.style.background = "linear-gradient( rgba(8, 8, 8, 1), rgba(0, 0, 0, 1))";
        main.style.backgroundColor = "rgba(5, 0, 23, 1)";
        HTML.style.backgroundColor = "rgba(16, 16, 16, 1)";
        body.style.backgroundColor = "rgba(5, 0, 23, 1)";
        section.forEach(s => {s.style.color = "#ffffff";});
        div.forEach(d => { d.style.color = "#ffffff"; });
        div.forEach(d => { d.style.backgroundColor = "black"; });
        h3.forEach(h3 => {h3.style.color = "#0052a4"});
        h2.forEach(h2 => {h2.style.color = "#0052a4"});
        p1.forEach(p => {p.style.color = "#ffffff"});
        localStorage.setItem("theme", "light");
    }

    function dark() {
        botaoOn.style.display = "block";
        botaoOff.style.display = "none";
        header.style.backgroundColor = "";
        subBar.style.backgroundColor = ""
        setaVoltar.style.backgroundColor = "";
        footer.style.background = "";
        main.style.backgroundColor = "";
        HTML.style.backgroundColor = "";
        body.style.backgroundColor = "";
        section.forEach(s => {s.style.color = "";});
        div.forEach(d => { d.style.color = ""; });
        div.forEach(d => { d.style.backgroundColor = ""; });
        h3.forEach(h3 => {h3.style.color = ""});
        h2.forEach(h2 => {h2.style.color = ""});
        p1.forEach(p => {p.style.color = ""});
        localStorage.setItem("theme", "dark");
    }

    botaoOff.addEventListener("click", ligaDesliga);
    botaoOn.addEventListener("click", ligaDesliga);