function fromInchToSentimeters(array){
    let inch = Number(array[0]);
    let santimeters = inch*2.54;
    return santimeters
}
console.log(fromInchToSentimeters(['5']))