function solution() {

    let [gifts, send, discarded] = document.querySelectorAll('section ul')
    let input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift)


    function addGift() {
       
        let name = input.value
         if(name=='') { return;}
        input.value = ''

        let li = e('li', name, 'gift')
        gifts.appendChild(li)
        let sentBtn = e('button', 'Send', 'sendButton')
        li.appendChild(sentBtn)
        let discardtBtn = e('button', 'Discard', 'discardButton')
        li.appendChild(discardtBtn)

         sentBtn.addEventListener('click',()=>sentGifts(name,li))
         discardtBtn.addEventListener('click',()=>discGifts(name,li))

        sortGifts()

    }

    function sentGifts(name,element){
        Array.from(element.querySelectorAll('button')).forEach(b=>b.remove())
        send.appendChild(element)
    }

    function discGifts(name,element){
        Array.from(element.querySelectorAll('button')).forEach(b=>b.remove())
        discarded.appendChild(element)
    }
    function sortGifts() {

        Array
            .from(gifts.children)
            .sort((x, y) => x.childNodes[0].textContent.localeCompare(y.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g))

    }



    function e(type, content, className) {

        let element = document.createElement(type);
        element.textContent = content;
        if (className) { element.className = className }

        return element;
    }
}