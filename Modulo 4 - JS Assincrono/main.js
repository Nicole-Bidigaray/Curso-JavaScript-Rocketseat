axios.get('https://api.github.com/users/Nicole-Bidigaray')
    .then(function(response) {
        console.log(response)
            //(response.data.avatar_url)
    })
    .catch(function(error) {
        console.warn(error)
    })