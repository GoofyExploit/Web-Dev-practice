let arr = ['lucky','pihu','harry']
let arr1 = [1,2,3,4,5]
let arr2 = [5,4,3,2,1]
// console.log(arr.length)
arr[0] = 'amit'
// console.log(typeof arr)
// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.pop())
// console.log(arr.push("prashant"))
// console.log(arr.shift())
// console.log(arr.unshift("jack"))
// delete arr[1]
// console.log(arr.length)
// console.log(arr[1])
// console.log(arr.concat(arr1))
// console.log(arr2.sort())
// console.log(arr1.splice(1,2,6,7)) //helps in removing and adding elements from a specific position
// console.log(arr1.slice(1,4))
// console.log(arr2.reverse())
// console.log(arr1)
/*
for(let index = 0; index < arr1.length; index++){
    console.log(arr1[index])
}*/
/*
arr1.forEach((value,index,arr) =>{
    console.log(value,index,arr)
})*/
/*
let obj = {
    a:1,b:2,c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}*/
/*
for (const iterator of arr) {
    console.log(iterator)
}*/
/*
let newArr = arr1.map(x =>{
    console.log(x**2)
})*/
/*
const greaterThanTwo = (x) => {
    if(x > 2){
        return true
    }else{
        return false
    }
}
console.log(arr1.filter(greaterThanTwo))*/
/*
reduce an array into a single value according to the function provided.
let red = (a,b) => {
    return a+b
}
console.log(arr1.reduce(red))*/



console.log(Array.from("Lucky"))