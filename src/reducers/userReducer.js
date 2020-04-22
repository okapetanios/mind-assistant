import {
    CREATE_USER,
    DELETE_USER,
    FIND_ALL_USERS,
    FIND_CURRENT_USER,
    FIND_USER, LOGIN_USER, LOGOUT_USER, SEARCH_USERS,
    UPDATE_USER
} from "../actions/userActions";
import {SEARCH_NOTES} from "../actions/noteActions";

const userReducer = (state={user:{}}, action) => {
    switch (action.type) {
        case FIND_USER:
            return {
                user: action.user
            };
        case CREATE_USER:
            return {
                user: action.user
            };
        case UPDATE_USER:
            return {
                user: action.user
            };
        case DELETE_USER:
            return {
                user: null
            };
        case FIND_ALL_USERS:
            return {
                users: action.users
            };
        case FIND_CURRENT_USER:
            return {
                user: action.user
            };
        case LOGIN_USER:
            return {
                user: action.user
            };
        case LOGOUT_USER:
            return {
                user: action.user
            };
        default:
            return state
    }
};

export default userReducer