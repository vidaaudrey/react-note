import api from './api'
const githubRootUrl = "https://api.github.com/users/"

const getGithubRepos = function(username){
    return api.get(githubRootUrl + username+'/repos')
}

const getGithubUserInfo =  function(username){
    return api.get(githubRootUrl + username)
}

const apiGitHub = {
    getGithubInfo: function(username){
        return Promise.all([
                getGithubRepos(username), 
                getGithubUserInfo(username)
            ]).then(function(values){
                return {
                    repos: values[0],
                    bio: values[1]
                }
            })

    }

}

export default apiGitHub
