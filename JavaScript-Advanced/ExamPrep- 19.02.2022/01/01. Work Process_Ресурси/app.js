function solve() {
    let colection = document.querySelectorAll("form input")
    let sum = document.getElementById("sum")
    let btnAdd = document.getElementById('add-worker')
    btnAdd.addEventListener('click', add)
    let budget = 0;
    function add(e) {
        e.preventDefault()

        for (let every of Array.from(colection)) {
            if (every.value == '') {
                return
            }
        }
        let [fName, lName, email, birth, position, salary] = Array.from(colection)
        salary = Number(salary.value)
        budget += salary
        sum.textContent = budget.toFixed(2)

        let tBody = document.getElementById('tbody')
        tBody.innerHTML += `<tr><td>${fName.value}</td>
            <td>${lName.value}</td>
            <td>${email.value}</td>
            <td>${birth.value}</td>
            <td>${position.value}</td>
            <td>${salary}</td>
            <td><button class='fired'>Fired</button><button class='edit'>Edit</button></td></tr>`

        for (let every of Array.from(colection)) {
            every.value = ''

        }

    }



    document.querySelector('#table').addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON') {
            ev.preventDefault();

            if (ev.target.textContent === 'Fired') {
                  let trEl = ev.target.parentElement.parentElement
                  let children = trEl.querySelectorAll('td')
                  let money = children[5]
                  budget-= Number(money.textContent)
                  sum.textContent = budget.toFixed(2)
                  trEl.remove()
            } else if (ev.target.textContent === 'Edit') {

                let trEl = ev.target.parentElement.parentElement
                let children = trEl.querySelectorAll('td')
                let [fName, lName, email, birth, position, salary] = Array.from(children)
                let money = salary
                budget-= Number(money.textContent)
                sum.textContent = budget.toFixed(2)
                document.getElementById("fname").value = fName.textContent
                document.getElementById("lname").value =lName.textContent
                document.getElementById("email").value=email.textContent
                document.getElementById("birth").value=birth.textContent
                document.getElementById("position").value=position.textContent
                document.getElementById("salary").value=salary.textContent

                trEl.remove()
            }
        }
    });

}
solve()