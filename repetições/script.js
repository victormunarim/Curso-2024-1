
let resultado = document.getElementById("divResultado")
console.log(resultado)

//resultado.innerHTML = "olaaaa"

let cont = 0
while(cont <= 10){
    //console.log(cont);
    resultado.innerHTML += cont + " patinho foi passear...<br>"
    cont++
}

while(cont > 0){
    resultado.innerHTML += cont + " patinhos voltaram de la<br>"
    cont--
}