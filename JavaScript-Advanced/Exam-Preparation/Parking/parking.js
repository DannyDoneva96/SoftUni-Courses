class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicle = [];
    }
    addCar(carModel, carNumber) {
        if (this.vehicle.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }
        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false,

        }
        this.vehicle.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`



    }
    removeCar(carNumber) {
        if (!this.vehicle.some(x => x.carNumber == carNumber)) {
            throw new Error("The car, you're looking for, is not found.")
        }

        let currentCAr = this.vehicle.find(x => x.carNumber == carNumber)
        if (currentCAr.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        } else {
            let index = this.vehicle.indexOf(carNumber)
            this.vehicle.splice(index, 1)
            return `${carNumber} left the parking lot.`
        }
    }
    pay(carNumber) {
        let currentCAr = this.vehicle.find(x => x.carNumber == carNumber)
        if (currentCAr == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentCAr.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)

        } else {
            currentCAr.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber) {
        let currentCAr = this.vehicle.find(x => x.carNumber == carNumber)
        let emptySpotsLeft = Number(this.capacity) - this.vehicle.length
        let string = `The Parking Lot has ${emptySpotsLeft} empty spots left.`
          let payStatus = 'Has payed' 
        console.log(string)
        if (carNumber == undefined) {
            this.vehicle
                .sort(function (a, b) {
                    return a.carModel.localeCompare(b.carModel);
                })
            for (let every of this.vehicle) {
                let payStatus2 = 'Not payed'
                let result = []
                if (every.payed == true) { payStatus2 = 'Has payed' }
                result.push(`${every.carModel} == ${every.carNumber} - ${payStatus2}`)
return result.join('\n')
            }

        } else {
            if (currentCAr.payed==false) {payStatus='Not payed'}
           let result = `${currentCAr.carModel} == ${carNumber} - ${payStatus}`
           return result
        }
        
    }


}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
