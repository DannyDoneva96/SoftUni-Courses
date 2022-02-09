function timeplius15(input) {
   
    let hour = Number(input[0])
    let minutes = Number(input[1])
    let addtime = 15
    let minPlus15 = minutes + addtime
    if (minPlus15 >= 60) {
         hour += 1
    }
    if (hour> 23) {
        hour = 0
    }

    if (minPlus15 >= 60) {
         minPlus15 -= 60;
    }
    if (minPlus15<10){
    console.log(hour + ":0" + minPlus15)
    }else{    console.log(hour + ":" + minPlus15)
}
}