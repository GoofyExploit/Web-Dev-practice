// let script = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Script is loaded")
//         reject("Script cannot be loaded")
//     }, 2000);
// })

// script.then(message => {
//     alert(message)
// }).catch(error => {
//     alert(error)
// })

// let script = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Script is Loaded")
//         reject("Script cannot be Loaded")
//     }, 2000);
// })

// async function main() {
//     await script.then(message => {
//         alert(message)
//     }).catch(error => {
//         alert(error)
//     })
// }
// main()

// async function addNumbers() {
//     try {
//         const addPromise = new Promise((resolve, reject) => {
//             let a = parseInt(prompt("Enter 1st number"));
//             let b = parseInt(prompt("Enter 2nd number"));
            
//             setTimeout(() => {
//                 if (isNaN(a) || isNaN(b)) {
//                     reject("Invalid input");
//                 } else {
//                     resolve(a + b);
//                 }
//             }, 3000);
//         });

//         const result = await addPromise;
//         alert(`The sum is: ${result}`);
//     } catch (error) {
//         alert(`Error: ${error}`);
//     }
// }

// addNumbers();

async function awaitPromisesOneByOne() {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Error in Promise 2"), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

    try {
        const result1 = await promise1;
        console.log("Result 1:", result1);
    } catch (error) {
        console.log("Error in Promise 1:", error);
    }

    try {
        const result2 = await promise2;
        console.log("Result 2:", result2);
    } catch (error) {
        console.log( error);
    }

    try {
        const result3 = await promise3;
        console.log("Result 3:", result3);
    } catch (error) {
        console.log("Error in Promise 3:", error);
    }
}

awaitPromisesOneByOne();
