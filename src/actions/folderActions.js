export const FIND_FOLDERS_FOR_USER = "FIND_FOLDERS_FOR_USER";
export const findFoldersForUSER = (folders) => ({
    type: FIND_FOLDERS_FOR_USER,
    folders: folders
});

export const CREATE_FOLDER = "CREATE_FOLDER";
export const createFolder = (folder) => ({
    type: CREATE_FOLDER,
    folder: folder
});

export const DELETE_FOLDER = "DELETE_FOLDER";
export const deleteFolder = (folderId) => ({
    type: DELETE_FOLDER,
    folderId: folderId
});

export const UPDATE_FOLDER = "UPDATE_FOLDER";
export const updateFolder = (folderId, folder) => ({
    type: UPDATE_FOLDER,
    folderId: folderId,
    folder: folder
});

export const FIND_FOLDER_BY_ID = "FIND_FOLDER_BY_ID";
export const findFolder = (folder) => ({
    type: FIND_FOLDER_BY_ID,
    folder: folder
});

export const FIND_ALL_FOLDERS = "FIND_ALL_FOLDERS";
export const findAllFolders = (folders) => ({
    type: FIND_ALL_FOLDERS,
    folders: folders
});