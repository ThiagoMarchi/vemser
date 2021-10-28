// 5) Faça um algoritmo que apresente o quadrado de cada um dos números ímpares entre 100 e 1; (Decremento)

var num = 0;

for(let i=100; i >= 1; i--){
    if((num + i)%2 != 0){
        quadradoImpar = Math.pow(i, 2)
        console.log(`${i}² = ${quadradoImpar}`)
    }   
}