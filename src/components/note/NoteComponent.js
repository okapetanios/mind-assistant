import React from 'react';
// import LabelClassComponent from '../label/LabelClassComponent';
import '../../App.css';
import AddLabelComponent from "../label/AddLabelComponent";

class NoteComponent extends React.Component {
    state = {
        note: this.props.note,
        showing: false,
        labels: []
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
                    {showing ?
                     <div>
                         <div className={"form-group row"}>
                             <div className={"col"}>
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
                             </div>
                             <div className="col-sm-2">
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
                                 <button
                                     className="btn btn-danger float-right"
                                     onClick={() => this.props.deleteNote(this.state.note.id)}>
                                     <i className="fas fa-times"></i>
                                 </button>
                             </div>
                         </div>
                         <div className="form-group row">
                             <label htmlFor="editStatus"
                                    className="col-sm-2 col-form-label">
                                 Change Status:
                             </label>
                             <div className="col-sm">
                                 <select className="form-control"
                                         id="editStatus"
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
                         <div className={"form-group row"}>
                             <div className={"col"}>
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
                             </div>
                         </div>
                         <AddLabelComponent/>
                     </div>
                     :
                     <div>
                         <div className={"row"}>
                             <div className={"col"}>
                                 <h3>{this.props.note.title}</h3>
                             </div>
                             <div className="col-sm-2">
                                 <button className={"btn btn-outline-dark float-right"}
                                         onClick={() => this.setState({showing: !showing})}>
                                     <i className="fas fa-pencil-alt"></i>
                                 </button>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col">
                                 <p>{this.props.note.status}</p>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col">
                                 <p>{this.props.note.note}</p>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-1">
                                 Labels:
                             </div>
                             <div className="col-sm">
                                 <ul className={"nav nav-pills"} id={"ma-labels"}>
                                     {this.state.labels.length === 0 && <p>None</p>}
                                     {this.state.labels.length > 0 && this.state.labels.map(label =>
                                         <li className={"nav-item"} key={label.id}>
                                             {label.title}<button className={"btn btn-link"}></button>
                                         </li>
                                     )}
                                 </ul>
                             </div>
                         </div>
                     </div>
                    }
                </li>
            </div>

        )
    }
}

export default NoteComponent;
