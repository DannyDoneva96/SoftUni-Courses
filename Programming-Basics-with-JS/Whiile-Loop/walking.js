function solve(input) {

    let goal = 10000
    let steps = 0;
    let gh = input[input.length - 2]
    if (gh === 'Going home') {

        for (let i = 0; i < input.length-2; i++) {
            steps += Number(input[i])
        }
        steps += Number(input[input.length - 1])

    } else {
        for (let i = 0; i < input.length; i++) {
            steps += Number(input[i])

        }

    }
    if (steps >= goal) {
        console.log('Goal reached! Good job!')
        console.log(`${steps - goal} steps over the goal!`)
    } else {
        console.log(`${goal-steps} more steps to reach goal.`)
    }
}