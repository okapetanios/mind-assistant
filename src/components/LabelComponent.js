import React from 'react';
import '../App.css';

class LabelComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <a class="label">I'm a label</a>;
    // Render option to create a label
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default LabelComponent;
