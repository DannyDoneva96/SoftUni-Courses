function sumSeconds(input){
    let first = Number(input[0])
    let second = Number(input[1])
    let third = Number(input[2])
    let totaltime = first+second+third
    let minutes = Math.floor(totaltime/60)
    let seconds = totaltime % 60
     
    if (seconds<10){
        console.log(`${minutes}:0${seconds}`)
    }else {
        console.log(`${minutes}:${seconds}`)
    }
}
