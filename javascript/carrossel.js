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

const secoes = document.querySelectorAll('section');

secoes.forEach(secao => {
    const container = secao.querySelector('.carrossel-content');
    const cards = container.querySelectorAll('.slide');
    const btnAnt = secao.querySelector('.anterior');
    const btnProx = secao.querySelector('.proximo');

    let indice = 0;

    function atualizarCarrossel() {
        const largura = cards[0].offsetWidth;
        container.style.transform = `translateX(-${indice * largura}px)`;

        btnAnt.disabled = indice === 0;
        btnProx.disabled = indice === cards.length - 1;
    }

    btnAnt.addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        atualizarCarrossel();
    }
    });

    btnProx.addEventListener('click', () => {
    if (indice < cards.length - 1) {
        indice++;
        atualizarCarrossel();
    }
    });

    atualizarCarrossel();
});