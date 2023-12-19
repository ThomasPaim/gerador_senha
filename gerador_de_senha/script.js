const quantidade = document.getElementById('quant')
const range = document.getElementById('range')
const senha = document.getElementById('senha')
const resultado = document.getElementById('resultado')

resultado.classList.add('hidden')
senha.classList.add('hidden')

let novaSenha = ""

quantidade.innerHTML = range.value 

range.oninput = function(){
    quantidade.innerHTML  = this.value
}

let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';


function gerar(){

   resultado.classList.remove('hidden')
   senha.classList.remove('hidden')

    let senhaGerada = ""

    for(let i = 0; i<range.value; i++){

        let indiceAleatorio =  Math.floor(Math.random()* caracteres.length) 

        senhaGerada += caracteres.charAt(indiceAleatorio)
    }

    novaSenha = senhaGerada
    senha.textContent = novaSenha
}
