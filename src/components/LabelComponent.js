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
        return (
            <div>
                <a className="label">I'm a label</a>
                <input
                    type="text"
                    className="form-control new-label"
                    placeholder="New Label"
                    onChange={this.handleOnChange}/>
                <button
                    className="btn btn-success btn-sm mx-1"
                    onClick={this.saveLabelTitle}>Save
                </button>
            </div>
        )
        // Render option to create a label
    }

    componentDidMount() {
        this.setState({
                          someKey: 'otherValue'
                      });
    }
}

export default LabelComponent;
