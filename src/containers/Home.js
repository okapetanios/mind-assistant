import React, { Component } from "react";
import "./Home.css"
import {connect} from "react-redux";
import userService from "../services/userService";
import {findCurrentUser} from "../actions/userActions";
import jokeService from "../services/jokeService";
import {getJoke} from "../actions/jokeActions";
import DefaultLayoutComponent from "../components/DefaultLayoutComponent";
import FolderListComponent from '../components/folder/FolderListComponent';

const UserService = new userService();
const JokeService = new jokeService();

class Home extends Component {
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
                    <div>
                        <DefaultLayoutComponent/>

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
