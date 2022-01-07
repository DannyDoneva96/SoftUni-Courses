// Write a program that performs different operations on an array of elements. 
//Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.

function aggregateElements(array) {
   let result =0;
   let secondSum=0;
    for(let i=0; i<array.length; i++) {
        result += Number(array[i]);
        secondSum += 1/Number(array[i]);
    }
    console.log(result);
   console.log(secondSum.toFixed(4));
   console.log(array.join(""));

}

aggregateElements([1, 2, 3])