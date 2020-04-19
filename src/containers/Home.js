import React, { Component } from "react";
import "./Home.css"
import NoteListComponent from '../components/note/NoteListComponent'
import FolderListComponent from '../components/folder/FolderListComponent'
import {findCurrentUser, logoutUser} from "../actions/userActions";
import {connect} from "react-redux";
import userService from "../services/userService";
import LabelListComponent from "../components/label/LabelListComponent";
import jokeService from "../services/jokeService";
import {getJoke} from "../actions/jokeActions";

const UserService = new userService();
const JokeService = new jokeService();

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findCurrentUser();
        this.props.getRandomJoke();
    }

    render() {
        return (
            <div className="App">
                <div className={"container-fluid"}>
                    <br/>
                    <div className={"ma-welcome"}>
                        <h1>Hello {this.props.user.fname}!</h1>
                    </div>
                    <br/>
                    <div className={"ma-dad-joke"}>
                        <h3>Random Dad Joke</h3>
                        {this.props.joke}
                    </div>
                    <br/>
                    {this.props.user.role !== "student" &&
                    <div className="row">
                        <div className="col-1">

                        </div>
                        <div className="col-2">
                            <LabelListComponent/>
                        </div>
                        <div className="col-6">
                            <NoteListComponent/>
                        </div>
                    </div>}
                    {this.props.user.role === "student" &&
                    <div>
                        <FolderListComponent/>
                    </div>}
                </div>
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    joke: state.jokes.joke
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    getRandomJoke: () => {
        JokeService.findRandomJoke().then(joke => {
            dispatch(getJoke(joke))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Home)