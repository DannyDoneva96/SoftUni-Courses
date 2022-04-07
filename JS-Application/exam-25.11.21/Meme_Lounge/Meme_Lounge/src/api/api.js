
    
async function request(url, options) {
    try {
        const response = await fetch(hostname + url, options);
        if (response.ok == false) {
            const error = await response.json()
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        // alert(err.message)
        notify(err.message);
        throw err;
    }
}
