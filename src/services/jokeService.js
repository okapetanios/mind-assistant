class JokeService {
    url = "https://icanhazdadjoke.com";

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
    }
}

export default JokeService