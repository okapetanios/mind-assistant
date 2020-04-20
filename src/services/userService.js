import {HEROKU_URL} from "../const/Constants";

class userService {
    url = HEROKU_URL + "/api/users";
    currentUserUrl = HEROKU_URL + "/currentUser";
    logoutUrl = HEROKU_URL + "/logout";
    loginUrl = HEROKU_URL + "/login";

    findUserById = (userId) => {
        return fetch(`${this.url}/${userId}`,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    findCurrentUser = () => {
        return fetch(this.currentUserUrl, {
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
            .catch(err => {console.log(err); return {
                id: 1,
                username: 'login',
                fname: 'Anonymous',
                role: 'general'
            }});
    };

    logoutUser = () => {
        return fetch(this.logoutUrl, {
            method: "POST",
            credentials: "include"
        }).then(response => response.json())
            .catch(err =>console.log(err))
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
        }).then(response => {
            console.log(response.headers);
            return response.json()
        })
    };

    updateUser = (userId, user) => {
        return fetch(`${this.url}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    deleteUser = (userId) => {
        return fetch(`${this.url}/${userId}`, {
            method: "DELETE",
            credentials: "include"
        }).then(response => response.json())
    };

    findAllUsers = () => {
        return fetch(this.url,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };
}

export default userService
