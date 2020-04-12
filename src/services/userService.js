import {HEROKU_URL} from "../const/Constants";

class userService {
    url = HEROKU_URL + "/users";

    findUserById = (userId) => {
        return fetch(`${this.url}/${userId}`).then(response => response.json())
    };

    createUser = (user) => {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    updateUser = (userId, user) => {
        return fetch(`${this.url}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    deleteUser = (userId) => {
        return fetch(`${this.url}/${userId}`, {
            method: "DELETE"
        }).then(response => response.json())
    };

    findAllUsers = () => {
        return fetch(this.url).then(response => response.json())
    };
}

export default userService