function solve(input) {

    let numOfBadGrades = Number(input[0])
    let counterOfBG = 0;
    let numProblems = 0;
    let sum = 0
    let LastTask = ' '
    let i = 1;
    while (numOfBadGrades !== counterOfBG) {
       
        let problem = input[i]
        if (input[i] == "Enough") {

            console.log(`Average score: ${(sum/numProblems).toFixed(2)}`)
            i--
            i--
            LastTask = input[i]
            console.log(`Number of problems: ${numProblems}`)
            console.log(`Last problem: ${LastTask}`)
            break;
        }
        numProblems++
        i++
        let grade = Number(input[i])
        sum = grade + sum
        i++

        if (grade<=4){
            counterOfBG++
            if (numOfBadGrades==counterOfBG){
                console.log(`You need a break, ${counterOfBG} poor grades.`)
                break;
            }
        }


    }
}