function solve (array){
let pagesInBook = Number(array[0]);
let pagesForHour = Number(array[1]);
let daysLeft = Number(array[2]);

let neededTimeForOneBook = pagesInBook /pagesForHour;
let result =neededTimeForOneBook / daysLeft
console.log(result)


}solve(['212','20','2'])