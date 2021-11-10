function microndas (comida,tempo) {
    if (comida = "pipoca") {
        if (tempo < 10) {
            console.log ("tempo insuficiente")
        }
        else if (tempo == 10){
            console.log ("tempo certo")
        }
        else if (tempo >= 20 && tempo <= 30 ) {
            console.log ("queimou")
        }
        else if (tempo > 30) {
            console.log ("esplodiu")
        }
    } 

    if (comida = "macarrao") {
        if (tempo < 8) {
            console.log ("tempo insuficiente")
        }
        else if (tempo == 8){
            console.log ("tempo certo")
        }
        else if (tempo >= 16 && tempo <= 24 ) {
            console.log ("queimou")
        }
        else if (tempo > 24 ){
            console.log ("esplodiu")
        }
    } 

    if (comida = "carne") {
        if (tempo < 15) {
            console.log ("tempo insuficiente")
        }
        else if (tempo == 15){
            console.log ("tempo certo")
        }
        else if (tempo >= 30 && tempo <= 45 ) {
            console.log ("queimou")
        }
        else if (tempo > 45) {
            console.log ("esplodiu")
        }
    }

    if (comida = "feijão") {
        if (tempo < 12) {
            console.log ("tempo insuficiente")
        }
        else if (tempo == 12){
            console.log ("tempo certo")
        }
        else if (tempo >= 24 && tempo <= 36 ) {
            console.log ("queimou")
        }
        else if (tempo > 36) {
            console.log ("esplodiu")
        }
    }

    if (comida = "brigadeiro") {
        if (tempo < 8) {
            console.log ("tempo insuficiente")
        }
        else if (tempo == 8){
            console.log ("tempo certo")
        }
        else if (tempo >= 16 && tempo <= 24 ) {
            console.log ("queimou")
        }
        else if (tempo > 24 ){
            console.log ("esplodiu")
        }
    }

    else if ("naoTem"){
        console.log ("prato enexistente")
    }

    else {
        console.log ("prato pronto, bom apetite")
    }

}


microndas ("macarrao",10);