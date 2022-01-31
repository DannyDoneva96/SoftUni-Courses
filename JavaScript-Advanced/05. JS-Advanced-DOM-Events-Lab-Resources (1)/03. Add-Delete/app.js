function addItem() {

    //select input field and read value
    
    let inputValue = document.getElementById('newItemText');
    
    // creat new li element and set its content to inputValue
    
    let liEl = document.createElement('li');
    liEl.textContent = inputValue.value;
    //create delete btn
    let btn = document.createElement('a')
    btn.textContent='[Delete]'
    btn.href ='#';
    liEl.appendChild(btn)

    btn.addEventListener('click',removeEl);
    
    // select ul and append new li element
    document.getElementById('items').appendChild(liEl);
    
    // clear input field
    inputValue.value = '';
    function removeEl(evt) {
        let parent=evt.target.parentNode;
        parent.remove();
    }
    }