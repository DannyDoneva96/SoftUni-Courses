function solve(input) {
    let num  = Number(input[0]);
   let i = 1
   let sum = 0;
    while (sum < num) {
       sum += Number(input[i]) 
        i++
    }
    console.log(sum)
}