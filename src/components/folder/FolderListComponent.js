import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findCurrentUser} from "../../actions/userActions";
import folderService from "../../services/folderService";
import FolderComponent from "./FolderComponent";
import {createFolder, deleteFolder, findFoldersForUser} from "../../actions/folderActions";

const UserService = new userService();
const FolderService = new folderService();

class FolderListComponent extends React.Component {
    state = {
        newTitle: ""
    };

    componentDidMount() {
        this.props.findCurrentUser();
        this.props.findFoldersForUser(this.props.user.id);
    }

    titleChanged = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    };

    createFolder = () => {
        this.props.createFolder(this.props.user.id, {title: this.state.newTitle})
    };

    deleteFolder = (id) => {
        this.props.deleteFolder(id)
    };

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <input
                        onChange={this.titleChanged}
                        className="form-control"
                        placeholder={"New Folder"}
                    />
                </div>
                <div className={"row"}>
                    <button onClick={this.createFolder} className="btn btn-primary btn-block">
                        Add Folder
                    </button>
                </div>
                <br/>
                <div className={"row"}>
                    {this.props.folders && this.props.folders.map(folder =>
                        <div key={folder.id}>
                            <FolderComponent
                                folder={folder}
                                deleteFolder={this.deleteFolder}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    folders: state.folders.folders
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    findFoldersForUser: (userId) => {
        FolderService.findFoldersForUser(userId).then(folders => {
            dispatch(findFoldersForUser(folders))
        })
    },
    createFolder: (userId, folder) => {
        FolderService.createFolder(userId,folder).then(folder => {
            dispatch(createFolder(folder))
        })
    },
    deleteFolder: (folderId) => {
        FolderService.deleteFolder(folderId).then(status => {
            dispatch(deleteFolder(folderId))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(FolderListComponent)