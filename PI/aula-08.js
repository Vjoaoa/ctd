function podeSubir(altura, acompanhada) {
    let vai = true
    
    if (altura >= 1.40 && altura <= 2.00)
    {
        return "acesso autorizado"
        let vai = true
    }

    else if(altura < 1.40 && altura <= 1.20 && acompanhada)
    {
        return "acesso permitido com acompanhante"
        let vai = true
    }

    else
    {
        return "acesso negado"
        let vai = false
    }
    return vai 
}
    console.log(podeSubir(1.30));