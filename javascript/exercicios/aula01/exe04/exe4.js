/* 4) Crie um programa que recebe dois números e uma operação desejada (operações válidas: '+', '-', '*', '/') e adicione também uma validação para caso a operação
   escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
   Caso a validação encontre um erro mostre um alerta informando o usuário;
   Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);
 */

let num1 = prompt('Digite um numero!')
let num2 = prompt('Digite outro numero!')
let operacao = prompt('Digite uma operação!')

    if(operacao === '*' || operacao === '/' || operacao === '+' || operacao === '-') {
      if(num1 !== NaN || num1 !== String || num1 !== 0) {
        if(num2 !== NaN || num2 !== String || num2 !== 0) {
          if(operacao === '*') {
            alert(`A conta entre ${num1} e ${num2} com o operador * é: ${num1 * num2}`)
          }else if(operacao === '/') {
            alert(`A conta entre ${num1} e ${num2} com o operador / é: ${num1 / num2} `)
          }else if(operacao === '+'){
            alert(`A conta entre ${num1} e ${num2} com o operador + é: ${parseFloat(num1) + parseFloat(num2)}`)
          }else if(operacao === '-'){
            alert(`A conta entre ${num1} e ${num2} com o operador - é: ${num1 - num2}`)
          }
        } else alert('Coloque um valor válido!')
      } else alert('Coloque um valor válido!')
    } else alert('Coloque uma operação válida')





