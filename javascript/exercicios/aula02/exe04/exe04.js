// 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;

var num = 0;

for(let i=1; i <= 100; i++){
    if((num + i)%2 == 0){
        quadradoPar = Math.pow(i, 2)
        console.log(`${i}² = ${quadradoPar}`)
    }   
}