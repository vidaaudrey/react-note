import React ,{Component} from 'react'

export default class SearchGithub extends Component {

    setRef(ref){
        this.usernameRef = ref
    }
    handleSubmit(){
        const username = this.usernameRef.value
        this.usernameRef.value = ''
        this.props.history.pushState(null, '/profile/' + username)
    }
    render () {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="type github username" ref={this.setRef.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} > Search Github</button>
            </form>
        )
    }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

