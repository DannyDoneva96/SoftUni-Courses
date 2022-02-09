function solve(input) {
    let priceOfVacantion = Number(input[0]);
    let currentluAmount = Number(input[1])
    let i = 2;
    let days = 0;
    let spendDays = 0;

    while (true) {
        let operation = input[i++]
        let amount = Number(input[i++])
          days++
        if (operation == 'spend') {
            spendDays++
            // days++
            if (amount > currentluAmount) {
                currentluAmount = 0;
            } else {
                currentluAmount = currentluAmount-amount
            }
            if (spendDays == 5) {
                console.log("You can't save the money.");
                console.log(days)
                break;
            }
        } else if (operation == 'save') {
            // days++
            currentluAmount += amount
            spendDays = 0;
        }
        if (currentluAmount >= priceOfVacantion) {
            console.log(`You saved the money for ${days} days.`)
            break;
        }
    }
}