import {
    CREATE_FOLDER,
    DELETE_FOLDER, FIND_ALL_FOLDERS,
    FIND_FOLDER_BY_ID,
    FIND_FOLDERS_FOR_USER,
    UPDATE_FOLDER
} from "../actions/folderActions";

const folderReducer = (state={folders:[]}, action) => {
    switch (action.type) {
        case FIND_FOLDERS_FOR_USER:
            return {
                folders: action.folders
            };
        case CREATE_FOLDER:
            return {
                folders: [
                    ...state.folders,
                    action.folder
                ]
            };
        case UPDATE_FOLDER:
            return {
                folders: state.folders.map(folder =>
                    folder.id === action.folderId ? action.folder : folder
                )
            };
        case DELETE_FOLDER:
            return {
                folders: state.folders.filter(folder => folder.id !== action.folderID)
            };
        case FIND_ALL_FOLDERS:
            return {
                folders: action.folders
            };
        case FIND_FOLDER_BY_ID:
            return {
                folders: action.folder
            };
        default:
            return state
    }
};

export default folderReducer