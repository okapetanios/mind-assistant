import {HEROKU_URL} from "../const/Constants";

class labelService {
    url = HEROKU_URL + "/api/labels";
    userURL = (userId) => `${HEROKU_URL}/api/users/${userId}/labels`;
    folderURL = (folderId) => `${HEROKU_URL}/api/folders/${folderId}/labels`;
    labelURL = (labelId) => `${HEROKU_URL}/api/labels/${labelId}/notes`;

    findLabelsForUser = (userId) => {
        return fetch(this.userURL(userId),{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    findNotesForLabel =(labelId) => {
        return fetch(this.labelURL(labelId),{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    createLabelForUser = (userId, label) => {
        return fetch(this.userURL(userId), {
            method: "POST",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    findLabelsForFolder = (folderId) => {
        return fetch(this.folderURL(folderId),{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    createLabelForFolder = (folderId, label) => {
        return fetch(this.folderURL(folderId), {
            method: "POST",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    updateLabel = (labelId, label) => {
        return fetch(`${this.url}/${labelId}`, {
            method: "PUT",
            body: JSON.stringify(label),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    deleteLabel = (labelId) => {
        return fetch(`${this.url}/${labelId}`, {
            method: "DELETE",
            credentials: "include"
        }).then(response => response.json())
    };

    findAllLabels = () => {
        return fetch(this.url,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    findLabelById = (labelId) => {
        return fetch(`${this.url}/${labelId}`,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };
}

export default labelService
