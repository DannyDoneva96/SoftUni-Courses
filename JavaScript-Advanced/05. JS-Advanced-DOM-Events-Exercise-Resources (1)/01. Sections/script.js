function create(words) {
   let content = document.getElementById('content');

  for(let every of words){
    let div= document.createElement('div')
    content.appendChild(div);

    let par = document.createElement('p');
    par.textContent = every
    par.style.display = 'none';
    div.appendChild(par);
    div.addEventListener('click',reveal);

  }


 function reveal(e){
   e.currentTarget.children[0].style.display = 'block'

 }
}