import { html, render } from './node_modules/lit-html/lit-html.js'
let url = 'http://localhost:3030/jsonstore/advanced/dropdown'

let slectTemplate = (items) => html`
<select id="menu">${items.map(item => html`<option value=${item._id}>${item.text}</option>`)}</select>`;

let container = document.querySelector('div')
document.querySelector('form').addEventListener('submit', addItem)
getData()

async function getData() {

    let res = await fetch(url)
    let data = await res.json();


    update(Object.values(data))

}

function update(items) {

    render(slectTemplate(items), container)
}


async function addItem(ev) {
    ev.preventDefault();
    let text = document.getElementById('itemText').value

   let res =  await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    })
    if (res.ok) {
        getData()
    }
}


