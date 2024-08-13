let amigosIncluidos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value.trim();

    if (nomeAmigo == '' || amigosIncluidos.includes(nomeAmigo) ) {
        alert('Por favor, insira um nome válido!');
    } else {
        amigosIncluidos.push(nomeAmigo);
    }

    document.getElementById('nome-amigo').value = '';

    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.textContent = amigosIncluidos.join(', ');   
}

function sortear() {
    embaralhar(amigosIncluidos);

    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigosIncluidos.length < 4) {
        alert('A quantidade de amigos não é permitida!');
    } else {
        for (let i = 0; i < amigosIncluidos.length; i++) {
            if (i == (amigosIncluidos.length - 1)) {
                listaSorteio.innerHTML += amigosIncluidos[i] + ' --> ' + amigosIncluidos[0] + '<br>';
            } else {
                listaSorteio.innerHTML += amigosIncluidos[i] + ' --> ' + amigosIncluidos[i + 1] + '<br>'; 
            }
        }
    } 
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigosIncluidos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
