import {HEROKU_URL} from "../const/Constants";

class ProfileService {
    url = HEROKU_URL + "/profiles";
    userURL = (userId) => `${HEROKU_URL}/users/${userId}/profiles`;

    createProfileForUser = (userId, profile) => {
        return fetch(this.userURL(userId), {
            method: "POST",
            body: JSON.stringify(profile),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    findProfileByUser = (userId) => {
        return fetch(this.userURL(userId)).then(response => response.json())
    };

    updateProfile = (userId, profile) => {
        return fetch(`${this.userURL(userId)}`, {
            method: "PUT",
            body: JSON.stringify(profile),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    findAllProfiles = () => {
        return fetch(this.url).then(response => response.json())
    };
}

export default ProfileService