// ===== CARROSSEL =====

// pega todas as imagens do carrossel
let slides = document.querySelectorAll('.slide'); 

// índice do slide atual
let indice = 0; 

// mostra apenas o slide indicado
function showSlide(i) {
    slides.forEach(sl => sl.classList.remove('ativo')); // esconde todos slides
    slides[i].classList.add('ativo'); // mostra slide i
}

// troca automaticamente a cada 3 segundos
setInterval(() => {
    indice++; // próximo slide
    if(indice >= slides.length) indice = 0; // reinicia se fim
    showSlide(indice); // atualiza exibição
}, 3000); // intervalo 3s






// ===== LEIA MAIS =====

// mostra ou esconde texto extra
function toggleTexto(id) {
    const texto = document.getElementById(id); // pega elemento pelo id
    if (texto.style.display === "none") {
        texto.style.display = "block"; // mostra texto
    } else {
        texto.style.display = "none"; // esconde texto
    }
}
