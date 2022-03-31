class ChristmasDinner {


    constructor(budget) {

        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
        this.dishProducts = {}




    }

    set budget(value) {
        if (this.budget < 0) { throw new Error("The budget cannot be a negative number") }
        this._budget = value
    }

    get budget() { return this._budget }

    shopping([product, price]) {
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(product)
        this.budget -= price
        return `You have successfully bought ${product}!`
    }
    recipes(recipe) {



        if (recipe.productsList.some(product => this.products.includes(product) == false)) {
            throw new Error("We do not have this product")
        } else {
            this.dishes.push(recipe)
            let dishName = recipe.recipeName
            this.dishProducts[dishName] = recipe.productsList
            return `${recipe.recipeName} has been successfully cooked!`
        }
    }
    inviteGuests(name, dish) {
        if (!this.dishes.some(object => object.recipeName == dish)) {
            throw new Error("We do not have this dish")
        }
        let array = Object.entries(this.guests)
        for (let every of array) {
            if (every[0] == name) {
                throw new Error("This guest has already been invited")
            }
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let result = []
        let guests_ = Object.entries(this.guests)
        for (let every of guests_) {
            result.push(`${every[0]} will eat ${every[1]}, which consists of ${this.dishProducts[every[1]].join(', ')}`)
        }
         return result.join('\n')
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey',]
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
