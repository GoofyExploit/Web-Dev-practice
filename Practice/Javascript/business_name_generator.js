// Business name generator:

/*
Adjectives: Crazy, Amazing, Fire
Shops name: Engine, Foods, Garments
Another word: Bros, Limited, Hub
*/

let first,second,third
// first word
let rand = Math.random()
if(rand < 0.33){
    first = `Crazy`
}else if(rand < 0.66 && rand > 0.33){
    first = `Amazing`
}else{
    first = `Fire`
}
// second word
rand = Math.random()
if(rand < 0.33){
    second = `Engine`
}else if(rand > 0.33 && rand < 0.66){
    second = `Foods`
}else{
    second = `Garments`
}
// third word
rand = Math.random()
if(rand < 0.33){
    third = `Bros`
}else if(rand > 0.33 && rand < 0.66){
    third = `Limited`
}else{
    third = `Hub`
}
console.log(`${first} ${second} ${third}`)