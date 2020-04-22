import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findCurrentUser} from "../../actions/userActions";
import folderService from "../../services/folderService";
import FolderComponent from "./FolderComponent";
import {createFolder, deleteFolder, findFoldersForUser, updateFolder} from "../../actions/folderActions";

const UserService = new userService();
const FolderService = new folderService();


class FolderListComponent extends React.Component {
    state = {
        newTitle: "",
        showing: false,
        editingId: "",
        editTitle: ""
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

    saveFolder = (folder) => {
        this.setState({
                          editing: ''
                      });
        this.props.updateFolder(folder.id,folder)
    }

    editTitle = (e) => {
        this.setState({
                          editTitle: e.target.value
                      })
    };

    editFolder = (folder) => {
        this.setState({
                          editingId: folder.id,
                          editTitle: folder.title
                      })
    };

    editFolder = (folder) => {
        this.setState({
                          editingId: folder.id,
                          editTitle: folder.title
                      })
    };

    cancelEdit = () => {
        this.setState({
                          editingId: "",
                          editTitle: ""
                      })
    };

    updateFolder = (folderId) => {
        const folder = {id: folderId, title: this.state.editTitle};
        this.props.updateFolder(folderId, folder);
        this.setState({
                          editingId: "",
                          editTitle: ""
                      })
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
                    {this.props.folders && this.props.folders.map(folder =>
                        <div key={folder.id}>
                            <FolderComponent
                                cancel={this.cancelEdit}
                                save={this.updateFolder}
                                editing={folder.id === this.state.editingId}
                                edit={this.editFolder}
                                editTitle={this.editTitle}
                                newTitle={this.state.editTitle}
                                editStatus={this.editStatus}
                                saveFolder ={this.saveFolder}
                                folder={folder}
                                deleteFolder={this.deleteFolder}
                            />
                        </div>
                    )}
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
    },
    updateFolder: (folderId, folder) => {
        FolderService.updateFolder(folderId,folder).then(status => {
            dispatch(updateFolder(folderId,folder))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(FolderListComponent)
