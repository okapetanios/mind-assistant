import {HEROKU_URL} from "../const/Constants";

class noteService {
    url = HEROKU_URL + "/api/notes";
    userURL = (userId) => `${HEROKU_URL}/api/users/${userId}/notes`;
    folderURL = (folderId) => `${HEROKU_URL}/api/folders/${folderId}/notes`;

    findNotesForUser = (userId) => {
        return fetch(this.userURL(userId),{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    createNoteForUser = (userId, note) => {
        return fetch(this.userURL(userId), {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    findNotesForFolder = (folderId) => {
        return fetch(this.folderURL(folderId),{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    createNoteForFolder = (folderId, note) => {
        return fetch(this.folderURL(folderId), {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    updateNote = (noteId, note) => {
        return fetch(`${this.url}/${noteId}`, {
            method: "PUT",
            body: JSON.stringify(note),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(response => response.json())
    };

    deleteNote = (noteId) => {
        return fetch(`${this.url}/${noteId}`, {
            method: "DELETE",
            credentials: "include"
        }).then(response => response.json())
    };

    searchNotes = (criteria) => {
        return fetch(`${this.url}/search?note=${criteria}`, {
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    findAllNotes = () => {
        return fetch(this.url,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };

    findNoteById = (noteId) => {
        return fetch(`${this.url}/${noteId}`,{
            method: "GET",
            credentials: "include"
        }).then(response => response.json())
    };
}

export default noteService