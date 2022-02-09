function solve(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2]
    let result;
    let resultoddOrEven;

    if (operator == '+'&& n1!=0&&n2!=0) {
        result = n1 + n2
        if (result % 2 == 0) {
            resultoddOrEven = 'even'
        } else {
            resultoddOrEven = 'odd'
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultoddOrEven}`)
    } else if (operator == '-'&&n1!=0&&n2!=0) {
        result = n1 - n2
        if (result % 2 == 0) {
            resultoddOrEven = 'even'
        } else {
            resultoddOrEven = 'odd'
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultoddOrEven}`)

    } else if (operator == '*'&&n1!=0&&n2!=0) {
        result = n1 * n2
        if (result % 2 == 0) {
            resultoddOrEven = 'even'
        } else {
            resultoddOrEven = 'odd'
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultoddOrEven}`)

    }


    if (operator == '/'&&n1!=0&&n2!=0) {
        result = n1 / n2
       console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`)
    }
    if (operator == '%'&&n1!=0&&n2!=0) {
        result = n1 % n2
        console.log(`${n1} ${operator} ${n2} = ${result}`)
    }
    if (n1 == 0) {
        console.log('Cannot divide ' + n2 + ' by zero')
    } else if (n2 == 0) {
        console.log('Cannot divide ' + n1 + ' by zero')
    }
}