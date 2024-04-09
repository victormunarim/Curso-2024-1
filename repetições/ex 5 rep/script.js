let resultado = document.getElementById("divResultado")

let cont = 0
while(cont <= 10){
    let produto = 5 * cont
    resultado.innerHTML += "5 x " + cont + " = " + produto + "<br>"
    cont++
}