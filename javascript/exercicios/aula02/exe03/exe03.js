// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

do{
    var programaTabuada = Number.parseInt(prompt('Digite um número da tabuada de 1 a 10 que gostaria de ver: '));

}while(isNaN(programaTabuada))
    while(programaTabuada <= 10){
        for(let i= 1; i <= 10; i++){
            console.log(`${i} x ${programaTabuada} = ${i*programaTabuada}`)
    }
    programaTabuada = 11
}