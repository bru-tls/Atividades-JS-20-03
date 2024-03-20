//Elabore um algoritmo em Java que leia 4 notas de um participante, 
//em variáveis do tipo float e exiba na tela a média final do participante. Veja o exemplo abaixo:

const leia = require('readline-sync')
let nota1
let nota2
let nota3 
let nota4
let media 

nota1 = leia.questionFloat("\nDigite a primeira nota: ", {limitMessage: 'Digite um numero float'});
nota2 = leia.questionFloat("\nDigite a segunda nota: ", {limitMessage: 'Digite um numero float'});
nota3 = leia.questionFloat("\nDigite a terceira nota: ", {limitMessage: 'Digite um numero float'});
nota4 = leia.questionFloat("\nDigite a quarta nota: ", {limitMessage: 'Digite um numero float'});

media = ((nota1 + nota2 + nota3 + nota4) / 4)
console.log ("A sua média é: " + media)