let numero1 = Number(prompt('Digite um número'))
let numero2 = Number(prompt('Digite outro número'))
let operacao = Number(prompt('Digite (1)adição (2)subtração (3)divisão (4)multiplicação'))
let resultado
switch(operacao){
    case 1: resultado = numero1 + numero2
    break
    case 2: resultado = numero1 - numero2
    break
    case 3: resultado = numero1 / numero2
    break
    case 4: resultado = numero1 * numero2
    default: alert('Operação inválida')
}
alert(`O resultado é: ${resultado}`)