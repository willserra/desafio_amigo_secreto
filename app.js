let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); 
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); 
    input.value = ""; 
    atualizarLista(); 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

   
    amigos.forEach((amigo) => {
        let item = document.createElement("li"); 
        item.textContent = amigo; 
        lista.appendChild(item); 
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceSorteado]; 
    
    
    let item = document.createElement("li");
    item.textContent = `🎉 ${amigoSorteado} foi sorteado!`;
    resultado.appendChild(item);
}



     
