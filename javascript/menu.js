let drenagem = document.getElementById('botao_drenagem');
let limpeza_de_pele = document.getElementById('botao_limpeza_de_pele');
let massagem = document.getElementById('botao_massagem');
let ventosaterapia = document.getElementById('botao_ventosaterapia');

drenagem.addEventListener("click", function() {
    document.getElementById("drenagem").scrollIntoView({
        behavior: "smooth"
    });
});

limpeza_de_pele.addEventListener("click", function() {
    document.getElementById("limpeza_de_pele").scrollIntoView({
        behavior: "smooth"
    });
});

massagem.addEventListener("click", function() {
    document.getElementById("massagem").scrollIntoView({
        behavior: "smooth"
    });
});

ventosaterapia.addEventListener("click", function() {
    document.getElementById("ventosaterapia").scrollIntoView({
        behavior: "smooth"
    });
});