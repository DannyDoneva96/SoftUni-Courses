class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = []
        this.storage = []

    }


    addPlant(plantName, spaceRequired) {

        if (Number(spaceRequired) > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.")
        }
        this.plants.push({ plantName, spaceRequired: Number(spaceRequired), ripe: false, quantity: 0 })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`

    }



    ripenPlant(plantName, quantity) {
        quantity = Number(quantity)
        let plant = this.plants.find(plant => plant.plantName === plantName)
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        plant.ripe = true;
        plant.quantity += quantity
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened."`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }


    harvestPlant(plantName) {
        let plant = this.plants.find(plant => plant.plantName === plantName)
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let index = this.plants.indexOf(plant)
        this.storage.push({ plantName: plantName, quantity: plant.quantity })
        this.spaceAvailable += plant.spaceRequired
        this.plants.splice(index, 1)
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`)
        this.plants.sort(function (a, b) {
            return a.plantName.localeCompare(b.plantName);
        });
        let result1 = []

        for (let every of this.plants) {
            result1.push(every.plantName)
        }
        let string = result1.join(', ')
        result.push(`Plants in the garden: ${string}`)

        let result3 = []
        if (this.storage.length == 0) {
            result.push(`Plants in storage: The storage is empty.`)
        } else {
            for (let every of this.storage) {
                result3.push(`${every.plantName} (${every.quantity})`)
            }
            result.push(`Plants in storage: ${result3.join(', ')}`)
        }
        return result.join('\n')
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

