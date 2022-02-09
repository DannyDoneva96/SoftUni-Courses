function solve(input) {
    let budjet = Number(input[0])
    let seasone = input[1]
    let numOfFishman = Number(input[2])
    let rentBoat = 0;

    if (seasone == 'Spring') {
        rentBoat = 3000
    }
    if (seasone == 'Summer' || seasone == 'Autumn') {
        rentBoat = 4200
    }
    if (seasone == 'Winter') {
        rentBoat = 2600
    }
    // В зависимост от броя си групата ползва отстъпка:
    if (numOfFishman <= 6) {
        rentBoat -= rentBoat * 0.10
    } else if (numOfFishman >= 7 && numOfFishman <= 11) {
        rentBoat -= rentBoat * 0.15
    } else if (numOfFishman > 12) {
        rentBoat -= rentBoat * 0.25
    }

    if (numOfFishman % 2 == 0 && seasone !== 'Autumn') {
        rentBoat -= rentBoat * 0.05
    }

    if (budjet >= rentBoat) {
        let moneyLeft = budjet - rentBoat;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = rentBoat - budjet
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}
