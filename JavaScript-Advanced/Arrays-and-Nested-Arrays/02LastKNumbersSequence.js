// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

function solve(n,k){
      let result = [1]
      
      for(let i = 0; i <n;i++){
          let currentNumber =0
          num = result.slice(-k)
          for(let j = 0; j <k;j++){
              if(num[j]==undefined){continue;}
             currentNumber +=  num[j]
          }
          result.push(currentNumber)
           if(result.length == n){break;}
      }
  return result
}solve(6,3) //[1, 1, 2, 4, 7, 13]
solve(8,2) // [1, 1, 2, 3, 5, 8, 13, 21]