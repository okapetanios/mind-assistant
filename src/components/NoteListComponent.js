import React from 'react';
import NoteComponent from './NoteComponent';

class NoteListComponent extends React.Component {
  
  
  constructor() {
    super();
    this.state = {
      notesList: [{id : 123, title : "", note: ""}, {id : 234, title : "", note : ""}],
      
    };
  }

  render() {
    return (

      <div>
        <ul>


          <NoteComponent/>

        </ul>
      </div>
// Add a note
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default NoteListComponent;
