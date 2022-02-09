function solve() {


    let ScreenButton = document.querySelector('#container button')
    ScreenButton.addEventListener('click', onClick)
    

    function onClick(e) {
        e.preventDefault()
        let inputs = document.querySelectorAll('#container input')
        let name = inputs[0].value
        let hall = inputs[1].value
        let price = inputs[2].value
        price = Number(price).toFixed(2)
        if (name !== '' && hall !== '' && !isNaN(price)) {

            let liEl = document.createElement('li')
            let spanEl = document.createElement('span');
            spanEl.textContent = name
            let strongEl = document.createElement('strong')
            strongEl.textContent = `Hall: ${hall}`;

            let divEl = document.createElement('div');
            let divstrongEl = document.createElement('strong');
            divstrongEl.textContent = price;
            let inputEl = document.createElement('input')
            inputEl.setAttribute('placeholder', 'Tickets Sold');
            let buttonArchive = document.createElement('button')
            buttonArchive.textContent = 'Archive'
            buttonArchive.addEventListener('click', ArchiveMovie)

            divEl.appendChild(divstrongEl);
            divEl.appendChild(inputEl);
            divEl.appendChild(buttonArchive);

            liEl.appendChild(spanEl)
            liEl.appendChild(strongEl)
            liEl.appendChild(divEl);

            let moviesUL = document.querySelector('#movies ul');
            moviesUL.appendChild(liEl)

            Array.from(inputs).forEach(i => i.value = '');

        }
    }
       
    function ArchiveMovie(e){
       let movieLi = e.target.parentElement.parentElement
       let inputAmountTicket = movieLi.querySelector('div input').value;
        
       if(Number(inputAmountTicket)!=''&& !isNaN(Number(inputAmountTicket))){
           let archiveSection = document.querySelector('#archive ul');
         let liElarchive = document.createElement('li');
         let spanArchive = document.createElement('span');
        spanArchive.textContent = movieLi.getElementsByTagName('span')[0].textContent;
        let strongArchive = document.createElement('strong');
        let price = movieLi.querySelector('div strong').textContent
        let totalAmount =(Number(price)*Number(inputAmountTicket)).toFixed(2)
        strongArchive.textContent =  `Total amount: ${totalAmount}`
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',deleteItem)

        //append 
        liElarchive.appendChild(spanArchive);
        liElarchive.appendChild(strongArchive);
        liElarchive.appendChild(deleteButton);

        archiveSection.appendChild(liElarchive);
        movieLi.remove()
       
       }
    }

  function deleteItem(e){
  let movie =   e.target.parentElement.parentElement
  movie.remove()
  }

  let clearButoon = document.querySelector('#archive button');
  clearButoon.addEventListener('click',clearArchive)
  function clearArchive(e){
      let movies = Array.from(document.querySelectorAll('#archive ul li'));
      movies.forEach(e => e.remove())

    }

     
}