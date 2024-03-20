const leia = require('readline-sync')

let salario
let abono
let novoSalario


salario = leia.questionFloat("Digite o valor do salario: ", {limitMessage: 'Digite um numero float'});
console.log("O valor do salário: " + salario);

abono = leia.questionFloat("Digite o valor do abono: ", {limitMessage: 'Digite um numero float'});
console.log("O valor do abono: " + abono);

novoSalario = salario+abono
console.log("Seu novo salário é: " + novoSalario)
