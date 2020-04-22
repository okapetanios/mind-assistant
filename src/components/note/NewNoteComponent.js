import React from 'react';
import '../../App.css';

class NewNoteComponent extends React.Component {
    state = {
        newTitle: "New Note",
        newText: "Note Body",
        newStatus: "private",
        newLabel: "",
        newLabels: [{id: 1, title: "blah1"}, {id: 2, title: "blah2"}, {id: 3, title: "blah3"}]
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

   labelChanged = (e) => {
        this.setState({
            newLabel: e.target.value
        })
    };

    //TODO:
    //Add functionality to determine if user or folder should be created
    createNote = () => {
        const note = {
            title: this.state.newTitle,
            note: this.state.newText,
            status: this.state.newStatus
        };
        this.props.createUserNote(note);
        // this.props.createFolderNote(note)
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
                    <label htmlFor="addLabel"
                           className="col-sm-2 col-form-label">
                        Label
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="addLabel"
                               placeholder="New Label (if applicable)"
                               onChange={this.labelChanged}
                        />
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
                        onClick={this.createNote}>
                    Add Note
                </button>
            </div>
        )
    }
}

export default NewNoteComponent;
