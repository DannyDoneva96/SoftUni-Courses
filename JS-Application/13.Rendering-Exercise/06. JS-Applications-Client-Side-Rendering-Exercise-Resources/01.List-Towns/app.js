import {html,render} from './node_modules/lit-html/lit-html.js';


let btn = document.getElementById('btnLoadTowns')
btn.addEventListener('click', towns)
 let divContainer = document.getElementById('root')


function towns(event){
    event.preventDefault()
let inputField = document.getElementById('towns')
let towns = inputField.value
let townsData = towns.split(',').map(t=>t.trim())



let result = template(townsData)
render(result,divContainer)


}

let template = (townsData)=> html`
<ul>
    ${townsData.map(town=>html`<li>${town}</li>`)}
</ul>
`