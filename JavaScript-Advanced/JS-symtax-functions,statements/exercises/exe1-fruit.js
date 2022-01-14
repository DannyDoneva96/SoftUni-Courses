function fruit(fruit,weightGR,priceKG){


let weight = weightGR / 1000
let money = weight * priceKG

result = `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`

console.log(result)

}fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)