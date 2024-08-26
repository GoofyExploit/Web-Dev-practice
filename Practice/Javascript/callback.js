// function fetchdata(callback){
//     setTimeout(() => {
//         const data = "Data fetched from server"
//         callback(data)
//     }, 3000);
// }

// function displayData(data){
//     console.log(data);
// }

// fetchdata(displayData)


// function printMessage(message){
//     console.log(message)
// }
// function greet(name,callback){
//     const greeting = `Good Morning, ${name}`;
//     callback(greeting)
// }

// greet('Lucky',printMessage)


function printMessage(message){
    console.log(message);
}
function delayedMessage(name, callback){
    setTimeout(() => {
        const greet = `Good Morning, ${name}`
        callback(greet)
    }, 500);
}

delayedMessage('Lucky', printMessage)