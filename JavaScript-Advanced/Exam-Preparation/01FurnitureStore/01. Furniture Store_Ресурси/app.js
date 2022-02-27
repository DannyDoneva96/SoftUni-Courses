window.addEventListener('load', solve);

function solve() {

let modelInput = document.getElementById('model');
let yearInput = document.getElementById('year');
let descriptionInput = document.getElementById('description');
let priceInput = document.getElementById('price');
let furnitureList = document.getElementById('furniture-list')
let table = document.getElementById('information')

let addBtn = document.getElementById('add');
addBtn.addEventListener('click',add);

function add(e) {
    e.preventDefault();
 
    let furnitureObj = {
        model: modelInput.value,
        year: yearInput.value,
        description: descriptionInput.value,
        price: priceInput.value,

    }
    if(furnitureObj.model === '' || furnitureObj.description === '' || furnitureObj.year <= 0 || furnitureObj.price <= 0) {
        return;
    }
    modelInput.value =''
    yearInput.value =''
    descriptionInput.value =''
    priceInput.value =''
      
    let price = furnitureObj.price

  let trInfo = newEl('tr','info',undefined,
  newEl('td',undefined,undefined,furnitureObj.model),
  newEl('td',undefined,undefined,Number(price).toFixed(2)),
  newEl('td',undefined,undefined,newEl('button','moreBtn',undefined,'More Info'),newEl('button','buyBtn',undefined,'Buy it')));
furnitureList.append(trInfo);
 
    let trHide= newEl('td','hide',undefined,
    newEl('td',undefined,undefined,`Year: ${furnitureObj.year}`),
    newEl('td',undefined,['colspan', '3'], `Description: ${furnitureObj.description}`))

    furnitureList.appendChild(trHide)

let moreInfoBtn = document.querySelector('.moreBtn');
moreInfoBtn.addEventListener('click', show)

// function show(e){
//     if(e.target.textContent == 'More Info'){
//     moreInfoBtn.textContent = 'Less info'
//     document.querySelector('.hide').style.display = 'contents'
//     }else{
//         e.target.textContent ='More Info'
//         document.querySelector('.hide').style.display = 'none'

//     }  
// }
let buyBtn = document.querySelector('.buyBtn');
buyBtn.addEventListener('click', buy);

function buy(e){

}

}
function newEl(type,className, attributeName, ...content) {
    const el = document.createElement(type);

    if(className !== undefined) {
        el.classList.add(className);
    }
    
    if(attributeName !== undefined) {
        const [name, value] = attributeName;
        el.setAttribute(name, value);
    }
        content.forEach(c => {
            if(typeof c === 'string') {
                el.appendChild(document.createTextNode(c));
            } else {
                el.appendChild(c);
            }
        });
    return el;
}


}
