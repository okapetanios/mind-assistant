import React from 'react';
import LabelClassComponent from '../label/LabelClassComponent';
import '../../App.css';

class NoteComponent extends React.Component {
    state = {
        note: this.props.note
    }

    handleOnChange = event => {
        this.setState({note: event.target.value});
    };

    render() {
        return (
            <div>
                <li className="list-group-item">
                    <div className="card">
                        <div className="form-group">
                            <h5 className="select">Visibility</h5>
                            <select className="form" id="exampleFormControlSelect1">
                                <option>Public</option>
                                <option>Private</option>
                            </select>
                        </div>
                        <textarea className="form-control"
                                  type="text"
                                  placeholder="Note text"
                                  onChange={(e) => {
                                      const newText = e.target.value;
                                      this.setState(prevState => {
                                          prevState.note.text = newText;
                                          return prevState;
                                      })
                                  }}/>
                        <button
                            className="btn btn-success saveBtn">
                            Save
                        </button>
                        <div className="card-body">
                            <p className="card-text">{this.state.note.text}</p>
                            {/* LabeListComponent instead of Label Conmponent */}
                            <button onClick={this.createLabel} className="btn btn-primary">
                                Add Label
                            </button>
                            <LabelClassComponent/>
                        </div>
                        {/* TODO ADD LABEL */}
                    </div>

                </li>
            </div>
        )
    }
}

export default NoteComponent;
