// IIFE - Immediate Invoked Function expression

async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a,b,c){
    return a+b+c;
}
(async function main() {
    console.log(a1)
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

    let [x,y,...rest] = [1,2,3,4,5]
    console.log(x,y,rest)

    // Destructuring
    let obj = {
        m:1, n:2, c:3
    }
    let {m, n ,c} = obj
    console.log(obj)

    // Spread operator
    let arr = [1,2,3]
    console.log(sum(...arr))

    // hoisting
    var a1= 6
})()
