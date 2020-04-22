import React from 'react';
import '../../App.css';

class NewNoteComponent extends React.Component {
    state = {
        newTitle: "New Note",
        newText: "Note Body",
        newStatus: "private",
        newLabel: "",
        existingLabel: "none",
        newLabels: [],
        userLabels: [{id:1, title: "label1"}]
    };

    //TODO:
    //Add in label addition

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

    labelChange = (e) => {
        this.setState({
            newLabel: e.target.value
        })
    };

    labelChanged = (e) => {
        this.setState({
            existingLabel: e.target.value
        })
    };

    //need to create a label before add to note
    createLabel = () => {
        // this.props.createUserLabel({title: this.state.newLabel});
        // this.props.createFolderLabel({title: this.state.newLabel});
        this.setState(prevState => ({
            newLabel: "",
            newLabels: [...prevState.newLabels, this.props.label]
        }));
    };

    //need to find the label before add
    addLabel = (labelId) => {
        // this.props.findLabel(labelId);
        this.setState(prevState => ({
            newLabel: "",
            newLabels: [...prevState.newLabels, this.props.label]
        }));
    };

    saveNote = () => {
        const note = {
            title: this.state.newTitle,
            note: this.state.newText,
            status: this.state.newStatus
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
                    <label htmlFor="addNewLabel"
                           className="col-sm-2 col-form-label">
                        New Label
                    </label>
                    <div className="col-sm-9">
                        <input type="text"
                               className="form-control "
                               id="addNewLabel"
                               placeholder="New Label (if applicable)"
                               onChange={this.labelChange}
                               value={this.state.newLabel}
                        />
                    </div>
                    <div className={"col-1"}>
                        <button className={"btn btn-primary"}
                                onClick={() => this.createLabel()}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="addLabel"
                           className="col-sm-2 col-form-label">
                        Existing Label
                    </label>
                    <div className="col-sm-9">
                        <select className="form-control"
                                id="addLabel"
                                placeholder={"none"}
                                value={this.state.existingLabel}
                                onChange={this.labelChanged}>
                            <option value={"none"}>None</option>
                            {this.state.userLabels.length > 0 && this.state.userLabels.map(label =>
                                <option key={label.id} value={label.id}>{label.title}</option>
                            )}
                        </select>
                    </div>
                    <div className={"col-1"}>
                        <button className={"btn btn-primary"}
                                onClick={() => this.addLabel(this.state.existingLabel)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ma-labels"
                           className="col-sm-2 col-form-label">
                        Current Labels
                    </label>
                    <div className="col-sm-10">
                        <ul className={"nav nav-pills"} id={"ma-labels"}>
                            {this.state.newLabels.length === 0 && <p>None</p>}
                            {this.state.newLabels.length > 0 && this.state.newLabels.map(label =>
                                <li className={"nav-item"} key={label.id}>
                                    {label.title}<button className={"btn btn-link"}></button>
                                </li>
                            )}
                        </ul>
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
                <button className="btn btn-primary btn-block"
                        onClick={this.saveNote}>
                    Add Note
                </button>
            </div>
        )
    }
}

export default NewNoteComponent;
