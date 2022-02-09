function solve(input) {
    let num1 = Number(input[0])
    let nm2 = Number(input[1])
   let sum =0

   for(let i = num1;i<=nm2;i++){
    if (i % 9 == 0) {
       sum+=i
       
    }
    
}
console.log(`The sum: ${sum}`)
    for(i = num1;i<=nm2;i++){
        if (i % 9 == 0) {
            console.log(i)
        }
    }
}