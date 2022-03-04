async function getInfo() {

    let busStop = document.querySelector('#stopId').value
    let stopNameInput = document.querySelector('#stopName')
    let button = document.querySelector('#submit');
    let ul = document.querySelector('#buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busStop} `
    try {
        ul.replaceChildren();
        let res = await fetch(url)
        if (res.status !== 200) {
            throw new Error('Error')
        }
        let data = await res.json();
        stopNameInput.textContent = data.name

       

        for (const busId in data.buses) {
            let liEl = document.createElement('li')
            liEl.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`
            ul.appendChild(liEl)
        }
    } catch (error) {

        stopNameInput.textContent = 'Error'
    }





}