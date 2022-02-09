function solve(input) {
    let recordInSec = Number(input[0])
    let distanceInmeters = Number(input[1]);
    let timenInSec = Number(input[2])
    let seconds = distanceInmeters * timenInSec
    let secWithoutDelay = Math.trunc(distanceInmeters / 15) * 12.5
    let timeFor1result = seconds + secWithoutDelay

    if ( timeFor1result >= recordInSec) {
        console.log(`No, he failed! He was ${(timeFor1result-recordInSec).toFixed(2)} seconds slower.`)
    } else if (timeFor1result < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${timeFor1result.toFixed(2)} seconds.`)
    }
}