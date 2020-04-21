import React from 'react';
// import LabelClassComponent from '../label/LabelClassComponent';
import '../../App.css';

class NoteComponent extends React.Component {
    state = {
        note: this.props.note,
        showing: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editing !== this.props.editing) {
            this.setState({
                              editing: this.props.editing
                          })
        }
    }

    handleOnChange = event => {
        this.setState({note: event.target.value});
    };

    //TODO:
    //Change the status to float right (not actually working currently)
    //Add in edit functionality
    //Edit label functionality
    render() {
        const {showing} = this.state;
        return (
            <div>
                <li className="list-group-item">
                    <button className="btn btn-outline" onClick={() => this.setState({showing: !showing})}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    {showing
                     ?
                     <div className="row">
                         <div className="col">
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
                                placeholder="Change Title"
                                onChange={(e) => {
                                    const newText = e.target.value;
                                    this.setState(prevState => {
                                        prevState.note.title = newText;
                                        return prevState;
                                    })
                                }}/>
                         <textarea className="form-control"
                                   type="text"
                                   placeholder="Change Note"
                                   onChange={(e) => {
                                       const newText = e.target.value;
                                       this.setState(prevState => {
                                           prevState.note.note = newText;
                                           return prevState;
                                       })
                                   }}/>

                         <button
                             className="btn btn-success"
                             onClick={() => {
                                 this.props.saveNote(this.state.note);
                                 this.setState(prevState => {
                                     prevState.showing = false
                                     return prevState
                                 })
                             }}>
                             <i className="fas fa-check"></i>
                         </button>
                         <div className={"col-2 float-right"}>
                             <button
                                 className="btn btn-danger"
                                 onClick={() => this.props.deleteNote(this.state.note.id)}>
                                 <i className="fas fa-times"></i>
                             </button>
                         </div>
                     </div>
                     :
                     <div>
                         <div className="row">
                             <div className="col">
                                 {this.props.note.status}
                                 <h3>{this.props.note.title}</h3>
                             </div>
                         </div>
                         <p>
                             {this.props.note.note}
                         </p>
                         <div className="row">
                             {this.props.note.label}
                         </div>
                     </div>
                    }
                </li>
            </div>

        )
    }
}

export default NoteComponent;
