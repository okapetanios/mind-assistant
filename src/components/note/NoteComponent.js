import React from 'react';
// import LabelClassComponent from '../label/LabelClassComponent';
import '../../App.css';

class NoteComponent extends React.Component {
    state = {
        note: this.props.note,
        editing: this.props.editing
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editing !== this.props.editing) {
            this.setState({
                              editing: this.props.editing
                          })
        }}

    handleOnChange = event => {
        this.setState({note: event.target.value});
    };

    //TODO:
    //Change the status to float right (not actually working currently)
    //Add in edit functionality
    //Edit label functionality
    render() {
        return (
            <div>
                <li className={"list-group-item"}>
                    {!this.state.editing &&
                     <div className={"row"}>
                         <div className={"col"}>
                             <div>
                                 <select className="form-control"
                                         id="editRole"
                                         placeholder={"private"}
                                         onChange={(e) => {
                                             const newStatus = e.target.value;
                                             this.setState(prevState => {
                                                 prevState.note.status = newStatus;
                                                 return prevState;
                                             })
                                         }}>
                                     <option value={"private"}>Private</option>
                                     <option value={"public"}>Public</option>
                                 </select>
                             </div>
                         </div>
                         <input className="form-control"
                                type="text"
                                placeholder="Note Title"
                                onChange={(e) => {
                                    const newText = e.target.value;
                                    this.setState(prevState => {
                                        prevState.note.title = newText;
                                        return prevState;
                                    })
                                }}/>
                         <input className="form-control"
                                type="text"
                                placeholder="Note Text"
                                onChange={(e) => {
                                    const newText = e.target.value;
                                    this.setState(prevState => {
                                        prevState.note.note = newText;
                                        return prevState;
                                    })
                                }}/>
                         <button
                             className="btn btn-success"
                             onClick={() => this.props.saveNote(this.state.note)}>
                             Update
                         </button>
                     </div>
                    }
                    <div className={"row"}>
                        <div className={"col"}>
                            {this.props.note.status}
                            <h3>{this.props.note.title}</h3>
                        </div>
                         <div className={"col-2 float-right"}>
                             <button
                                 className="btn btn-danger"
                                 onClick={() => this.props.deleteNote(this.state.note.id)}>
                                 Delete
                             </button>
                         </div>
                    </div>
                    <p>
                        {this.props.note.note}
                    </p>
                    <div className={"row"}>
                        {this.props.note.label}
                    </div>
                </li>
            </div>
            // <div>
            //     <li className="list-group-item">
            //         <div className="card">
            //             <div className="form-group">
            //                 <h5 className="select">Visibility</h5>
            //                 <select className="form" id="exampleFormControlSelect1">
            //                     <option>Public</option>
            //                     <option>Private</option>
            //                 </select>
            //             </div>
            //             <textarea className="form-control"
            //                       type="text"
            //                       placeholder="Note text"
            //                       onChange={(e) => {
            //                           const newText = e.target.value;
            //                           this.setState(prevState => {
            //                               prevState.note.text = newText;
            //                               return prevState;
            //                           })
            //                       }}/>
            //             <button
            //                 className="btn btn-success saveBtn">
            //                 Save
            //             </button>
            //             <div className="card-body">
            //                 <p className="card-text">{this.state.note.text}</p>
            //                 {/* LabeListComponent instead of Label Conmponent */}
            //                 <button onClick={this.createLabel} className="btn btn-primary">
            //                     Add Label
            //                 </button>
            //                 <LabelClassComponent/>
            //             </div>
            //             {/* TODO ADD LABEL */}
            //         </div>
            //
            //     </li>
            // </div>
        )
    }
}

export default NoteComponent;
