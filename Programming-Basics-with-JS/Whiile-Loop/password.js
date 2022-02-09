function solve(input) {
    let username  = input[0];
    let pass = input[1]
    let i =2;
    while (input[i] !== pass) {
       
        i++
    }
    console.log(`Welcome ${username}!`)
}