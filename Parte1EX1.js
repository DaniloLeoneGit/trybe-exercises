let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
//Ex 1
 // console.log('Bem-vinda, ' + info.personagem)

//ex 2
 info['recorrente'] = 'sim'
 //console.log(info)

 //ex3

 for (let caracteristicasDoPersonagem in info) {
    console.log(caracteristicasDoPersonagem)
 }