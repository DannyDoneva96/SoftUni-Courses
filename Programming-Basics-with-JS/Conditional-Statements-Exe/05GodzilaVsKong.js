function godzilaVSkong(input) {
    let budget = Number(input[0]);
    let supernumerary = Number(input[1])
    let PriceOfClothes = Number(input[2])

    let decor = budget * 0.10
    let priceOfAllClothes = supernumerary * PriceOfClothes

    if (supernumerary >= 150) {
        priceOfAllClothes = priceOfAllClothes - (priceOfAllClothes * 0.10)
    }
    let costs = decor + priceOfAllClothes
    let difference = budget - costs
    if (costs > budget) {
        let diff2= costs - budget
        console.log('Not enough money!')
        console.log('Wingard needs ' + diff2.toFixed(2) + ' leva more.')
    } else if (costs <= budget) {
        console.log('Action!')
        console.log('Wingard starts filming with ' + difference.toFixed(2) + ' leva left.')

    }

}