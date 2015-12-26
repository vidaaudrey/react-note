import React from'react'

const AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    setRef: function(ref){
        this.note = ref
    },
    handleSubmit: function(){
        const newNote = this.note.value
        this.note.value = ''
        this.props.addNote(newNote)
    },
    render: function () {
        return (
            <form className="form-inline" role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Add Note</button>
            </form>
        )
    }
})

export default AddNote
