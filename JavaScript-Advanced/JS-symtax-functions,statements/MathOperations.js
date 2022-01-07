//Print on the console the result of the mathematical operation between both numbers and 
//the operator you receive as a string.
//The input comes as two numbers and a string argument passed to your function.

function solve(num1, num2, operator) {
    let firstNum = Number(num1);
    let SecondNum = Number(num2);
    let result;
    switch (operator) {
        case '+': result = firstNum + SecondNum
            break;
        case "-": result = firstNum - SecondNum
            break;
        case "*": result = firstNum * SecondNum
            break;
        case "/": result = firstNum / SecondNum
            break;
        case "%": result = firstNum % SecondNum
            break;
        case "**": result = firstNum ** SecondNum
            break;
        default:
            break;
    }
    console.log(result);
}
solve(5,6,"+")
solve(3,5.5,"*")