let amigosIncluidos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    amigosIncluidos.push(nomeAmigo);
    
    document.getElementById('nome-amigo').value = '';

    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.textContent = amigosIncluidos.join(', ');   
}

function sortear() {
    let maxAmigos = amigosIncluidos.length;
    const minAmigos = 0;

    let x = numeroAleatorio(minAmigos, maxAmigos);
    let amigoSorteado = amigosIncluidos[x];
    
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {}
