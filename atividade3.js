//SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS

const leia = require('readline-sync')
let salarioBruto
let adicionalNoturno
let horasExtras
let descontos 
let salarioLiquido


salarioBruto = leia.questionFloat("\n Digite o salario: ", {limitMessage: 'Digite um numero float'});

adicionalNoturno = leia.questionFloat("\nAdicione o valor do adicional noturno: ", {limitMessage: 'Digite um numero float'});

horasExtras  = leia.questionFloat("\nAdicione o valor da horas extras: ", {limitMessage: 'Digite um numero float'});

descontos = leia.questionFloat("\nAdicione o valor do desconto: ", {limitMessage: 'Digite um numero float'});

salarioLiquido = ((salarioBruto + adicionalNoturno + (horasExtras *5 ) - descontos))

console.log("\nO salario liquido desse mes é: " + salarioLiquido)