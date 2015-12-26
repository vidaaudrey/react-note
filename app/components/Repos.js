var React = require('react')
var Router = require('react-router')

var Profile = React.createClass({
    getInitialState(){
        return{
            notes: [],
            repos: [], 
            bio: {}
        }
    },
    render: function(){
        console.log('username', this.props.params.username);
        return (
           <div className="row">
               <div className="col-md-4">User Profile</div>
               <div className="col-md-4">Repos</div>
               <div className="col-md-4">Bio</div>
           </div>
            )
            
    }
})

module.exports = Profile 