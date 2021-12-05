let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];
let series= ['home-haranha', 'breaking bad', 'ter', 'todo mundo odeia cris', 'justiceiro']
 function maiusculas (array){
     for (let i = 0; i < array.length; i++) {
         array[i] = array[i].toUpperCase()
     }
        return array
 }   
 console.log(maiusculas(filmes));

 function passagemDeElementos(array1, array2) { 
    array1.push(array2.pop().  toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    return array1
   }
   
   console.log(passagemDeElementos(filmes,series))

   const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararClassificacoes(asia, europa) {
  let comparacoesAsiaEuropa = [0]
  comparacoesAsiaEuropa[0] = asia[0] === europa[0]
  comparacoesAsiaEuropa[1] = asia[1] === europa[1]
  comparacoesAsiaEuropa[2] = asia[2] === europa[2]
  comparacoesAsiaEuropa[3] = asia[3] === europa[3]
};

console.log (compararClassificacoes(asiaScores,euroScores));


