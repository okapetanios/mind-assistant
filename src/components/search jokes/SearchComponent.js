import React from "react";
import {Link} from "react-router-dom";
import JokeService from "../../services/jokeService";
import {findJokesByKeyword} from "../../actions/jokeActions";
import {connect} from "react-redux";

const jokeService = new JokeService();

class SearchComponent extends React.Component {
    componentDidMount() {
        this.props.findJokesByKeyword(this.props.criteria)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.criteria !== prevProps.criteria){
            this.props.findJokesByKeyword(this.props.criteria)
        }
    }

    render() {
        return (
            <div className={"App"}>
                <div className={"container"}>
                    <ul className="list-group">
                        <li className={"list-group-item text-center"}>
                            <h1>Search Results for: {this.props.criteria}</h1>
                        </li>
                        {this.props.jokes && this.props.jokes.map(joke =>
                            <li className="list-group-item" key={joke.id}>
                                <Link to={`/search/${this.props.criteria}/details/${joke.id}`}>
                                    {joke.joke}
                                </Link>
                            </li>
                        )}
                        {this.props.jokes < 1 && <h1>No results found</h1>}
                    </ul>
                </div>
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