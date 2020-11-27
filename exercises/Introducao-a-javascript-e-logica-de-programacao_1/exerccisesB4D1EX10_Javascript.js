



let custoDeProduto = 5;
let valorDeVenda = 10;


if(custoDeProduto < 0 || valorDeVenda < 0) {
    console.log('Entradas inválidas');
} else {
let lucroBruto = valorDeVenda - custoDeProduto

let imposto = custoDeProduto * 0.2;
let lucroLiquido = lucroBruto - imposto

let lucroDeMilProdutos = lucroLiquido * 1000;

console.log(lucroDeMilProdutos)
}

