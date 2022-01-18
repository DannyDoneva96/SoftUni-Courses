function solve(array) {

    array.sort(function (a, b) {
        return a - b;
    });

    if (array.length % 2 == 0) {
        let index = array.length / 2;
        result = array.slice(index)
    } else {
        let index = array.length / 2;

        result = array.slice(index)
    }
    return result;
} solve([3, 19, 14, 7, 2, 19, 6])