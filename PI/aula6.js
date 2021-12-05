function soma (x,y){
    return x + y;
}
console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log (soma (5,5)); 

function subtracao (x,y){
    return x - y;
}
console.log (subtracao(5,5))
console.log ("-------------- Teste de Operações / Calculadora --------------")


function mutiplicacao (x,y){
    return x * y;
}
console.log (mutiplicacao(5,5))
console.log ("-------------- Teste de Operações / Calculadora --------------")

function divisao (x,y){
    return x / y;
}
console.log (divisao(5,5))
console.log ("-------------- Teste de Operações / Calculadora --------------")


function quadraDoNumero(x,y){
    return mutiplicacao(x,y)
}
console.log (quadraDoNumero(3,3))
console.log ("-------------- Teste de Operações / Calculadora --------------")


function mediaDeTresNumeros(x,y,z){
    let soma2 = adicionar (a,b);
    let soma3 = adicionar (soma2,c);
    return divisao (soma3,3);
}
console.log ("-------------- Teste de Operações / Calculadora --------------")


function calculaPorcentagem(x,y){
    return mutiplicacao(x , y/ 100 ) 
    
    
}
console.log (calculaPorcentagem(300,15))
console.log ("-------------- Teste de Operações / Calculadora --------------")

//pronto