import {
    CREATE_USER,
    DELETE_USER,
    FIND_ALL_USERS,
    FIND_USER,
    UPDATE_USER,
    FIND_CURRENT_USER, LOGIN_USER, LOGOUT_USER
} from "../actions/userActions";

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