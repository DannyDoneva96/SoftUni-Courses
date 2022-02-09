function solve(input){
    let book = input[0]
 let i =1;
 let counterBooks = 0;
while (input[i]!=='No More Books') {
   
    
  if (book == input[i]){
      console.log(`You checked ${counterBooks} books and found it.`)
      break;
  }
    i++
    counterBooks++
   
}
if (input[i]=='No More Books'){
console.log('The book you search is not here!')
console.log(`You checked ${counterBooks} books.`)
}
}