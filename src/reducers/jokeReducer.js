import {FIND_JOKE, FIND_JOKES_BY_KEYWORD} from "../actions/jokeActions";

const jokeReducer = (state={jokes:[]}, action) => {
    switch (action.type) {
        case FIND_JOKES_BY_KEYWORD:
            return {
                jokes: action.jokes.results
            };
        case FIND_JOKE:
            return {
                joke: action.joke
            };
        default:
            return state
    }
};

export default jokeReducer