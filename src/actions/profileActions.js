export const FIND_PROFILE = "FIND_PROFILE_BY_USER";
export const findProfile = (profile) => ({
    type: FIND_PROFILE,
    profile: profile
});

export const CREATE_PROFILE = "CREATE_PROFILE";
export const createProfile = (profile) => ({
    type: CREATE_PROFILE,
    profile: profile
});

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const updateProfile = (userId, profile) => ({
    type: UPDATE_PROFILE,
    userId: userId,
    profile: profile
});

export const FIND_ALL_PROFILES = "FIND_ALL_PROFILES";
export const findAllProfiles = (profiles) => ({
    type: FIND_ALL_PROFILES,
    profiles: profiles
});