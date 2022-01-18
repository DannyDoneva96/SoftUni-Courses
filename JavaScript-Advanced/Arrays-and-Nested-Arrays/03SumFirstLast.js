function solve(array){

    let MyArr = array.map(x=>Number(x)) 
     let a = MyArr.shift()
     let b = MyArr.pop()
     return a + b
}console.log(solve(['5', '15', ]))