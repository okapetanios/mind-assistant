import React from 'react';
import '../../App.css';

class LabelClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return (
            <ul>
                <li>
                    <div>
                        <p className="label">I'm a label</p>
                    </div>
                </li>
            </ul>
        )
    }
}

export default LabelClassComponent;
