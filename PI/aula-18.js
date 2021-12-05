let loopDePares = num => {
    for (let i = 0; i <= 20; i++) {
      if ((num + i) % 2 == 0) {
        console.log(`O número ${i} é par`)
      }
    }
  }

loopDePares(10)

let loopDeImpares = (num, palavra) => {
    for (let i = 0; i <= 20; i++) {
      if ((num + i) % 2 == 1) {
        console.log(`${palavra}`)
      } else {
        console.log(i)
      }
    }
  }
  
loopDeImpares(1, "impar");

let soma = num => {
    array = [] 
    for (let i = 0; i <= num; i++) {
      array.push(i)
    }
    console.log(
      array.reduce((a, b) => {
        return a + b
      })
    )
  }
soma(8)

  let novoArray = num => {
    let array = []
    for (let i = 1; i <= num; i++) {
      array.push(i)
    }
    return array
  }
  
console.log(novoArray(3))

let split = str => {
    let array = []
    for (let i = 0; i < str.length; i++) {
      array.push(str[i])
    }
    return array
  }
  
  console.log(split('olá'))
  console.log(split('tchau'))

  let moverZeros = array => {
    let novoArray = array.filter(valor => {
      return valor != 0
    })
  
    array.forEach(element => {
      if (element == 0) {
        novoArray.push(element)
      }
    })
  
    return novoArray
  }
  
  console.log(moverZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))


  let arrayObjects = num => {
    let newArray = []
    for (let i = 1; i <= num; i++) {
      newArray.push({ valor: [i] })
    }
    return newArray
  }
  
  console.log(arrayObjects(5))

  let arrayObjectsTwo = (num, palavra) => {
    let array = []
    for (let i = 1; i <= num; i++) {
      array.push(`${palavra}: ${i}`)
    }
    return array
  }
  
  console.log(arrayObjectsTwo(5, 'olá'))
  console.log(arrayObjectsTwo(3, 'tchau'))


