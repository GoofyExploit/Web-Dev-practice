//Faulty calculator

let a = parseFloat(prompt("Enter 1st number"));
let b = parseFloat(prompt("Enter 2nd number"));
function faulty_calc(a, b) {
    if (Math.random() < 0.1) {
        let op = parseFloat(prompt("What would you like to do: 1.Additon 2.Multiplication 3.Subtraction 4.Division"));
        switch (operator) {
            case 1:
                return a - b;
            case 2:
                return a + b;
            case 3:
                return a / b;
            case 4:
                return a ** b;
            default:
                console.log("Invalid operation")
        }
    }
    else {
        let op = prompt("What would you like to do: 1.Additon 2.Multiplication 3.Subtraction 4.Division")
        let operator = parseFloat(op);
        switch (operator) {
            case 1:
                return a + b;
            case 2:
                return a * b;
            case 3:
                return a - b;
            case 4:
                return a / b;
            default:
                console.log("Invalid operation")
        }
    }
}
let result = faulty_calc(a, b);
console.log(result);