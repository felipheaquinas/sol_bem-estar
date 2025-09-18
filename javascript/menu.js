let drenagem = window.document.getElementById('drenagem');

let limpeza_de_pele = window.document.getElementById('limpeza_de_pele');

let massagem = window.document.getElementById('massagem');

let ventosaterapia = window.document.getElementById('ventosaterapia');

let design = window.document.getElementById('design');

drenagem.addEventListener("click", function() {
    document.body.scrollTop =  750
    document.documentElement.scrollTop = 750
});

limpeza_de_pele.addEventListener("click", function() {
    document.body.scrollTop = 1605
    document.documentElement.scrollTop = 1605
});

massagem.addEventListener("click", function() {
    document.body.scrollTop = 2142
    document.documentElement.scrollTop = 2142
});

ventosaterapia.addEventListener("click", function() {
    document.body.scrollTop = 2679
    document.documentElement.scrollTop = 2679
});

design.addEventListener("click", function() {
    document.body.scrollTop = 3220
    document.documentElement.scrollTop = 3220
});
