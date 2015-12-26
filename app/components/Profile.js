import React from 'react'
import Router from 'react-router'
import Repos from './github/Repos'
import UserProfile from './github/UserProfile'
import Notes from './notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

const Profile = React.createClass({
  mixins: [ReactFireMixin],
    getInitialState(){
        return{
            notes: ['a','b'],
            repos: [1, 2, 3], 
            bio: {
              name: "Audrey Li"
            }
        }
    },

    componentDidMount: function(){
        this.ref = new Firebase('https://react-note-au.firebaseio.com')
        // this.ref = new Firebase('https://github-note-taker.firebaseio.com')
        // when mounted, 'notes' is going to bind to firebase childRef. bindAsArray is firebase method
        const childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes' )
    },
    componentWillUnmount: function(){
      // remove the listener 
      this.unbind('notes');
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

module.exports = Profile 