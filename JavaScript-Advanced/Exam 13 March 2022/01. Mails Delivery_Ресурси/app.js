function solve() {
    let mail = document.getElementById('recipientName')
    let title = document.getElementById('title');
    let massage = document.getElementById('message')
    let list = document.getElementById('list')
    let trash = document.getElementsByClassName('delete-list')
    let trashUl = trash[0]
    let data = {}


    document.querySelector('.message').addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON') {
            ev.preventDefault();

            if (ev.target.textContent === 'Add to the List') {

                if (mail.value == '' || title.value == '' || massage.value == '') { return }
                     data.mail = mail.value,
                    data.title = title.value,
                    data.message = massage.value
                list.innerHTML += `<li>
            <h4>Title: ${title.value}</h4>
            <h4>Recipient Name: ${mail.value}</h4>
            <span>${massage.value}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit"  id="delete">Delete</button>
            </div>
            </li> `

            } else if (ev.target.textContent === 'Reset') {
                ev.preventDefault();
                mail.value = '';
                title.value = '';
                massage.value = '';

            } else if (ev.target.textContent === 'Send') {

                let li = ev.target.parentElement.parentElement
                let ulcolection = document.getElementsByClassName('sent-list')
                let ul = ulcolection[0]
                
                ul.innerHTML += `<li>
          <span>To: ${data.mail}</span>
          <span>Title: ${data.title}</span>
          <div class="btn">
              <button type="submit" class="delete">Delete</button>
          </div>
        </li>`
        
                li.remove()
        
            } else if (ev.target.textContent === 'Delete') {
                trashUl.innerHTML+=`<li>
                <span>To: ${data.mail}</span>
                <span>Title: ${data.title}</span>
            </li>`
        
            ev.target.parentElement.parentElement.remove()
            }
        }
    });



















} solve()