import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findCurrentUser} from "../../actions/userActions";
import folderService from "../../services/folderService";
import FolderComponent from "./FolderComponent";
import {findFoldersForUSER} from "../../actions/folderActions";

const UserService = new userService();
const FolderService = new folderService();

class FolderListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            folder: {
                id: -1,
                title: 'New Folder'
            },

            folders: [
                {id: 123, title: "Folder 1"},
                {id: 124, title: "Folder 2"},
                {id: 125, title: "Folder 3"}
            ]
        }

    }

    componentDidMount() {
        this.props.findCurrentUser();
        this.props.findFoldersForUser();
        console.log(this.props.folders)
    }

    createFolder = () => {
        this.state.folder.id = (new Date()).getTime();
        this.setState({
                          folders: [this.state.folder, ...this.state.folders]
                      })
    };

    titleChanged = (event) => {
        this.setState({
                          folder: {
                              title: event.target.value
                          }
                      })
    };

    deleteFolder = (id) => {
        this.setState({
            folders: this.state.folders.filter(folder => folder.id !== id)
        })
    };

    render() {
        return (
            <div>
                <div className={"row"}>
                    <input
                        onChange={this.titleChanged}
                        className="form-control"/>
                </div>
                <div className={"row"}>
                    <button onClick={this.createFolder} className="btn btn-primary btn-block">
                        Add Folder
                    </button>
                </div>
                <div className={"row"}>
                    {this.state.folders && this.state.folders.map(folder =>
                        <div key={folder.id}>
                            <FolderComponent
                                deleteFolder={this.deleteFolder}
                                folder={folder}
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
            dispatch(findFoldersForUSER(folders))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(FolderListComponent)