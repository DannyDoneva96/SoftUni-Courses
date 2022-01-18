function solve(array){

     let result =[]
     let num = Math.min(...array)
     result.push(num)
       let index = array.indexOf(num)
       array.splice(index,1)
     num = Math.min(...array)
     result.push(num)

console.log(result)


}solve([30, 15, 50, 5])