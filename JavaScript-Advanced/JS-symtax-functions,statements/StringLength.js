//Write a JS function that takes three string arguments as an input.
// Calculate the sum of the length  of the strings and the average length 
//of the strings rounded down to the nearest integer.

function stringOperation(input1, input2, input3) {
    let sum = input1.length + input2.length + input3.length
    console.log(sum)
    let result = sum / 3
    console.log(Math.floor(result))
}

stringOperation(
    'chocolate', 'ice cream', 'cake'
    ) // 22 and 7 
    