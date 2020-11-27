// faça um programa 
//dado um valor n 
//seja n > 1 , 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo


let ladoQadrado = 10

for (let index = 0; index < ladoQadrado; index += 1) {
    let linha = '';
    for(let coluna = 0; coluna < ladoQadrado ; coluna +=1) {
        linha = linha + '*';
    }
    console.log(linha)
}