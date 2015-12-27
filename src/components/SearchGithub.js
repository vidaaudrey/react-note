import React ,{Component} from 'react'
import {History} from 'react-router'


const SearchGithub = React.createClass({
    mixins: [History],
    setRef: function(ref){
        this.usernameRef = ref
    },
    handleSubmit: function(){
        const username = this.usernameRef.value
        this.usernameRef.value = ''
        this.history.pushState(null, '/profile/' + username)
    },
    render: function () {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="type github username" ref={this.setRef}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Add Note</button>
            </form>
        )
    }
})


export default SearchGithub