function microondas (comida, segundos) {
    switch (comida) {
        case 1: 
            if (segundos >= 20 && segundos <= 30) {
                console.log("Prato queimou")
            } else if (segundos > 30) {
                console.log("Kabuuummm!")
            } else if (segundos < 10) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 2:
            if (segundos >= 16 && segundos <= 24) {
                console.log("Prato queimou")
            } else if (segundos > 24) {
                console.log("Kabuuummm!")
            } else if (segundos < 8) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 3: 
            if (segundos >= 30 && segundos <= 45) {
                console.log("Prato queimou")
            } else if (segundos > 45) {
                console.log("Kabuuummm!")
            } else if (segundos < 15) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 4: 
            if (segundos >= 24 && segundos <= 36) {
                console.log("Prato queimou")
            } else if (segundos > 36) {
                console.log("Kabuuummm!")
            } else if (segundos < 12) {
                console.log("Tempo insuficiente")
            } else  {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 5:  
            if (segundos >= 16 && segundos <= 24) {
                console.log("Prato queimou")
            } else if (segundos > 24) {
                console.log("Kabuuummm!")
            } else if (segundos < 8) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}

console.log(" Pipoca \n");

microondas(1,9);
//1 é a case da pipoca

console.log("\n Macarrão \n");

microondas(2,7);
//2 é a case do macarrão 

console.log("\n Carne \n");

microondas(3,13);
//3 é a case da carne

console.log("\n Feijão \n");

microondas(4,10);
//4 é a case do feijão

console.log("\n Brigadeiro \n");

microondas(5,8);
//5 é case do brigadeiro 
console.log("\n Prato que não existe \n");

microondas(6,30);