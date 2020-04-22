import React from "react";
import {Link} from "react-router-dom";
import JokeService from "../../services/jokeService";
import {findJoke} from "../../actions/jokeActions";
import {connect} from "react-redux";
import noteService from "../../services/noteService";
import {searchNotes} from "../../actions/noteActions";
import "./Search.css"
import {searchUsers} from "../../actions/userActions";
import userService from "../../services/userService";

const jokeService = new JokeService();
const NoteService = new noteService();
const UserService = new userService();

class SearchDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.findJokeById(this.props.resultId);
        this.props.searchNotes(this.props.criteria);
        this.props.searchUsers(this.props.criteria);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.notes.length > 0 && this.props.notes !== prevProps){
            console.log(this.props.notes);
        }
        if(this.props.userList !== prevProps && this.props.userList.length > 0){
            console.log(this.props.userList)
        }
    }

    render() {
        return (
            <div className={"App"}>
                <div className={"ma-details container"}>
                    <div className={"text-center"}>
                        <h1>{this.props.joke}</h1>
                    </div>
                    <br/>
                    <div className={"row"}>
                        <div className={"col"}>
                            <div className={"text-center"}>
                                <h5>Users who have saved {this.props.criteria} jokes:</h5>
                            </div>
                            <ul className={"list-group"}>
                                {this.props.userList.length > 0 && this.props.userList.map(user =>
                                    <li key={user.id}
                                        className={"list-group-item"}>
                                        <Link to={`/profile/${user.id}`}>
                                            <div className={"text-center"}>
                                                <h5>{user.username}</h5>
                                            </div>
                                        </Link>
                                    </li>
                                )}
                                {this.props.userList.length === 0 &&
                                <li className={"list-group-item"}>
                                    <h5>No users have saved notes with requested keyword</h5>
                                </li>}
                            </ul>
                        </div>
                        <div className={"col"}>
                            <div className={"text-center"}>
                                <h5>Other public notes relating to {this.props.criteria}:</h5>
                            </div>
                            <ul className={"list-group"}>
                                {this.props.notes.length > 0 && this.props.notes.map(note =>
                                    <li key={note.id}
                                        className={"list-group-item"}>
                                        <div className={"text-center"}>
                                            <h5>{note.title}</h5>
                                        </div>
                                        <p>
                                            {note.note}
                                        </p>
                                    </li>
                                )}
                                {this.props.notes.length === 0 &&
                                <li className={"list-group-item"}>
                                    <h5>No notes saved with requested keyword</h5>
                                </li>}
                            </ul>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    joke: state.jokes.joke,
    notes: state.notes.notes,
    userList: state.userList.userList
});
const dispatchToPropertyMapper = (dispatch) => ({
    findJokeById: (jokeID) => {
        jokeService.findJokeById(jokeID)
            .then(joke => {dispatch(findJoke(joke))})
    },
    searchNotes: (criteria) => {
        NoteService.searchNotes(criteria)
            .then(notes => {dispatch(searchNotes(notes))})
    },
    searchUsers: (criteria) => {
        UserService.searchUsers(criteria)
            .then(users => {dispatch(searchUsers(users))})
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SearchDetailsComponent)