import {HEROKU_URL} from "../const/Constants";

class folderService {
    url = HEROKU_URL + "/api/folders";
    userURL = (userId) => `${HEROKU_URL}/api/users/${userId}/folders`;

    findFoldersForUser = (userId) => {
        return fetch(this.userURL(userId)).then(response => response.json())
    };

    createFolder = (userId, folder) => {
        return fetch(this.userURL(userId), {
            method: "POST",
            body: JSON.stringify(folder),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    updateFolder = (folderId, folder) => {
        return fetch(`${this.url}/${folderId}`, {
            method: "PUT",
            body: JSON.stringify(folder),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    };

    deleteFolder = (folderId) => {
        return fetch(`${this.url}/${folderId}`, {
            method: "DELETE"
        }).then(response => response.json())
    };

    findAllFolders = () => {
        return fetch(this.url).then(response => response.json())
    };

    findFolderById = (folderId) => {
        return fetch(`${this.url}/${folderId}`).then(response => response.json())
    };
}

export default folderService