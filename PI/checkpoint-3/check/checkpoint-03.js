
function dadosAlunos (nome, faltas, notas) {
    this.nome = nome,
    this.qtdFaltas = faltas,
    this.notas = notas,
    this.calcularMedia = ()=>{
        let somaNotas = 0
        this.notas.forEach(nota => {
            somaNotas += nota;
        });

        let qtdNotas = this.notas.length;

        return somaNotas/qtdNotas;
    },
    this.faltas = ()=>{
        this.qtdFaltas +=1;
        return this.qtdFaltas;
    }
}

module.exports = alunos


