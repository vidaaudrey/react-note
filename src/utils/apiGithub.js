import api from './api'
const githubRootUrl = 'https://api.github.com/users/'
import configSec from '../config/configSec'

const getGithubRepos = ((username) => 
    api.get(`${githubRootUrl}${username}/repos?access_token=${configSec.githubAccessToken}`)
)


const getGithubUserInfo =  ((username) => 
     api.get(`${githubRootUrl}${username}?access_token=${configSec.githubAccessToken}`)
)


const apiGitHub = {
    getGithubInfo: ((username) => 
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
