import Fetch from 'whatwg-fetch'

const get = (url) => (
    fetch(url)
    .then((res) => 
        res.json()
    )
)


const api = {
    get: get
}

export default api
