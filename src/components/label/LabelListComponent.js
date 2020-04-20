import React from 'react';
import LabelComponent from './LabelComponent';
import '../../App.css';
import {findCurrentUser} from "../../actions/userActions";
import {connect} from "react-redux";
import userService from "../../services/userService";
import labelService from "../../services/labelService";
import {createLabel, deleteLabel, findLabelsForGroup} from "../../actions/labelActions";

const UserService = new userService();
const LabelService = new labelService();

class LabelListComponent extends React.Component {
    state = {
        newTitle: "New Label",
        user: {},
        labels: [
            {id: 123, title: "Label 1"},
            {id: 124, title: "Label 2"},
            {id: 125, title: "Label 3"}
        ]
    };

    //TODO:
    //Figure out why the current user doesn't load on mount
    //Add functionality to determine if user or folder should be created

    componentDidMount() {
        this.props.findCurrentUser();
        // this.props.findLabelsForUser(this.props.user.id);
        this.props.findLabelsForUser(2);
        // console.log(this.props.user);
        // console.log(this.props.labels);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.user !== prevState.user){
            // console.log(this.props.user);
            // console.log(this.props.labels);
            this.setState({
                user: this.props.user
            })
        }
    }

    createUserLabel = () => {
        this.props.createLabelForUser(this.props.user.id, {title: this.state.newTitle})
    };

    //TODO:
    //Figure out how to access folder id
    //Below information is a placeholder and not accurate
    createFolderLabel = () => {
        const folderId = this.props.folder.id;
        this.props.createLabelForFolder(folderId, {title: this.state.newTitle})
    };

    titleChanged = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    };

    deleteLabel = (id) => {
        this.props.deleteLabel(id)
    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.labels && this.props.labels.map(label =>
                        <div key={label.id}>
                            <LabelComponent
                                label={label}
                            />
                        </div>
                    )}
                </ul>
                <br/>
                <div>
                    <input
                        type={"text"}
                        onChange={this.titleChanged}
                        className="form-control"
                        placeholder={"New Label"}
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
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LabelListComponent)