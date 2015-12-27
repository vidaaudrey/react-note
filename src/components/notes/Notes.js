import React ,{Component} from 'react'
import NotesList from './NotesList'
import AddNote from './AddNote'

export default class Notes extends Component {
    render() {
        return ( 
            < div >
            < h3 > Notes for {this.props.username} < /h3> 
            <AddNote username={this.props.username} addNote={this.props.addNote} />
            < NotesList notes = {this.props.notes} />
            < /div>
        )
    }
}

Notes.proTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired, 
    addNote: React.PropTypes.func.isRequired
}