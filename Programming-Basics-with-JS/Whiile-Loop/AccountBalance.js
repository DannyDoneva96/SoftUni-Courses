function solve(input){
    let balance = 0;
    let i = 0;
    let data = input[i]

    while (data !== 'NoMoreMoney') {
        let num = Number(data)
        if (data<0){
            console.log('Invalid operation!');
            break;
        }
        balance+=num
        i++
        data= input[i]
        console.log(`Increase: ${num.toFixed(2)}`)
       
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}