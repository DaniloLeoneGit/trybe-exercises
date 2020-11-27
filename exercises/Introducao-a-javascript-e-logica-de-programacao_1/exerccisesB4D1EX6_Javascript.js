

let peca = 'Peão'
peça = (peca.toLowerCase(peca))

if (peça == 'rei') {
    console.log('Rei se move em todas as direções!')
} else if (peça == 'rainha') {
    console.log('Raiha se move em todas as direções')
} else if (peça.toLowerCase(peca) == 'bispo') {
    console.log('Bispo se move somente na diagonal')
} else if (peça.toLowerCase(peca) == 'cavalo') {
    console.log('Cavalos se movem em "L"')
} else if (peça.toLowerCase(peca) == 'torre') {
    console.log('Torres se movem na vertical e na horizontal')
} else if (peça.toLowerCase(peca) == 'peão') {
    console.log('Peões se movem pra frente e na diagonal')
} else {
    console.log('Essa peça não existe')
}