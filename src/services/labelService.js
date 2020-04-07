import {HEROKU_URL} from "../const/Constants";

class labelService {
    url = HEROKU_URL + "/labels";
    userURL = (userId) => `${HEROKU_URL}/users/${userId}/labels`;
    folderURL = (folderId) => `${HEROKU_URL}/folders/${folderId}/labels`;

    findLabelsForUser = (userId) => {
        return fetch(this.userURL(userId)).then(response => response.json())
    };

    createLabelForUser = (userId, label) => {
        return fetch(this.userURL(userId), {
            method: "POST",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    findLabelsForFolder = (folderId) => {
        return fetch(this.folderURL(folderId)).then(response => response.json())
    };

    createLabelForFolder = (folderId, label) => {
        return fetch(this.folderURL(folderId), {
            method: "POST",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    updateLabel = (labelId, label) => {
        return fetch(`${this.url}/${labelId}`, {
            method: "PUT",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    deleteLabel = (labelId) => {
        return fetch(`${this.url}/${labelId}`, {
            method: "DELETE"
        }).then(response => response.json())
    };

    findAllLabels = () => {
        return fetch(this.url).then(response => response.json())
    };

    findLabelById = (labelId) => {
        return fetch(`${this.url}/${labelId}`).then(response => response.json())
    };
}

export default labelService