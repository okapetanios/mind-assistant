import React from "react";
import {Link} from "react-router-dom";
import JokeService from "../services/jokeService";
import {findJoke} from "../actions/jokeActions";
import {connect} from "react-redux";

const jokeService = new JokeService();

class SearchDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.findJokeById(this.props.resultId)
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <h1>{this.props.joke}</h1>
                <br/>
                <h5>Users who have saved this joke:</h5>
                <ul>
                    {/*
                    Below should be fetched from local API
                    Find users that currently have the particular resultId saved as public note
                    */}
                    <li>
                        <Link to={"/profile/user1"}>
                            User 1
                        </Link>
                    </li>
                    <li>
                        <Link to={"/profile/user2"}>
                            User 2
                        </Link>
                    </li>
                    <li>
                        <Link to={"/profile/user3"}>
                            User 3
                        </Link>
                    </li>
                    <li>
                        <Link to={"/profile/user4"}>
                            User 4
                        </Link>
                    </li>
                    <li>
                        <Link to={"/profile/user5"}>
                            User 5
                        </Link>
                    </li>
                </ul>

                <h5>Other public jokes relating to {this.props.criteria}:</h5>
                <ul>
                    {/*
                    Below should be fetched from local API
                    Find users that currently have the particular resultId saved as public note
                    */}
                    <li>
                        <Link to={"/labels"}>
                            Label 1
                        </Link>
                    </li>
                    <li>
                        <Link to={"/labels"}>
                            Label 2
                        </Link>
                    </li>
                    <li>
                        <Link to={"/labels"}>
                            Label 3
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    joke: state.jokes.joke
});
const dispatchToPropertyMapper = (dispatch) => ({
    findJokeById: (jokeID) => {
        jokeService.findJokeById(jokeID)
            .then(joke => {dispatch(findJoke(joke))})
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SearchDetailsComponent)