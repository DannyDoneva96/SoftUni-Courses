function solve(array){
    let area = Number(array[0]);
    let price = area *7.61
    let discount = price*0.18
    console.log(`The final price is: ${price-discount} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
solve((["550"]))