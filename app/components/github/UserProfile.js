var React = require('react')

var UserProfile = React.createClass({
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