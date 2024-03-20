const leia = require('readline-sync')

let n1
let n2
let n3
let n4
let produto1
let produto2
let diferenca

n1 = leia.questionFloat("\nDigite o primeiro numero: ", {limitMessage: 'Digite um numero float'});
n2 = leia.questionFloat("\nDigite o segundo numero: ", {limitMessage: 'Digite um numero float'});
n3 = leia.questionFloat("\nDigite o terceiro numero: ", {limitMessage: 'Digite um numero float'});
n4 = leia.questionFloat("\nDigite o quarto numero: ", {limitMessage: 'Digite um numero float'});


diferenca = (n1 * n2) - (n3 * n4)

console.log ("A diferença é: " + diferenca)
    
