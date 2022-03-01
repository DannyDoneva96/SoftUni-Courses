function loadRepos() {

	let list = document.getElementById('repos');
	let username = document.getElementById('username').value

	let url = 'https://api.github.com/users/' + username + '/repos';

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);

	function handleResponse(data) {
		list.innerHTML = '';

		for (let repo of data) {
			let liEl = document.createElement('li');
			liEl.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`;
			list.appendChild(liEl);
		}
	}

	function handleError(error) {
		list.innerHTML = '';
		list.textContent = `${error.message}`
	}

}