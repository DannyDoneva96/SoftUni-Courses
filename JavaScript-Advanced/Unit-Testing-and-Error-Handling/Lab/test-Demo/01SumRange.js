function solve(array, start, end) {

    if (!Array.isArray(array)) { return NaN; }

    if(array.length == 0){ return 0 }
    let length = array.length
    if (start < 0) { start = 0 }
    if (end > length) { end = length }
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += array[i]
    }
    return Number(sum)

} console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)) //3.3
console.log(solve([10, 'twenty', 30, 40], 0, 2)) // NAN 
console.log(solve('dd', 1, 2))  //0