// function soma(a=1, b=3) {
//     return a+b;
// }

// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));



// var Z=0
// for (var i=20; i<50; i+=10 ){
//     Z+=i;
// }
// console.log(Z);


// let valor=5;
// let fatorial=1;
// for ( let i= valor; i>1; i--){
//     fatorial*=i;
// }
// console.log("fatorial ="+fatorial);

// function soletrar(texto) {
//     console.log (texto.replace('-','').toLocaleUpperCase().split("").join("-"));
// }

// soletrar("digital-house");
// soletrar("ctd");

// for (var i=3; i<50; i+=10){
//     console.log(i);
// }
// console.log(i);

// let frutasAmarelas=['melão','mamão','limão siciliano'];
// let frutasVermelhas=['morango','cereja','maça red'];
// let frutasVerde=['Limão','kiwi','maçã verde'];
// frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerde];
// console.log(todasFrutas);
// 
// let x=5;
// let y = x++ + ++x;
// console.log("y= " +y);
// x=3;
// y=x* (x+1) *x++;
// x=5;
// y=3;
// y*= x=1

// console.log("x= "+x);
// console.log("x= "+y);

// let x=50;
// let resto=50%2;
// resposta = resto==0 ? 'par' : 'impar';
// console.log(resposta);

// let numeros= [10, 8, 7, 99, 0, 1, 6]
// numeros.sort(funtion(a,b))
// {return a-b;}

function podeSubir(altura, vemAcompanhado) {
    
    let podeSubir = true
   
    if (altura>1.40 || altura <2){
        podeSubir = true
    }else{
        podeSubir = false
    }
  
    if (altura=1.40 && vemAcompanhado){
        podeSubir = true
    }else{
        podeSubir = false
    }

    if (altura<1.20){
    podeSubir = false
    }
    return(podeSubir)
}

    console.log (podeSubir(1.10, vemAcompanhado))