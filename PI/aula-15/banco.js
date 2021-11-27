function BancodeDado(nconta,Tconta,saldo,Ticonta) {
    this.nconta=numeros;
    this.Tconta=tipo;
    this.saldo=saldo;
    this.Ticonta=tilular;
}

const jason = requerie('./jason')
let contasBanco = [];
for (BancodeDado in jason) {
    contasBanco.push(new Conta(jason[contasBanco].nconta, jason[contasBanco].Tconta, jason[contasBanco].saldo, jason[contasBanco].Ticonta));
};

console.log(contasBanco);


