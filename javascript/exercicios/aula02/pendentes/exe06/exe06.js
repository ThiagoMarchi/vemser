// 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;

var valores = [11, 20, 60, 70, 266]
var somatorio = 0
var indice = 0

do {
    console.log(indice, somatorio, valores)

} while (indice < valores.length) {
    somatorio += valores[indice]
    console.log(somatorio)
    indice++
}


/* ou assim */

/*
while (indice < valores.length) {
    somatorio += valores[indice]
    console.log(somatorio)
    indice++
*/