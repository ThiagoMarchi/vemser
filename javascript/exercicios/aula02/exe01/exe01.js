/* 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine o salário atual desse funcionário (2021); */


var salario = 1000.0;
var aumento = 0.015;

for (let i = 2017; i <= 2021; i++){
    if(i < 2018){
        salario += salario * aumento
    } else {
        aumento *= 2;
        salario += salario * aumento
    }
    console.log(`aumento: ${aumento}, salario: ${salario.toFixed(2)}`)
}
console.log('Em 2021 o funcionário recebe: ', salario.toFixed(2))
