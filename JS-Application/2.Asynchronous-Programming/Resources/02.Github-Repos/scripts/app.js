// function loadRepos() {

// 	let list = document.getElementById('repos');
// 	let username = document.getElementById('username').value

// 	let url = 'https://api.github.com/users/' + username + '/repos';

// 	fetch(url)
// 		.then(res => {
// 			if (res.ok == false) {
// 				throw new Error(`${res.status} ${res.statusText}`);
// 			}
// 			return res.json();
// 		})
// 		.then(handleResponse)
// 		.catch(handleError);

// 	function handleResponse(data) {
// 		list.innerHTML = '';

// 		for (let repo of data) {
// 			let liEl = document.createElement('li');
// 			liEl.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`;
// 			list.appendChild(liEl);
// 		}
// 	}

// 	function handleError(error) {
// 		list.innerHTML = '';
// 		list.textContent = `${error.message}`
// 	}

// }

function loadRepos() {
    const username = document.querySelector('#username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then((response) => {
            if (response.status == 404) {
                throw new Error('User not found')
            }
            console.log(response);
            return response.json() //return promisse
        })
        .then((data) => {
            //dat => like array
            console.log(data)
            const ul = document.querySelector('#repos');
            ul.innerHTML = '';

            data.forEach(d => {
                const a = document.createElement('a');
                const li = document.createElement('li');
                a.setAttribute('href', d.html_url);
                a.textContent = d.full_name;

                li.append(a);
                ul.append(li);
            });
        })
        .catch(error => {
            alert(error.message)
        });
}