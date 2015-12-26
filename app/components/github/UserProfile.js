import React from'react'

const UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <div> 
        {this.props.username}
        {this.props.bio.name}
      </div>
      )
  }
})

module.exports = UserProfile 