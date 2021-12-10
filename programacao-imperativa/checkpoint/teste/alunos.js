
let Aluno = function(nm, ft, nt) {
    this.nome = nm;
    this.faltas = ft;
    this.notas = nt;
    
    this.Media = function() {
        return this.notas.reduce((a, b) => a + b)/this.notas.length
    },
    
    this.Falta = function() {
        return this.faltas++
    }
};

module.exports = Aluno;