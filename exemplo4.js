// Imprima na tela os números pares existentes entre 0 e 100..

let i = 0

console.log('Os números pares existentes entre 0 e 100 são: ')

while (i <= 100) {
    
    if (i % 2 == 0) {
        console.log(i)
    }

    i++
}

console.log('FIM')