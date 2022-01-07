// Write a JS function that takes two numbers n and m as an input and prints
//  the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumFromNtoM(n, m) {
    let firstNum = Number(n);
    let SecondNum = Number(m);
  let result = 0;
    for(let i =n; i <= m; i++) {
       result+=i
    }
    return result;
}

console.log(sumFromNtoM(-8,20)) //174 correct