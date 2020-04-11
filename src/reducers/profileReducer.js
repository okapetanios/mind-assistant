import {CREATE_PROFILE, FIND_ALL_PROFILES, FIND_PROFILE, UPDATE_PROFILE} from "../actions/profileActions";

const profileReducer = (state={profile:[]}, action) => {
    switch (action.type) {
        case FIND_PROFILE:
            return {
                profile: action.profile
            };
        case CREATE_PROFILE:
            return {
                profile: action.profile
            };
        case UPDATE_PROFILE:
            return {
                profile: action.profile
            };
        case FIND_ALL_PROFILES:
            return {
                profiles: action.profiles
            };
        default:
            return state
    }
};

export default profileReducer