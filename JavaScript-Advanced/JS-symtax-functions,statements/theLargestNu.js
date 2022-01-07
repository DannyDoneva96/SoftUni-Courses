//Write a function that takes three number arguments as an input and find the largest of them. 
//Print the following text on the console:  `The largest number is {number}.`.

function theLargestNumber(num1,num2,num3){ 

    let number = Math.max(num1,num2,num3)

    console.log(`The largest number is ${number}.`)
}
 theLargestNumber(5,-3,2);
 theLargestNumber(15,-20,20)