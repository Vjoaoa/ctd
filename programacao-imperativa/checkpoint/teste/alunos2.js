let arrayAlunos = require ('./alunos.js')

let arrayAlunos2 = []

arrayAlunos2.push(new arrayAlunos('Roogério', 0, [9, 9, 8, 7]));
arrayAlunos2.push(new arrayAlunos('João Victor', 1, [9, 10, 9, 10]));
arrayAlunos2.push(new arrayAlunos('Paulo', 2, [7, 9, 8, 8]));
arrayAlunos2.push(new arrayAlunos('Guilherme', 2, [7, 7, 7, 7]));
arrayAlunos2.push(new arrayAlunos('Matheus', 1, [5, 5, 8, 6]));
arrayAlunos2.push(new arrayAlunos('Juliana', 1, [9, 7, 9, 6]));

console.log(arrayAlunos2)

module.exports = arrayAlunos2