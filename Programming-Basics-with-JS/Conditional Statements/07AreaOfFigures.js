function areaOfFigures(input) {
    let typeOfFigure = (input[0])
    let num1 = Number(input[1])
    let num2 = Number(input[2])
    if (typeOfFigure == 'square') {
        let result = num1 * num1;
        console.log(result)

    } else if (typeOfFigure == 'rectangle') {
        let result = num1 * num2;
        console.log(result)

    } else if (typeOfFigure == 'circle') {
        let result = Math.PI * (num1 * num1);
        console.log(result.toFixed(3));

    } else if(typeOfFigure == 'triangle'){
    let result = (num1 * num2) / 2
    console.log(result)
    }
}