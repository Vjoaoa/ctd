let par = [2, 4, 6,];
let Impar = par.map(function (intem) {
    return  ++ intem;
})

console.log (Impar);

let nomes = ['maria', 'João', 'Pedro', 'Joaquin'];
let maiores = nomes.filter(function(intem) {
    return intem == 'maria';
});

console.log(maiores)

let numeros = [1,5,9,3,7]
let numerosFormatados = numeros.reduce(function (intem1,intem) {
    //console.log(intem1,intem);    
    return intem1+' - '+intem;
})

console.log (numerosFormatados);

let animais = ['Anta', 'Cavalo', 'Demonio da tasmania']
let seuAnimal = animais.forEach(function (intem) {
    console.log("O animal é " +intem);
})
 return seuAnimal;