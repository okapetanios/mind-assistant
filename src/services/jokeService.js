import {JOKE_URL} from "../const/Constants";

class JokeService {
    url = JOKE_URL;

    findJokeById = (jokeId) => {
        return fetch(`${this.url}/j/${jokeId}`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
    };

    findJokesByKeyword = (keyword) => {
        return fetch(`${this.url}/search?term=${keyword}`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
    };

    findRandomJoke = () => {
        return fetch(`${this.url}/`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
    }
}

export default JokeService