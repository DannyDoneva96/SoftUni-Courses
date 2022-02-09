function solve(input) {

    let kindOfFlower = input[0]
    let numsOfFl = Number(input[1])
    let budjet = Number(input[2])

    switch (kindOfFlower) {
        case 'Roses':
            price = 5
            break;
        case 'Tulips':
            price = 2.8
            break;

        case 'Dahlias':
            price = 3.8
            break;
        case 'Narcissus':
            price = 3
            break;

        case 'Gladiolus':
            price = 2.5
            break;
    }
    let = finalPrice = numsOfFl * price

    if (numsOfFl > 80 && kindOfFlower == 'Roses') {
        finalPrice -= (finalPrice * 0.10)
    }
    if (numsOfFl > 90 && kindOfFlower == 'Dahlias') {
        finalPrice -= (finalPrice * 0.15)
    }
    if (numsOfFl > 80 && kindOfFlower == 'Tulips') {
        finalPrice -= (finalPrice * 0.15)

    }
    if (numsOfFl < 120 && kindOfFlower == 'Narcissus') {
        finalPrice += (finalPrice * 0.15)
    }
    if (numsOfFl < 80 && kindOfFlower == 'Gladiolus') {
        finalPrice += (finalPrice * 0.20)
    }
    if (budjet >= finalPrice) {
        let moneyLeft = budjet - finalPrice
        console.log(`Hey, you have a great garden with ${numsOfFl} ${kindOfFlower} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = finalPrice - budjet
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)

    }

}