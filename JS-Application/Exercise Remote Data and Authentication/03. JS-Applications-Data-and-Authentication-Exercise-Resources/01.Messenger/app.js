function attachEvents() {
 document.getElementById('refresh').addEventListener('click',loadMessage);

document.getElementById('submit').addEventListener('click',submitMessage);


}
attachEvents();
let authorInp = document.querySelector('[name="author"]')
let contentInp = document.querySelector('[name="content"]')
let list = document.getElementById('messages');


async function submitMessage(){
    let author = authorInp.value;
    let content =contentInp.value;
    let result = await createMessage({author,content})
    contentInp.value=''
    // list.value+='/n' + `${author}:${content}`;

}

async function loadMessage() {
    let url = 'http://localhost:3030/jsonstore/messenger';

    let res = await fetch(url);
    let data = await res.json();
     let messages = Object.values(data)
     let list = document.getElementById('messages');
      console.log(await list.value);
     list.value = messages.map(message =>`${message.author}: ${message.content}`).join('\n');
}
async function createMessage(message){
    let url = 'http://localhost:3030/jsonstore/messenger';
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;

}