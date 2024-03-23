let random = Math.random()

console.log(random)
let a = prompt("Enter first")
let b = prompt("Enter second")
let c = prompt("Enter operation")

let obj = {
   "+":"-",
   "*":"+",
   "-":"/",
   "/":"*"
   
}


if(random>0.1){
    console.log(`${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    console.log(`${a} ${obj[c]} ${b}`)
    alert(`The result is ${eval(`${a} ${obj[c]} ${b}`)}`)
}