function solve(input) {
    let hourExam= Number(input[0])
    let minExam=Number(input[1])
    let hourArrive=Number(input[2])
    let minArrive =Number(input[3])

    let totalExam = hourExam * 60 + minExam
    let totalArrive = hourArrive * 60 + minArrive

    let difference= Math.abs(totalExam-totalArrive)

    if (totalArrive>totalExam) {
        console.log('Late')
    }else if (totalArrive<=totalExam &&  difference<=30|| totalArrive==totalExam){
        console.log('On time')
    }else(console.log('Early'))
 
    let hh;
    hh = difference / 60 
let mm;
mm = difference % 60

if (mm<10){
    mm = `0${mm}`
}
    if (difference<60 && totalArrive<totalExam) {
        console.log(`${difference} minutes before the start`)  
    }else if(totalArrive<totalExam){
        console.log(`${Math.trunc(hh)}:${mm} hours before the start`)
    }

    if (difference<60 && totalArrive>totalExam ) {
        console.log(`${difference} minutes after the start`)
    }else if (totalArrive>totalExam ){
       console.log(`${Math.trunc(hh)}:${mm} hours after the start`)
    }

}