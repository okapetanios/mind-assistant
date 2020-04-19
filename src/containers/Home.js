import React, { Component } from "react";
import "./Home.css"
import NoteListComponent from '../components/note/NoteListComponent'
import FolderListComponent from '../components/folder/FolderListComponent'
import {findCurrentUser, logoutUser} from "../actions/userActions";
import {connect} from "react-redux";
import userService from "../services/userService";
import LabelListComponent from "../components/label/LabelListComponent";

const UserService = new userService();

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findCurrentUser();
    }

    render() {
        return (
            <div className="App">
                <div className={"ma-welcome"}>
                    <h1>Hello {this.props.user.username}!</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <LabelListComponent/>
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