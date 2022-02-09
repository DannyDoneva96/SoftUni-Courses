// Резултатът да се изведе форматиран до 2 цифри след десетичната точка. (sells>=0&&sells<=500)
// При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
function solve(input) {
    let town = input[0];
    let sells = input[1];
    let result = 0
    if (sells < 0) {
        console.log('error')}else{
    
    switch (town) {
        case 'Sofia':
            if (sells >= 0 && sells <= 500) {
                result = sells * 0.05
            } else if (sells > 500 && sells <= 1000) {
                result = sells * 0.07
            } else if (sells >= 1000 && sells <= 10000) {
                result = sells * 0.08
            } else if (sells > 10000) {
                result = sells * 0.12
            }
            break;
        case 'Varna':
            if (sells >= 0 && sells <= 500) {
                result = sells * 0.045
            } else if (sells > 500 && sells <= 1000) {
                result = sells * 0.075
            } else if (sells >= 1000 && sells <= 10000) {
                result = sells * 0.10
            } else if (sells > 10000) {
                result = sells * 0.13
            }
            break;
        case 'Plovdiv':
            if (sells >= 0 && sells <= 500) {
                result = sells * 0.055
            } else if (sells > 500 && sells <= 1000) {
                result = sells * 0.08
            } else if (sells >= 1000 && sells <= 10000) {
                result = sells * 0.12
            } else if (sells > 10000) {
                result = sells * 0.145
            }
            break;

        default:
            console.log('error')
    }
    console.log(result.toFixed(2))
}

}