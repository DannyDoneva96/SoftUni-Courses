class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
        this.soldCarsCount = 0
    }

    addCar(model, horsepower, price, mileage) {
        price = Number(price)
        mileage = Number(mileage)
        horsepower = Number(horsepower)
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) { throw new Error("Invalid input!") }

        this.availableCars.push({ model, horsepower, price, mileage })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(car => car.model == model)

        if (!car) {
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = 0;

        if (car.mileage <= desiredMileage) {
            soldPrice = car.price
        } else if (
            car.mileage <= desiredMileage + 40000
        ) {
            soldPrice = car.price * 0.95
        } else {
            soldPrice = car.price * 0.90
        }
        let index = this.availableCars.indexOf(car)
        this.availableCars.splice(index, 1)
        let result = {
            model,
            horsepower: car.horsepower,
            soldPrice
        }
        this.soldCars.push(result)
        this.soldCarsCount += 1
        this.totalIncome += soldPrice
        return `${model} was sold for ${soldPrice.toFixed(2)}$`


    }
    currentCar() {
        console.log("-Available cars:")
        let result = []
        for (let every of this.availableCars) {
            result.push(`---${every.model} - ${every.horsepower} HP - ${every.mileage.toFixed(2)} km - ${every.price.toFixed(2)}$`)
        }
        return result.join('\n')
    }
    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort(function (a, b) {
                return b.horsepower - a.horsepower;
            });

        } else if (criteria == 'model') {

            this.soldCars.sort(function (a, b) {
                return a.model.localeCompare(b.model);
            });

        } else {
            throw new Error("Invalid criteria!")
        }
        let result = []
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        result.push(`-${this.soldCarsCount} cars sold:`)
       
        for (let every of this.soldCars){
            result.push(`---${every.model} - ${every.horsepower} HP - ${every.soldPrice.toFixed(2)}$`)
        }
        return result.join('\n')
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
