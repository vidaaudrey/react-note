import Fetch from 'whatwg-fetch'

const get = function(url){
    return fetch(url).then(function(res){
        return res.json();
    })
}

const api = {
    get: get
}

export default api
