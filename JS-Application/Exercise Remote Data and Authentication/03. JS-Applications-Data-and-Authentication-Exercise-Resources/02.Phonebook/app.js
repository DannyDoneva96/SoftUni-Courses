function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
list.addEventListener('click', onDelete);

}

let list = document.getElementById('phonebook');
let personInp = document.getElementById('person')
let phoneInp = document.getElementById('phone')

attachEvents();
async function onDelete(e) {
    
let id = e.target.dataset.id;
if(id!=undefined) {
await deleteContact(id)
e.target.parentNode.remove()
}



}
async function onCreate() {
    let person = personInp.value;
    let phone = phoneInp.value;
    let contact = { person, phone }
   let result = await createContact(contact);
    list.appendChild(createItem(result));

}

async function loadContacts() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();
    list.replaceChildren();
    Object.values(data).map(createItem).forEach(i => list.appendChild(i))
}



function createItem(cobtact) {
    let liEl = document.createElement('li')
    liEl.innerHTML = `${cobtact.person}: ${cobtact.phone} <button data-id="${cobtact._id}">Delete</button>`
    return liEl;
}

async function createContact(contact) {

    let res = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    let data = await res.json();
    return data
}
async function deleteContact(id) {
    let res = await fetch('http://localhost:3030/jsonstore/phone/' + id, {
        method: 'delete'
    });
    let result = await res.json();
    return result
}