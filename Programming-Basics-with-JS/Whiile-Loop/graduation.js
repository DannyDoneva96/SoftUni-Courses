function solve(input){
    let name = input[0]
    let i =1;
    let grade = Number(input[i])
   let  countergrades = 1;
   let  sumgrade = 0
   let countter = 0

    while(true){
        grade = Number(input[i])
      if (grade>=4){
          countergrades++
          sumgrade+=grade
          if(countergrades>12){
              console.log(`${name} graduated. Average grade: ${(sumgrade/12).toFixed(2)}`)
              break;
          }

      }else if (grade<4){
          countter++
          if(countter==2){
              console.log(`${name} has been excluded at ${countergrades} grade`)
              break;
          }
      }     

        i++
    }
}