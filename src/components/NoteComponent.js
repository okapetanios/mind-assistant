import React from 'react';

class NoteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            someKey: 'someValue'
        }


    }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default NoteComponent;
