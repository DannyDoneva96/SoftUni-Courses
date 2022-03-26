import {contacts} from './contacts.js';
import {html,render} from './node_modules/lit-html/lit-html.js';


let contactTemplate =(data)=> html` <div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: ${data.name}</h2>
    <button class="detailsBtn">Details</button>
    <div class="details" id=${data.id}>
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: ${data.email}</p>
    </div>
</div>`

start()



function start() {
    let container = document.getElementById('contacts')
    render(contacts.map(contactTemplate),container);
}

let colection =document.getElementsByClassName('detailsBtn')
  for(let i = 0; i < colection.length; i++) {

    colection[i].addEventListener('click', onClick)
}

function onClick(e) {
  
   let div =  e.target.parentNode.parentNode
   let needenEl= div.getElementsByClassName('details')
   if( needenEl[0].style.display=='none'){
    needenEl[0].style.display="block"
   }else { needenEl[0].style.display="none"}

}