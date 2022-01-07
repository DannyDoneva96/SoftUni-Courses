// Write a function that prints a rectangle made of stars with variable size, 
// depending on an input parameter. If there is no parameter specified,
//  the rectangle should always be of size 5. Look at the examples to get an idea.

function printStars(num){
    if(num == undefined){num = 5}

    let number = Number(num);
    for (let i = 0; i < number;i++){
        console.log("* ".repeat(number))    }
}
printStars(2)