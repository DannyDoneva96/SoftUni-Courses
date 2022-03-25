import { renderTemplate } from "./engine.js";

async function start() {
    let res = await fetch('./data.json');
    let data = await res.json();

    let template = await (await fetch('./article.html')).text();
    let main = document.querySelector('main');

    main.innerHTML = data.map(a => renderTemplate(template, a)).join(' ');
}
start()

