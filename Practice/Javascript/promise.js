let myPromise = new Promise((resolve, reject) => {
    let isAvailable = true

    if(isAvailable){
        resolve("Book Delivered")
    }else{
        reject("Book out of stock")
    }
})


let greet = new Promise((resolve, reject) => {
    // let rand = Math.random()
    let flag = false
    if(flag){
        resolve("Hello lucky")
    }else{
        reject("Not so lucky")
    }
    // setTimeout(() => {
    // }, 3000);
})


let p3 = Promise.reject([myPromise, greet])
p3.then(message=>{
    console.log(message)
}).catch(err =>{
    console.log(err)
})