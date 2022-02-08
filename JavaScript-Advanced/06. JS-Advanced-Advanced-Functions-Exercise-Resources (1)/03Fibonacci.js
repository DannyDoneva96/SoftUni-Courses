function getFibonator(){
    let num1 =1
    let num2 =0
     function inner(){
        let next = num1 + num2
        num1 = num2
        num2 = next
        return num2
    }
    return inner
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); 
