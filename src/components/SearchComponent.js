import React from "react";
import {Link} from "react-router-dom";
import JokeService from "../services/jokeService";
import {findJokesByKeyword} from "../actions/jokeActions";
import {connect} from "react-redux";

const jokeService = new JokeService();

class SearchComponent extends React.Component {
    componentDidMount() {
        this.props.findJokesByKeyword(this.props.criteria)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.criteria);
        if(this.props.criteria !== prevProps.criteria){
            this.props.findJokesByKeyword(this.props.criteria)
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <ul className="list-group">
                    {this.props.jokes && this.props.jokes.map(joke =>
                        <Link to={`/search/${this.props.criteria}/details/${joke.id}`}>
                            <li className="list-group-item" key={joke.id} >
                                {joke.joke}
                            </li>
                        </Link>
                    )}
                    {this.props.jokes < 1 && <h1>No results found</h1>}
                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    jokes: state.jokes.jokes
});
const dispatchToPropertyMapper = (dispatch) => ({
    findJokesByKeyword: (keyword) => {
        jokeService.findJokesByKeyword(keyword)
            .then(jokes => {dispatch(findJokesByKeyword(jokes))})
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(SearchComponent)