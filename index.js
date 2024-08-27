const llaves = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
const ingresartexto = document.querySelector(".text-area");
const fotoMuneco = document.querySelector(".img-muñeco");
const text01 = document.querySelector(".texto-uno");
const text02 = document.querySelector(".texto-dos");
const btnEncritar = document.querySelector(".btn-encriptador");
const resultadoIncriptar = document.querySelector(".evaluar");
const botonCopiar = document.querySelector(".btn-copiar");
const btnDesencritar = document.querySelector(".btn-desencriptador");






function encritando(mensajeencritado){
    mensajeencritado = mensajeencritado.toLowerCase()
    for( i = 0; i < llaves.length; i++){
        if(mensajeencritado.includes(llaves[i][0])){
            mensajeencritado = mensajeencritado.replaceAll(llaves[i][0], llaves[i][1])
        }
       
    }
    return mensajeencritado
}


function desencritando(mensajedesencritado){
    mensajedesencritado = mensajedesencritado.toLowerCase()
    for( i = 0; i < llaves.length; i++){
        if(mensajedesencritado.includes(llaves[i][0])){
            mensajedesencritado = mensajedesencritado.replaceAll(llaves[i][1], llaves[i][0])
        }
       
    }
    return mensajedesencritado
}

ingresartexto.addEventListener("input", (e) =>{
    fotoMuneco.style.display = "none";
    text02.textContent = "";
    text01.textContent = "Se esta ingresando el mensaje";
})


btnEncritar.addEventListener("click", (e) =>{
    let mensaje = ingresartexto.value;
    let mensajeEncritado = encritando(mensaje);
    resultadoIncriptar.textContent = mensajeEncritado;
    text01.textContent = "Mensaje Encritado!";
    botonCopiar.style.visibility = "visible";
    text02.textContent = "";
})

btnDesencritar.addEventListener("click", (e) =>{
    let mensaje = ingresartexto.value;
    let mensajeEncritado = desencritando(mensaje);
    resultadoIncriptar.textContent = mensajeEncritado;
    text01.textContent = "Mensaje Desencritado!";
    text02.textContent = "";
    botonCopiar.style.visibility = "visible";
})

botonCopiar.addEventListener("click", (e) =>{
    let copiar = resultadoIncriptar.textContent;
    navigator.clipboard.writeText(copiar).then(()=>{
        
        text01.textContent = "Texto copiado!";
        botonCopiar.style.visibility = "hidden";
    })
})