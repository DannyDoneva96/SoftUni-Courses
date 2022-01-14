//•	On the motorway the limit is 130 km/h
// •	On the interstate the limit is 90 km/h
// •	In the city the limit is 50 km/h 
// •	Within a residential area the limit is 20 km/h

function solve(currentSpeed, area) {
    let limit;
    switch (area) {
        case "motorway":
            limit = 130
            break;
        case "interstate":
            limit = 90
            break;
        case "city":
            limit = 50
            break;
        case "residential":
            limit = 20
            break;
    }
    if (currentSpeed <= limit) {
        console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`)
    } else {
        let status;
        cheker20 = limit + 20
        cheker40 = limit + 40

        if (currentSpeed <= cheker20) {
            status = "speeding"
        } else if (currentSpeed <= cheker40 && currentSpeed > cheker20) {
            status = "excessive speeding"

        } else {
            status = "reckless driving."
        }

        let difference = currentSpeed - limit
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }

} solve(40, 'city')
solve(21, 'residential')
solve(170, 'motorway')