let random = Math.random()
console.log(random)
// Adjectives:
// Crazy 
// Amazing
// Fire 

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

const adj = {
    "0":"Crazy ",
    "1":"Amazing",
    "2":"Fire"
}
const Name = {
    "0":"Engine ",
    "1":"Foods",
    "2":"Garments"
}
const word = {
    "0":"Bros ",
    "1":"Limited",
    "2":"Hub"
}

let a = (Math.round(random*10))%2;
let b = (Math.round(random*100))%2;
let c = (Math.round(random*100))%2;
console.log(`${adj[a]}  ${Name[b]}  ${word[c]}`)