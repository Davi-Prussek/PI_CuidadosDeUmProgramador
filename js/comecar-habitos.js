const parte_I = document.getElementById("parte-I");
const parte_II = document.getElementById("parte-II");
const parte_III = document.getElementById("parte-III");
const parte_IV = document.getElementById("parte-IV");

const praEsquerda = () => {
    if ((parte_I.style.display === "block")) {
        parte_I.style.display = "none";
        parte_II.style.display = "none";
        parte_III.style.display = "none";
        parte_IV.style.display = "block";

    } else if ((parte_II.style.display === "block")) {
        parte_II.style.display = "none";
        parte_III.style.display = "none";
        parte_IV.style.display = "none";
        parte_I.style.display = "block";

    } else if ((parte_III.style.display === "block")) {
        parte_IV.style.display = "none";
        parte_I.style.display = "none";
        parte_III.style.display = "none";
        parte_II.style.display = "block";

    } else if ((parte_IV.style.display === "block")) {
        parte_IV.style.display = "none";
        parte_II.style.display = "none";
        parte_I.style.display = "none";
        parte_III.style.display = "block";
    }

};

const praDireita = () => {
    if ((parte_I.style.display === "block")) {
        parte_I.style.display = "none";
        parte_II.style.display = "block";

    } else if ((parte_II.style.display === "block")) {
        parte_II.style.display = "none";
        parte_III.style.display = "block";

    } else if ((parte_III.style.display === "block")) {
        parte_III.style.display = "none";
        parte_IV.style.display = "block";

    } else if ((parte_IV.style.display === "block")) {
        parte_IV.style.display = "none";
        parte_I.style.display = "block";
    }

};
const esquerdo = document.getElementById("botao-esquerdo").addEventListener("click", praEsquerda);
const direito = document.getElementById("botao-direito").addEventListener("click", praDireita);
