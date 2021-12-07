let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));

//console.log(espectadores);

let filtro = espectadores.filter(function(otimo){
    if(otimo.opiniao=="ótimo"){
        return otimo;
    }
});

//console.log(filtro);

let idadee = filtro.map(function(a){
    return a.idade;
});

//console.log (idade);

let a = idadee.length

let soma = idadee.reduce(function (a,b) {
    return a+b;
});

//console.log(soma/a);

let regular = espectadores.filter(function(regular){
    if(regular.opiniao=="regular"){
        return regular;
    }
});

// console.log(regular)
console.log('4 Pessoas')

let bom = espectadores.filter(function(regular){
    if(regular.opiniao=="bom"){
        return regular;
    }
});

// console.log(bom)

let porcentagem =(bom.length/espectadores.length)*100

console.log(porcentagem)


