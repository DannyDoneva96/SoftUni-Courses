function deleteByEmail() {
   
// select input field and read value
let input = document.querySelector('input[name="email"]');

//get tbody children 
let rows = Array.from(document.querySelector('tbody').children)
let removed =false;
// repeat for each row 
// select second cell
// if mactches remove row

for (let row of rows ) {
    if(row.children[1].textContent==input.value) {
        row.remove();
        removed = true;
    }
}
 if(removed) {
     document.getElementById('result').textContent = 'Deleted';

 }else {
    document.getElementById('result').textContent = 'Not found.';

 }






}