// async function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched !')
//         }, 3000);
//     }) 
// }

// async function main(){
//     console.log('Data is loading...')
//     console.log('Doing something else...')
//     console.log('Just a momment...')
//     let data = await fetchData()
//     console.log(data)
//     console.log('Fetching more data');
//     console.log('Fetching dependencies');
//     console.log('Downloading required files');
//     console.log('You are good to go');
// }

// main()

console.log('Data is loading...')
console.log('Doing something else...')
console.log('Just a momment...')

async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await data.json()
    console.log(x)
}

async function main(){
    await fetchData()
    console.log('Data fetched !');
    console.log('You are ready to proceed !');
}
main()