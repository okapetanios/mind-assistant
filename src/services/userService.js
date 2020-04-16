import {HEROKU_URL} from "../const/Constants";

class userService {
    url = HEROKU_URL + "/api/users";
    currentUserUrl = HEROKU_URL + "/currentUser";
    logoutUrl = HEROKU_URL + "/logout";
    loginUrl = HEROKU_URL + "/login";

    findUserById = (userId) => {
        return fetch(`${this.url}/${userId}`).then(response => response.json())
    };

    findCurrentUser = () => {
        return fetch(this.currentUserUrl, {
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    logoutUser = () => {
        return fetch(this.logoutUrl, {
            method: "POST",
            credentials: "include"
        }).then(response => response.json())
    };

    loginUser = (user) => {
        return fetch(this.loginUrl, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
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