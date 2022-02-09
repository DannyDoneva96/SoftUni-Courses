function solve(input) {
    //     •	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
    // •	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
    // •	Всички останали са "unknown"
    if (input == 'banana' || input == 'apple' || input == 'grapes' || input == 'kiwi' || input == 'cherry' || input == 'lemon') {
        console.log('fruit')
    } else if (input == 'tomato' || input == 'cucumber' || input == 'pepper' || input == 'carrot') {
        console.log('vegetable')
    } else {
        console.log('unknown')
    }

}