window.addEventListener('load', async () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin)
});

async function onLogin(e) {
    let url = 'http://localhost:3030/users/login'
    e.preventDefault();

    let form = e.target
    let formData = new FormData(form);

    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    try {
        let res = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (res.ok != true) {
            let error = await res.json();
            throw new Error(error.message)
        }
          let data = await res.json();
          let token = data.accessToken;
          localStorage.setItem('token',token)
          window.location='/index.html'

    } catch (err) { alert(err.message) }
}