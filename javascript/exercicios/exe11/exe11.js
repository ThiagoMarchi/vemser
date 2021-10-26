/* 2) Faça um programa que calcule a soma dos primeiros 50 números pares; */

function somaDosPares(x){
    let soma = 0;
    for(let i = 0; i <= x; i+=2){
      soma += i
    }
    return soma;
 }
 console.log(somaDosPares(50));