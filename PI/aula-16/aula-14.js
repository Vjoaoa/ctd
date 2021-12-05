let bemVindo = () => 'olá mundo';

let dobro = numero => numero * 2;

let soma= (a,b) => a+b;

let horaAtual=() => {
    let data = new Date();
    return data.getHours() +':' +
    data.getMinutes();
}
setTimeout(function () {
    console.log('trouxa de roupa')
,1000});

let print = () => {
    console.log('olá mundo')
}

function nomeCompleto( nome, sobrenome){
    return nome[0]+ ' '+sobrenome[0]
}

function bomDia(nome, sobrenome, callback) {
    return 'olá '+ callback(nome,sobrenome);
}



console.log (bemVindo());
console.log (dobro(7));
console.log (soma(7,8));
console.log (horaAtual());
return setInterval;
return setInterval( print,3)
console.log (nomeCompleto('joao','victor'))
console.log(bomDia,nomeCompleto("joão" , "Victor"));



















