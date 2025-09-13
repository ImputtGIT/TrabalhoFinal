// Pega todas as imagens do carrossel
let slides = document.querySelectorAll('.slide'); 

// Índice do slide atual
let indice = 0; 

// Função para mostrar o slide
function showSlide(i) {
    slides.forEach(sl => sl.classList.remove('ativo')); // Esconde todos os slides
    slides[i].classList.add('ativo'); // Exibe o slide atual
}

// Função para alterar o slide com base na direção (+1 ou -1)
function mudarImagem(direcao) {
    // Atualiza o índice com base na direção (avança ou retrocede)
    indice += direcao;

    // Garante que o índice seja cíclico (vai do primeiro ao último slide e vice-versa)
    if (indice < 0) {
        indice = slides.length - 1; // Vai para o último slide
    } else if (indice >= slides.length) {
        indice = 0; // Vai para o primeiro slide
    }

    showSlide(indice); // Atualiza a exibição do slide
}

// Inicializa o carrossel, mostrando o primeiro slide
showSlide(indice);


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


