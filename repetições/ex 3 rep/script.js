let resultado = document.getElementById("divResultado")

let cont = 100
let soma = 0
while(cont > 0){
    soma += cont
    resultado.innerHTML = soma
    cont--
}