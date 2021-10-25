/* 3) 5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
   (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
   Obs: adicione as validações para ter certeza que os números inseridos estão certos;
 */

let t1 = prompt('Digita a sua nota entre 0 e 10!')
let t2 = prompt('Digita a sua nota entre 0 e 10!')
let p1 = prompt('Digita a sua nota entre 0 e 10!')
t1 = parseFloat(t1)
t2 = parseFloat(t2)
p1 = parseFloat(p1)



if(t1 >= 0 && t1 <= 10 && t2 >= 0 && t2 <= 10 && p1 >= 0 && p1 <= 10) {
    let soma = t1 + t2 + p1

    let media = soma / 3
    media = parseInt(media)
    
    if(media < 5) {
        alert('Aluno reprovado!')
    }else if(media >= 5 && media < 7) {
        alert("Aluno em recuperação")
    }else if(media >= 7) {
        alert('Aluno aprovado!')
    }
    
}else alert('Coloque uma nota válida!')






