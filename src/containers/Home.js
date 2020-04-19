import React, { Component } from "react";
import NoteListComponent from '../components/note/NoteListComponent'
import FolderListComponent from '../components/folder/FolderListComponent'
import {findCurrentUser, logoutUser} from "../actions/userActions";
import {connect} from "react-redux";
import userService from "../services/userService";

const UserService = new userService();

class Home extends Component {
    componentDidMount() {
        this.props.findCurrentUser()
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-4">
                        <FolderListComponent/>
                    </div>
                    <div className="col-6">
                        <NoteListComponent/>
                    </div>
                </div>
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Home)