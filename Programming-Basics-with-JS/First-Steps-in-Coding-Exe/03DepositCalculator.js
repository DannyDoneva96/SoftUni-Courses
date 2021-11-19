function solve(array){
    let deposit =Number(array[0])
    let time = Number(array[1])
    let yearlyIncreaseInPercent = Number(array[2])
    let increaseForOneMonth = (deposit * yearlyIncreaseInPercent / 100 ) / 12
    let total = deposit + time*increaseForOneMonth
    console.log(total)
}
solve(["200","3",'5.7'])