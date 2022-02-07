function sortArray(array,string){

return string == 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a)


}console.log(sortArray([14, 7, 17, 6, 8], 'asc'))