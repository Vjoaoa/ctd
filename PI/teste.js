let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];
 function maiusculas (array){
     for (let i = 0; i < array.length; i++) {
         array[i] = array[i].toUperCaser();
     }
        return array
 }   
 console.log(maiusculas(filmes));