import React from 'react';
import {Dropdown} from "react-bootstrap";
import LabelComponent from './LabelComponent';
import '../App.css';

class NoteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            note: 'I\'m a Note'
        }

    }

    componentDidMount() {
        this.setState({
                          note: 'I\'m a Note after Mount'
                      });
    }

    // Handles the input field input
    handleOnChange = event => {
        this.setState({note: event.target.value});
    };

    render() {
        return <div>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Visibility
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="">Private</Dropdown.Item>
                    <Dropdown.Item href="">Public</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <li className="list-group-item">

                <div className="card" style={{width: '18rem'}}>
                    <input
                        type="text"
                        className="form-control new-course-title"
                        placeholder="Take a Note!"
                        onChange={this.handleOnChange}
                    />
                    <button
                        className="btn btn-success btn-sm mx-1"
                        onClick={this.saveCourseTitle}
                    >
                        Save
                    </button>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">{this.state.note}</p>
                        {/* LabeListComponent instead of Label Conmponent */}
                        <LabelComponent/>
                    </div>
                    {/* TODO ADD LABEL */}
                </div>

            </li>
        </div>

    }

}

export default NoteComponent;
