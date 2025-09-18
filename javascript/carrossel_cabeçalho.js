const carrossel = document.getElementById('carrossel_cabeçalho');
let indice = 0;
const totalImagens = carrossel.children.length;

function atualizarCarrossel() {
    carrossel.style.transform = `translateX(-${indice * 100}%)`;
}

function avancar() {
    indice = (indice + 1) % totalImagens;
    atualizarCarrossel();
}

function voltar() {
    indice = (indice - 1 + totalImagens) % totalImagens;
    atualizarCarrossel();
}

setInterval(avancar, 5000);

