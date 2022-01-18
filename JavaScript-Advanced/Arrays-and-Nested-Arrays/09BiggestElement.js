function solve(array){
      let myArr=[]
    for(let i = 0; i < array.length; i++){
        let num = Math.max(...array[i])
          myArr.push(num)
    }
 let result  = Math.max(...myArr)
console.log(result)

}solve([[20, 50, 10],
    [8, 33, 145]]
   )