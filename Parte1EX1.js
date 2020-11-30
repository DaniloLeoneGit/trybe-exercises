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

//  for (let caracteristicasDoPersonagem in info) {
//     console.log(caracteristicasDoPersonagem)
//  }

 //ex4

//  for (let chavesDoObjeto in info) {
//      console.log(info[chavesDoObjeto])
//  }

//ex5

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'sim'
  };

 for (let chavesDoObjeto in info) {
   if (
       info[chavesDoObjeto] === info.recorrente &&
       info[chavesDoObjeto] === 'sim' &&
       info2[chavesDoObjeto] === 'sim'
   )    {
       console.log('Ambos recorrentes');
   } else {
       console.log(info[chavesDoObjeto] + ' e ' +info2[chavesDoObjeto]);
   }
 }