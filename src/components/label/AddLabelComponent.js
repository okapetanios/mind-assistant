import React from 'react';
import '../../App.css';

class AddLabelComponent extends React.Component {
    state = {
        newLabel: "",
        existingLabel: "none",
        newLabels: [],
        userLabels: [{id:1, title: "label1"}]
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

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default AddLabelComponent;
