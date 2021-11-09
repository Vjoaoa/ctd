// if (condicao) {
    // codigo a executar se a condição for verdadeira
// }

// if so se a condição for veradeira ela mostra

//else e so se nao tiver condição verdadeira

//if ternário comparações curtas
//if (?) 
//else (:)

//case caso
//default tipo o else


// function NaoPodeSubir(altura,acompanhada){
//     let NaoPodeSubir = false

//     if (altura <=2.0  && altura <= 1.20) {
//         return NaoPodeSubir 
        
//     }
// }
// console.log (NaoPodeSubir(1.19)) 

function PodeSubir (altura,acompanhada ){
    let PodeSubir
      if(altura >= 1.40 && altura <=2 ){
      return true}

    else if  (altura >= 1.20 || altura <=1.40 ){
      return acompanhada}
} 
console.log (PodeSubir(1.40))

function PodeSubirAcompanhado (altura,acompanhada){
    if  (altura >= 1.20 || altura <=1.40 ){
       return acompanhada}
}

console.log 