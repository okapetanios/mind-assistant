import React from "react";
import {Link} from "react-router-dom";
import JokeService from "../../services/jokeService";
import {findJoke} from "../../actions/jokeActions";
import {connect} from "react-redux";
import noteService from "../../services/noteService";
import {searchNotes} from "../../actions/noteActions";
import "./Search.css"

const jokeService = new JokeService();
const NoteService = new noteService();

class SearchDetailsComponent extends React.Component {
    componentDidMount() {
        this.props.findJokeById(this.props.resultId);
        this.props.searchNotes(this.props.criteria);
    };

    state = {
        users: []
    };

    render() {
        return (
            <div className={"App"}>
                <div className={"ma-details container"}>
                    <div className={"text-center"}>
                        <h1>{this.props.joke}</h1>
                    </div>
                    <br/>
                    <div className={"text-center"}>
                        <h5>Users who have saved {this.props.criteria} jokes:</h5>
                    </div>
                    <ul className={"list-group"}>
                        {this.state.users.length > 0 && this.state.users.map(user =>
                            <li key={user.id}
                                className={"list-group-item"}>
                                <Link to={"/profile/user1"}>
                                    <h5>{user.username}</h5>
                                </Link>
                            </li>
                        )}
                        {this.state.users.length === 0 &&
                        <li className={"list-group-item"}>
                            <h5>No users have saved notes with requested keyword</h5>
                        </li>}
                    </ul>
                    <br/>
                    <div className={"text-center"}>
                        <h5>Other public jokes relating to {this.props.criteria}:</h5>
                    </div>
                    <ul className={"list-group"}>
                        {this.props.notes.length > 0 && this.props.notes.map(note =>
                            <li key={note.id}
                                className={"list-group-item"}>
                                <div className={"row"}>
                                    <h5>{note.title}</h5>
                                </div>
                                <div className={"row"}>
                                    {note.note}
                                </div>
                            </li>
                        )}
                        {this.props.notes.length === 0 &&
                        <li className={"list-group-item"}>
                            <h5>No notes saved with requested keyword</h5>
                        </li>}
                    </ul>
                    <br/>
                </div>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    joke: state.jokes.joke,
    notes: state.notes.notes
});
const dispatchToPropertyMapper = (dispatch) => ({
    findJokeById: (jokeID) => {
        jokeService.findJokeById(jokeID)
            .then(joke => {dispatch(findJoke(joke))})
    },
    searchNotes: (criteria) => {
        NoteService.searchNotes(criteria)
            .then(notes => {dispatch(searchNotes(notes))})
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SearchDetailsComponent)