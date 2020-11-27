//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numerosProArray = []

for (let array = 1; array <= 25; array += 1) {
    numerosProArray.push(array); 
}

for (let novoArray = 0; novoArray < numerosProArray.length; novoArray += 1) {
    console.log(numerosProArray[novoArray] / 2);
  };