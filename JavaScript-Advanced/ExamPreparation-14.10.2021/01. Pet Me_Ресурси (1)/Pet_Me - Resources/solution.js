function solve() {

    let divAdopted = document.getElementById('container')
    let inputColection = divAdopted.getElementsByTagName('input')

    let btn = divAdopted.getElementsByTagName('button')[0]
    btn.addEventListener('click', onClick)

    let section = document.getElementById('adoption')
    let ul = section.querySelector('ul')

    let adoptedSection = document.querySelector('#adopted ul')

    let name = inputColection[0]
    let age = inputColection[1]
    let kind = inputColection[2]
    let owner = inputColection[3]

    function onClick(ev) {
        ev.preventDefault();

        if (name.value != '' && kind.value != '' && age.value != '' && owner.value != '' && !isNaN(Number(age.value))) {

            let pet = document.createElement('li')
            pet.innerHTML += `<p><strong>${name.value.trim()}
                </strong>
                 is a 
                 <strong>
                 ${age.value.trim()}
                 </strong> year old 
                 <strong>${kind.value.trim()}</strong></p>
            <span>Owner: ${owner.value.trim()}</span>
            <button class="contactBtn">Contact with owner</button>
           `

            ul.appendChild(pet)


            name.value = '';
            age.value = '';
            kind.value = '';
            owner.value = '';

        }
        let btnContact = ul.getElementsByClassName('contactBtn')
        for (let i = 0; i < btnContact.length; i++) {
            btnContact[i].addEventListener('click', contact)
        }

    }


    function contact(e) {

        let newInputElement = document.createElement('div')
        newInputElement.innerHTML += `<input placeholder="Enter your names">
    <button class='takeIt'>Yes! I take it!</button>`
        let liel = e.target.parentElement
        e.target.remove()
        liel.appendChild(newInputElement)


        let btnTakeIt = document.getElementsByClassName('takeIt')
        for (let i = 0; i < btnTakeIt.length; i++) {

            let input = liel.querySelector('input')

            btnTakeIt[i].addEventListener('click', cheked)
        }

    }

    function cheked(e) {
        let input = section.querySelector('input')
        if (input.value == '') { return;} else {
             let newOwner = input.value
         let myPet =    e.target.parentElement.parentElement
         myPet.remove()
          myPet.querySelector('span').textContent =`New Owner: ${newOwner}`
          myPet.querySelector('button').remove()
         let btnCheck = document.createElement('button')
         btnCheck.textContent = 'Checked'
         console.log(btnCheck)
         myPet.appendChild(btnCheck)
          myPet.querySelector('input').remove();
            adoptedSection.appendChild(myPet)
           
            myPet.querySelector('button').addEventListener('click' ,petRemove  )

            function petRemove(e){
                e.target.parentElement.parentElement.remove()
            }
        }
    }



}


