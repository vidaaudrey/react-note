import React from 'react'

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    let repos = this.props.repos.map(function(repo, index){
         return (
           <li className="list-group-item" key={index}>
             {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
             {repo.description && <p>{repo.description}</p>}
           </li>
         )
       });

    return (
      <div> Repos 
        <ul className="list-group">
          {repos}
        </ul>

      </div>
      )
  }
})

export default Repos