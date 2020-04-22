import {
    FIND_USER, SEARCH_USERS
} from "../actions/userActions";

const userListReducer = (state={userList:[]}, action) => {
    switch (action.type) {
        case FIND_USER:
            return {
                user: action.user
            };
        case SEARCH_USERS:
            console.log("reducer");
            console.log(action.users);
            return {
                userList: action.users
            };
        default:
            return state
    }
};

export default userListReducer