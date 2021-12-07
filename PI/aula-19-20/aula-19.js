const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.61
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.75,
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.55
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.67
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.75
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.88
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.67
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.63
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.92
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.80
    }
  ]


arquivos.sort(function(a,b){
    if (a.altura < a.altura) return 1;
    if (b.altura > b.altura) return -1;
    
});

console.log("Menor altura - "+arquivos[0].altura+" e "+ "Maior altura - "+arquivos[9].altura);

let sexo1 = arquivos.filter(function(x) {
    if(x.sexo=="F"){
        return  x;
    }
    
});


let media = sexo1.map(function(z){
    return z.altura
});

let comprimentoArray = media.length

let media2 = media.reduce(function(a, b){
    return a+b
});
console.log("A média de altura das mulheres é "+media2/comprimentoArray)

console.log("3º")
let sexo2 = arquivos.filter(function(x) {
    if(x.sexo=="M"){
        return  x;
    }
});
console.log("Existem "+sexo2.length+" homens!")


