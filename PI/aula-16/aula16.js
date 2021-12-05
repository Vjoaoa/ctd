let FizzBuzz = (numero1, numero2) => {
    for(let i = 1; i<=100; i++) {
        if (i % numero1 == 0 && i % numero2 == 0) {
            console.log("FizzBuzz")
            
        } else if (i % numero1 == 0) {
            console.log("Fizz")
        } else if (i % numero2 == 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
       
    }

}

console.log(FizzBuzz(2,3));

// Avançado: Como crédito extra, pense em como otimizar seu programa para que
// as palavras sejam passadas de forma dinâmica e seja você quem decide quais
// palavras ele deve dizer.

let FizzBuzz = (numero1, numero2) => {


    for(let i = 1; i<=100; i++) {
        let resposta;

        if (i % numero1 == 0 ) {
            resposta = "Fizz"; 
        } 
        
        if (i % numero2 == 0) {
             resposta = resposta === undefined ? "Buzz" : resposta + "Buzz";
        } 

        console.log(resposta === undefined ? i : resposta);
    }

}

console.log(FizzBuzz(2,3));