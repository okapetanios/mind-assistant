import React from 'react';
import NoteComponent from './NoteComponent';
import '../App.css';

class NoteListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      note: {
        id: -1,
        title: 'New Note'
      },
      notes: [
        {id: 123, title: "Note 1", text: 'wow'},
        {id: 124, title: "Note 2", text: 'wow cool'},
        {id: 125, title: "Note 3", text: 'wow this'}
      ],
        label: {
            id: -1,
            title: 'New Label'
        },
        labels: [
            {id: 123, title: "Label 1"},
            {id: 124, title: "Label 2"},
            {id: 125, title: "Label 3"}
        ],
    }

  }

  createNote= () => {
    this.state.note.id = (new Date()).getTime();
    this.setState({
                    notes: [this.state.note, ...this.state.notes]
                  })
  }

  textChanged = (event) => {
    this.setState({
                    note: {
                      text: event.target.value
                    }
                  })
  }

  deleteNote = (id) => {
    this.setState({
                    Notes: this.state.notes.filter(note => note.id !== id)
                  })
  }

  render() {
    return (
        <ul className="list-group">
          <li className="list-group-item">
            <button onClick={this.createNote} className="btn btn-primary">
              Add Note
            </button>
          </li>
          {this.state.notes.map(
              note =>
                  <NoteComponent
                      deleteNote={this.deleteNote}
                      textChange={this.textChanged}
                      {...this.props} note={note}
                      key={note.id}/>
          )
          }
        </ul>
    )

  }
}

export default NoteListComponent;

