const alicia = [23, 69, 32];
 const bob = [12, 67, 43];

 function Ganhador(a, b) {
    let aa=0
    let bb=0
    for (let i = 0; i <a.length; i++) {
        if (a[i]>b[i]) {
            aa++;
        }
        else if (b[i]> a[i]) {
            bb++;}
    }
    if (aa>bb) {
        return "Parcipante a"
    }
    else if (aa<bb) {
        return "Participante b"
    }
    else{
        return "Empate"
    }
}

console.log ("ganhador é: " + Ganhador(alicia, bob));

function digitalHouse(x,y) {
    for (let i = 0; i <= 100; i++) {
        if (i % x ==0 && i % y ==0) {
            console.log("Digital House")
        }
        else{
            if (i % x == 0) {
                console.log("Digital")
            }
            else if (i % y ==0) {
                console.log ("House")
            }
            else{
                console.log(i)
            }
        }
    }
}

console.log(digitalHouse(2,9));

const elements = ["t","c","h","a","u"];

console.log(elements.join(''));

const ola = ["o","l","á"];

console.log(ola.join(''));

//ggdgfd