import React, {Component} from 'react'

export default class AddNote extends Component {
    setRef(ref){
        this.note = ref
    }

    handleSubmit(){
        const newNote = this.note.value
        this.note.value = ''
        this.props.addNote(newNote)
    }
    render() {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} >Add Note</button>
            </form>
        )
    }
}


AddNote.propTypes =  {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}