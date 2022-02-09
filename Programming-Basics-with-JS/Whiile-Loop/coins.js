function solve(input){
    let coins = Number(input[0])  * 100
    let numcoins = 0 ;

    while (coins !==0) {
        if (coins -200>=0){
            numcoins++
            coins-=200
        
    }else  if (coins -100>=0){
        numcoins++
        coins-=100
    }else  if (coins -50>=0){
        numcoins++
        coins-=50
    }else  if (coins -20>=0){
        numcoins++
        coins-=20
    }else  if (coins -10>=0){
        numcoins++
        coins-=10
    }else  if (coins -5>=0){
        numcoins++
        coins-=5
    }else  if (coins -2>=0){
        numcoins++
        coins-=2
    }else  if (coins -1>=0){
        numcoins++
        coins-=1
    }else{
        break;
    }
}
console.log(numcoins)
}