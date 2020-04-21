import React from 'react';
import LabelComponent from './LabelComponent';
import '../../App.css';
import {findCurrentUser} from "../../actions/userActions";
import {connect} from "react-redux";
import userService from "../../services/userService";
import labelService from "../../services/labelService";
import {createLabel, deleteLabel, findLabelsForGroup, updateLabel} from "../../actions/labelActions";

const UserService = new userService();
const LabelService = new labelService();

class LabelListComponent extends React.Component {
    state = {
        user: {id: 0},
        folderId: 0,
        newTitle: "New Label",
        activeLabel: "",
        editingId: "",
        editTitle: "",
        status: ""
    };

    //TODO:
    //Add functionality to determine if user or folder should be created
    //Add functionality to choose label to change note display

    componentDidMount() {
        this.props.findCurrentUser();
        console.log(this.props.folderId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.user.id === 0 && this.props.user.id > 0){
            this.setState({
                user: this.props.user
            });
            this.props.findLabelsForUser(this.props.user.id);
        }
    }

    //TODO: Figure out push
    //change to title?
    selectLabel = (labelId) => {
        // this.props.history.push(`/labels/${labelId}`);
        this.setState({
            activeLabel: labelId
        });
    };

    newTitle = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    };

    editTitle = (e) => {
        this.setState({
            editTitle: e.target.value
        })
    };

    editStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    };

    editLabel = (label) => {
        this.setState({
            editingId: label.id,
            editTitle: label.title,
            status: label.status
        })
    };

    cancelEdit = () => {
        this.setState({
            editingId: "",
            editTitle: "",
            status: ""
        })
    };


    createUserLabel = () => {
        this.props.createLabelForUser(this.props.user.id, {title: this.state.newTitle});
        this.setState({
            newTitle: "New Label"
        })
    };

    //TODO:
    //Figure out how to access folder id
    //Below information is a placeholder and not accurate
    createFolderLabel = () => {
        const folderId = this.props.folder.id;
        this.props.createLabelForFolder(folderId, {title: this.state.newTitle})
    };

    deleteLabel = (labelId) => {
        this.props.deleteLabel(labelId)
    };

    updateLabel = (labelId) => {
        const label = {id: labelId, title: this.state.editTitle, status: this.state.status};
        this.props.deleteLabel(labelId, label);
        this.setState({
            editTitle: "",
            status: ""
        })
    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.labels.length > 0 && this.props.labels.map(label =>
                        <div key={label.id}>
                            <LabelComponent
                                label={label}
                                active={label.id === this.state.activeLabel}
                                select={this.selectLabel}
                                editing={label.id === this.state.editingId}
                                edit={this.editLabel}
                                editTitle={this.editTitle}
                                newTitle={this.state.editTitle}
                                editStatus={this.editStatus}
                                newStatus={this.state.status}
                                cancel={this.cancelEdit}
                                save={this.updateLabel}
                                deleteLabel={this.deleteLabel}
                            />
                        </div>
                    )}
                </ul>
                <br/>
                <div>
                    <input
                        type={"text"}
                        onChange={this.newTitle}
                        className="form-control"
                        placeholder={"New Label"}
                        value={this.state.newTitle}
                    />
                    <button onClick={this.createUserLabel}
                            className="btn btn-primary btn-block">
                        Add Label
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    labels: state.labels.labels
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    findLabelsForUser: (userId) => {
        LabelService.findLabelsForUser(userId).then(labels => {
            dispatch(findLabelsForGroup(labels))
        })
    },
    createLabelForUser: (userId, label) => {
        LabelService.createLabelForUser(userId, label).then(label => {
            dispatch(createLabel(label))
        })
    },
    createLabelForFolder: (folderId, label) => {
        LabelService.createLabelForFolder(folderId, label).then(label => {
            dispatch(createLabel(label))
        })
    },
    deleteLabel: (labelId) => {
        LabelService.deleteLabel(labelId).then(status => {
            dispatch(deleteLabel(labelId))
        })
    },
    updateLabel: (labelId, label) => {
        LabelService.updateLabel(labelId, label).then(status => {
            dispatch(updateLabel(labelId, label))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LabelListComponent)
