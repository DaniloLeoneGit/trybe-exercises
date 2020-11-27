let nota = -2

if (nota >= 90 && nota <= 100) {
    console.log('A')
} else if (nota >= 80 && nota <= 89.99) {
    console.log('B')
}  else if (nota >= 70 && nota <= 79.99) {
    console.log('C')
} else if (nota >= 60 && nota <= 69.99) {
    console.log('D')
} else if (nota >= 50 && nota <= 59.99) {
    console.log('E')
} else if (nota >= 0 && nota <= 49.99) {
    console.log('F')
} else {
    console.log('Tem algo errado nessa nota, melhor conferir!')
}
