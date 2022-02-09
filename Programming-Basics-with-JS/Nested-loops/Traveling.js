function solve(input){
let i=0;

let line = input[i]
    while(input[i]!=='End'){
         let destination = line
         i++
         let price = Number(input[i])
         let saved =0;
         while(saved<price){
             i++
             saved+=Number(input[i])
         }
         console.log(`Going to ${destination}!`)
         i++
         line= input[i]
    }
}