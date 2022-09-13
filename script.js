const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let i in filmes){
  console.log("Filme", +i+1, ":")
  console.log("Titulo:",filmes[i].titulo,"\nAno:",filmes[i].ano,"\nDiretor:",filmes[i].diretor)
  console.log("Elenco:")
       for (let j of filmes[i].elenco){
        console.log("       ",j) 
  }
}








// exercicio 1


// let mega = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]
// ]

// if (mega.length===4){
//   for (let i = 0; i < mega.length; i++){
//     //console.log("Sorteio", + i+1,":", mega[i])
//     let sorteio = `Sorteio ${i}: `
//    for (let e = 0; e <mega[i].length; e++){
//     //console.log(mega[i][e])
//     sorteio += mega[i][e] +", "
//    }
//    console.log(sorteio)
//   } 
  
// }else console.log("A mega quadra contem 4 numeros.")



//exercicio 2
// let mega = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]
// ]

// if (mega.length===4){
//   for (let i in mega){
    
//     let sorteio = `Sorteio ${Number(i)+1}: `
//    for (let e = 0; e <mega[i].length; e++){
  
//     sorteio += mega[i][e] +", "
//    }
//    console.log(sorteio)
//   } 
  
// }else console.log("A mega quadra contem 4 numeros.")

//exercicio 3

// let mega = [
//   [1,2,3,4,5,6],
//   [5,6,7,8,9,10],
//   [9,10,11,12,13,14],
//   [13,14,15,16,17,18]
// ]

// if (mega.length===4){
//   for (let i in mega){
//     let sorteio = `Sorteio ${Number(i)+1}: `

//    for (let e of mega[i]){
  
//     sorteio += e +", "
//    }
//    console.log(sorteio)
//   } 
  
// }else console.log("A mega quadra contem 4 numeros.")