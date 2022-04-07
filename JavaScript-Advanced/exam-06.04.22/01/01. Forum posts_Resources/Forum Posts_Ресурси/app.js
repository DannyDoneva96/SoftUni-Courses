window.addEventListener("load", solve);

function solve() {

  let title = document.getElementById('post-title')
  let category = document.getElementById('post-category')
  let content = document.getElementById('post-content')

  let myObj = {

  }
  
 

  let publishB = document.getElementById('publish-btn')
  publishB.addEventListener("click", publish);

  let reviewUL = document.getElementById('review-list')
  function publish(event) {
 
    event.preventDefault()
    if (title.value == '' || category.value == '' || content.value == '') { return; }

    myObj.title = title.value
    myObj.content = content.value
    myObj.category = category.value

    

    reviewUL.innerHTML += `<li class="repost">
    <article>
    <h4>${title.value.trim()}</h4>
    <p>Category: ${category.value.trim()}</p>
    <p>Content: ${content.value}</p>
    </article><button class="action-btn edit">Edit</button><button class="action-btn approve">Approve</button></li>`



    title.value = ''
    category.value = ''
    content.value = ''

  }

  document.getElementById('main-container').addEventListener('click', (ev) => {

    if (ev.target.tagName === 'BUTTON') {
      ev.preventDefault();

      if (ev.target.textContent === 'Edit') {

        title.value = ev.target.parentElement.querySelector('h4').textContent
        category.value = ev.target.parentElement.querySelector('p').textContent.split(' ')[1]
        content.value =ev.target.parentElement.querySelectorAll('p')[1].textContent.split(' ')[1]
         
        ev.target.parentElement.remove()

      } else if (ev.target.textContent === 'Approve') {
        
        let ul = document.getElementById('published-list')
        let el = ev.target.parentElement
         el.querySelector('button').remove()
         el.querySelector('button').remove()

         ul.appendChild(el)
         

        console.log('approve')
      } else if (ev.target.textContent === 'Clear') {
        let ul = document.getElementById('published-list')
            ul.innerHTML = ''
      }
    }
  });

}