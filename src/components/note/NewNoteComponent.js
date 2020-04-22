import React from 'react';
import '../../App.css';
import AddLabelComponent from "../label/AddLabelComponent";

class NewNoteComponent extends React.Component {
    state = {
        newTitle: "New Note",
        newText: "Note Body",
        newStatus: "private",
        addLabel: false,
        newLabels: [],
        curLabels: []
    };

    titleChanged = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    };

    textChanged = (e) => {
        this.setState({
            newText: e.target.value
        })
    };

    statusChanged = (e) => {
        this.setState({
            newStatus: e.target.value
        })
    };

    updateLabels = (label) => {
        this.setState(prevState => ({
            curLabels: [...prevState.curLabels, label],
            newLabels: [...prevState.newLabels, label.id]
        }));
    };

    addLabel = () => {
        this.setState({
            addLabel: true
        })
    };

    saveNote = () => {
        const note = {
            title: this.state.newTitle,
            note: this.state.newText,
            status: this.state.newStatus,
            labels: this.state.newLabels
        };
        this.props.createNote(note);
    };

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="addTitle"
                           className="col-sm-2 col-form-label">
                        Title
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="addTitle"
                               placeholder="New Title (if applicable)"
                               onChange={this.titleChanged}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="addStatus"
                           className="col-sm-2 col-form-label">
                        Status
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control"
                                id="addStatus"
                                placeholder={"private"}
                                onChange={this.statusChanged}
                        >
                            <option value={"private"}>Private</option>
                            <option value={"public"}>Public</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <textarea className="form-control "
                                  placeholder={"New Note"}
                                  onChange={this.textChanged}
                        />
                    </div>
                </div>
                {this.state.addLabel && <AddLabelComponent
                    folderId={this.props.folderId}
                    labelId={this.props.labelId}
                    updateLabels={this.updateLabels}
                />}
                <div className="row">
                    <div className="col-lg-2 col-sm-3">
                        Current Labels:
                    </div>
                    <div className="col-sm">
                        <ul className={"nav nav-pills"} id={"ma-labels"}>
                            {this.state.newLabels.length === 0 && <p>None</p>}
                            {this.state.curLabels.length > 0 && this.state.curLabels.map(label =>
                                <li key={label.id} className={"nav-item"} >
                                    {label.title}<button className={"btn btn-link"}></button>
                                </li>
                            )}
                        </ul>
                    </div>
                    {!this.state.addLabel &&
                    <div className="col-sm-5">
                        <button className={"btn btn-primary float-right"}
                                onClick={this.addLabel}>
                            Add Label
                        </button>
                    </div>}
                </div>
                <br/>
                <div className={"row"}>
                    <button className="btn btn-primary btn-block"
                            onClick={this.saveNote}>
                        Add Note
                    </button>
                </div>

            </div>
        )
    }
}

export default NewNoteComponent;
