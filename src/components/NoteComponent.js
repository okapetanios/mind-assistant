import React from 'react';
import LabelComponent from './LabelComponent'
class NoteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            someKey: 'I\'m a Note'
        }


    }

  render() {
    return <div class="card"><p>{this.state.someKey}</p>

    <LabelComponent/>
    
    </div>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'I\'m a Note after Mount'
    });
  }
}

export default NoteComponent;
