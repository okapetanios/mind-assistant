import {CREATE_USER, DELETE_USER, FIND_ALL_USERS, FIND_USER, UPDATE_USER} from "../actions/userActions";

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
        default:
            return state
    }
};

export default userReducer