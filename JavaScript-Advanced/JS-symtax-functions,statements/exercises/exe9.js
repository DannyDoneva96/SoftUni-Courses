function solve(string) {
    let words = string.split(/\W+/g);
    let filteredWord = [];
    for (const word of words) {
        if (word !== '') {
            word.trim()
            filteredWord.push(word.toUpperCase())
        }
    }
    return filteredWord.join(", ");

}console.log(solve('Hi, how are you?'))