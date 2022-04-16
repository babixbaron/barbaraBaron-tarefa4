// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

let numero 

function tabuada(numero){
    let i = 1

    console.log(`A tabuada de ${numero} é: `)

    while (i <= 10) {
        let produto = numero * i
        console.log(`${numero} x ${i} = ${produto}`)
        i++
    }
    
    console.log('FIM')
}

//tabuada(2)
tabuada(5)