import {html,render} from 'http://unpkg.com/lit-html?module';

let articleTemplate = (data) => html`<article>
<h3>${data.title}</h3>    
<div class="article-quotes">
    <p>${data.content}</p>v</p>
</div>
<footer>Author: ${data.author}</footer>
</article>`

async function start() {

    let data = await (await fetch('./data.json')).json();

    let main = document.querySelector('main');

    let result = data.map(articleTemplate)

    render(result, main)

}start()