//Crie uma função que irá receber um número e retornar o fatorial dele. 
//por exemplo: 3! = 3 * 2 * 1 // 6

let fatorial = 1
let num 

function calculaFatorial(num){
    let fatorial = 1

    for(let contador = 1; contador <= num; contador++){
        fatorial = fatorial * contador
}
    console.log(`${num}! = ${fatorial}`)    
}

calculaFatorial(5)