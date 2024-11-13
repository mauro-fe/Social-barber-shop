let indiceImagem = 0;
const imagens = document.querySelectorAll('.carrossel img');

function mostrarImagem(indice) {
    imagens.forEach(img => img.classList.remove('active'));
    imagens[indice].classList.add('active');
}

function mudarImagem(direcao) {
    indiceImagem = (indiceImagem + direcao + imagens.length) % imagens.length;
    mostrarImagem(indiceImagem);
}