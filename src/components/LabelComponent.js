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
    return <a class="label"></a>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default LabelComponent;
