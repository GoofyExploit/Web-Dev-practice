function randomDelay() {
    let rand = Math.random()
    if (rand <= 0.20 && rand > 0) {
        return 4000
    }
    if (rand <= 0.40 && rand > 0.20) {
        return 2000
    }
    if (rand <= 0.60 && rand > 0.40) {
        return 5000
    }
    if (rand <= 0.80 && rand > 0.60) {
        return 4500
    }
    if (rand <= 1.0 && rand > 0.80) {
        return 6500
    }
}

function delayMessage(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message)
        }, randomDelay());
    })
}
let line1 = document.body.firstElementChild.children[1].children[0]
let line2 = document.body.firstElementChild.children[1].children[1]
let line3 = document.body.firstElementChild.children[1].children[2]
let line4 = document.body.firstElementChild.children[1].children[3]
let line5 = document.body.firstElementChild.children[1].children[4]
function dot1(){
    let x = 0
    let initialText = line1.innerHTML
    setInterval(() => {
        line1.innerHTML = initialText + '.'.repeat(x + 1);
        if(++x === 3){
            x = 0;
        }
    }, 1000);
}
function dot2(){
    let x = 0
    let initialText = line2.innerHTML
    setInterval(() => {
        line2.innerHTML = initialText + '.'.repeat(x + 1);
        if(++x === 3){
            x = 0;
        }
    }, 1000);
}
function dot3(){
    let x = 0
    let initialText = line3.innerHTML
    setInterval(() => {
        line3.innerHTML = initialText + '.'.repeat(x + 1);
        if(++x === 3){
            x = 0;
        }
    }, 1000);
}
function dot4(){
    let x = 0
    let initialText = line4.innerHTML
    setInterval(() => {
        line4.innerHTML = initialText + '.'.repeat(x + 1);
        if(++x === 3){
            x = 0;
        }
    }, 1000);
}
function dot5(){
    let x = 0
    let initialText = line5.innerHTML
    setInterval(() => {
        line5.innerHTML = initialText + '.'.repeat(x + 1);
        if(++x === 3){
            x = 0;
        }
    }, 1000);
}
async function main() {
    await delayMessage(document.body.firstElementChild.children[1].children[0].innerHTML = `Initializing Hacking`,dot1())
    await delayMessage(document.body.firstElementChild.children[1].children[1].innerHTML = 'Reading your Files',dot2())
    await delayMessage(document.body.firstElementChild.children[1].children[2].innerHTML = 'Password Files Detected',dot3())
    await delayMessage(document.body.firstElementChild.children[1].children[3].innerHTML = 'Sending all password and personal files to Server',dot4())
    await delayMessage(document.body.firstElementChild.children[1].children[4].innerHTML = 'Cleaning up',dot5())
}

main()  