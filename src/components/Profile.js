import React from 'react'
import Router from 'react-router'
import Repos from './github/Repos'
import UserProfile from './github/UserProfile'
import Notes from './notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'
import apiGitHub from '../utils/apiGithub'

const Profile = React.createClass({
  mixins: [ReactFireMixin],
    getInitialState(){
        return{
            notes: [],
            repos: [], 
            bio: {}
        }
    },

    componentDidMount: function(){
        this.ref = new Firebase('https://react-note-au.firebaseio.com')
        // this.ref = new Firebase('https://github-note-taker.firebaseio.com')
        // when mounted, 'notes' is going to bind to firebase childRef. bindAsArray is firebase method
        this.init(this.props.params.username);
    },
    componentWillUnmount: function(){
      // remove the listener 
      this.unbind('notes');
    },

    componentWillReceiveProps: function(newProps){
        this.unbind('notes');
        this.init(newProps.params.username);
    },

    init(username){
      const childRef = this.ref.child(username);
      this.bindAsArray(childRef, 'notes' )
      apiGitHub.getGithubInfo(username)
        .then(function(data){
          console.log(data)
          this.setState({
            bio: data.bio,
            repos: data.repos
          })
        }.bind(this))
    },

    handleAddNote: function(newNote){
      let index = this.state.notes.length;
      this.ref.child(this.props.params.username).child(index).set(newNote)
    }, 
    
    render: function(){
        console.log('username', this.props.params.username);
        return (
           <div className="row">
               <div className="col-md-4">
                <UserProfile bio={this.state.bio} username={this.props.params.username}/>
               </div>
               <div className="col-md-4">
                <Repos repos={this.state.repos}  username={this.props.params.username}/>
               </div>
               <div className="col-md-4">
                <Notes 
                  notes={this.state.notes} 
                  username={this.props.params.username} 
                  addNote={this.handleAddNote}
                />
               </div>
           </div>
        )
            
    }
})

export default Profile