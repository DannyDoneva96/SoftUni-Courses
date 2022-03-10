window.addEventListener('load', async () => {
    let token = localStorage.getItem('token')

    if (token==null ){
        window.location = '/login.html'
    }
    let form = document.querySelector('form');
    form.addEventListener('submit', onCreateSubmit);
});

async function onCreateSubmit(e) {
    let url = 'http://localhost:3030/data/recipes';

    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let name = formData.get('name').trim();
    let img = formData.get('img').trim();
    let ingredients = formData.get('ingredients').trim().split('\n');
    let steps = formData.get('steps').trim().split('\n');

    let recipe = {
        name, img, ingredients, steps
    }
    let token = localStorage.getItem('token')

    if (token==null ){
        window.location = '/login.html'
        return;
    }
     
    try {
        let res = await fetch(url,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body: JSON.stringify(recipe)

            });
        if (res.ok == false) {
            let error = await res.json();
            throw new Error(error.message)
        }

        let result = await res.json();
        window.location='/index.html'
    } catch (err) { alert(err.message) }

}