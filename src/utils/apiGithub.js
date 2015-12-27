import api from './api'
const githubRootUrl = 'https://api.github.com/users/'
const token = 'e73079f998ab0dc38687add6fa7897ce6f544159'

const getGithubRepos = (username) => (
    api.get(`${githubRootUrl}${username}/repos?access_token=${token}`)
)


const getGithubUserInfo =  (username) => (
     api.get(`${githubRootUrl}${username}?access_token=${token}`)
)


const apiGitHub = {
    getGithubInfo: (username) => (
         Promise.all([
                getGithubRepos(username), 
                getGithubUserInfo(username)
            ]).then((values) => (
                {
                    repos: values[0],
                    bio: values[1]
                }
            ))
            
    )

}

export default apiGitHub
