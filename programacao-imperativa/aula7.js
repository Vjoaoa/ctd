 !true
 console.log (!true); //false
 !false
 console.log (!false) //true
 !!false
 console.log (!!false) //false
 !!true
 console.log (!!true) //true
 !1
 console.log (!1) //false
 !!1
 console.log (!!1) //true
 !0
 console.log (!0) //true
 !!0
 console.log (!!0) //false
 !!"" 

 let x = 5 ;

 let y = 9;

 x < 10 && x!==5 // false

 x>9 || x===5 // false

 !(x===y) //true
 console.log (!!"", x < 10 && x!==5,x>9 || x===5, !(x===y))


 let p=10
let i ="a"
i==="b" || p >= 10

console.log(i==="b" || p >= 10) //true

let u=3
let t=8
!(u == "3" || u === t) && !(t !== 8 && u <= t)

console.log (!(u == "3" || u === t) && !(t !== 8 && u <= t)) //false

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)
//false
 console.log(!((str || msg) && eBonito))