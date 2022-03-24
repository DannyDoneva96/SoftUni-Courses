
            // NOT WORKING 
            // NEED TO FIX LOADING OF UNDEFINED BOOKS
            



let tbody = document.querySelector('tbody');
document.getElementById('loadBooks').addEventListener('click',loadBooks)
document.getElementById('createForm').addEventListener('submit',onCreate)
// document.getElementById('editForm').addEventListener('submit',onEdit)





async function onCreate(e) {
e.preventDefault()

let formData = new FormData(e.target)
    let author = formData.get('author').trim()
    let title = formData.get('title').trim()

  let result =   await createBook({author, title})
    tbody.appendChild(createRow(result._id,result))
    e.target.reset()

}c

async function loadBooks() {
    let books = await request('http://localhost:3030/jsonstore/collections/books')
let result = Object.entries(books).map(([id,book])=>createRow(id,book));
 
tbody.replaceChildren(...result)

}

function createRow(id,book){
    let row= document.createElement('tr');
    row.innerHTML =` <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button>Edit</button>
        <button data-id="${id}">Delete</button>
    </td>`

}

async function request(url, options) {
    let response = await fetch(url, options)
    if (response.ok !== true) {
        let error = await response.json()
        throw new Error(error.message)
    }

    let data = await response.json();

    return data
}



async function createBook(book) {
    let result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return result;
}

async function updateBook(id, book) {
    let result = await request('http://localhost:3030/jsonstore/collections/books' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return result;
}
async function deleteBook(id) {
    let result = await request('http://localhost:3030/jsonstore/collections/books' + id, {
        method: 'delete'
    })

    return result;
}