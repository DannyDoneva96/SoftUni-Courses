function solve(array){
    
    // let nums = array.map(x=>Number(x)) // if i need numbers only
          let result = []
    for(let i=0; i<array.length; i++){
        if(i%2==0){
           result.push(array[i])
        }
    }
        console.log(result.join(" "));
}solve(['20', '30', '40', '50', '60'])