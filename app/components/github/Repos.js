import React from'react'

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    return (
      <div> Repos 
        {this.props.repos}

      </div>
      )
  }
})

module.exports = Repos 