
//map retorna uma array nova, sempre usar o return
let numeros = [2,4,6];
let dobro = numeros.map(function (num) {
    // console.log(num);
    return num * 2;
})

console.log(dobro);

//filter retorna valores verdadeiro e falso exemplo abaixo retorna os numeros maiores de 18
let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(intem) {
    return intem >= 18;
});

console.log(maiores)

//reduce vai reduzir meu metos arrays a alguma coisa
let numeros1 = [5, 7, 16, 17, 18, 20];
let soma = numeros1.reduce(function (acumulador,intem) {
    console.log(acumulador,intem);    
    // return acumulador+''+intem;
    // retorna 5716
})

console.log(soma);

// forEach nao tem return
var paises = ['Brasil', 'cuba', 'peru'];

paises.forEach(function (intem) {
    console.log("Olá "+intem);
})

return paises
// console.log(paises);




// let idades = [22, 8, 17, 14, 30];
// let maiores = idades.filter(function(intem) {
//     return intem >= 18;
// });

// console.log(maiores)