function solve(array){
let result = [];
  for(let i = 1; i < array.length; i+=2){
       let num =array[i] *2
       result.unshift(num)
  }

   return result.join(' ');
}solve([3, 0, 10, 4, 7, 3])
solve([10, 15, 20, 25])