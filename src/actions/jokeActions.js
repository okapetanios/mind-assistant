export const FIND_JOKES_BY_KEYWORD = "FIND_JOKES_BY_KEYWORD";
export const findJokesByKeyword = (jokes) => ({
    type: FIND_JOKES_BY_KEYWORD,
    jokes: jokes
});

export const FIND_JOKE = "FIND_JOKE_BY_ID";
export const findJoke = (joke) => ({
    type: FIND_JOKE,
    joke: joke.joke
});

export const GET_JOKE = "GET_RANDOM_JOKE";
export const getJoke = (joke) => ({
    type: GET_JOKE,
    joke: joke.joke
});