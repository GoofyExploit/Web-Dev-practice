// using reduce function
/*
let num = 6;
function factorial(number){
    let c = Array.from(Array(number+1).keys()) //this is used to generate an array according to the given number
    let arr = c.slice(1,).reduce((a,b) => {
        return a*b
    })
    console.log(arr)
}
factorial(num)


// using for loop
function facfor(number){
    let fac=1;
    for(let index = 1; index <= number; index++){
        fac = fac * index;
    }
    return fac;
}
console.log(facfor(6))*/
