// Write a function that prints a number between 1 and 7 when a day of the week
//  is passed to it as a string and an error message if the string is not recognized.

function DayOfWeek(day) {
    switch (day) {
        case "Sunday":
            console.log(7)
            break;
        case "Monday":
            console.log(1)
            break;
        case "Tuesday":
            console.log(2)
            break;
        case "Wednesday":
            console.log(3)
            break;
        case "Thursday":
            console.log(4)
            break;
        case "Friday":
            console.log(5)
            break;
        case "Saturday":
            console.log(6)
            break;
        default: console.log("error")
            break;
    }
}
DayOfWeek("Monday")
DayOfWeek("Sunday")
DayOfWeek("Mday")
DayOfWeek("Friday")