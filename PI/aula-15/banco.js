const dados = require("./dados.js");
const dadosJSON = dados.dados

function ContaBancaria(numero, tipo, saldo, titular) {
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}


let listaUsuarios = []
for (var i = 0; i < dadosJSON.length; i++) {
    listaUsuarios.push(new ContaBancaria(dadosJSON[i].numero, dadosJSON[i].tipo, dadosJSON[i].saldo, dadosJSON[i].titular))
}

console.log(listaUsuarios[0]) 

banco = {
    clientes: listaUsuarios,
    consultarCliente: function(titular) {
        for (var i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].titular === titular) {
                return listaUsuarios[i];
            }
        }
        return undefined;
    }
}

console.log(banco.consultarCliente('Ramon Connell'));






