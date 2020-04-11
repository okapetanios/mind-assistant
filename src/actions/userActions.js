export const FIND_USER = "FIND_USER_BY_ID";
export const findUser = (user) => ({
    type: FIND_USER,
    user: user
});

export const CREATE_USER = "CREATE_USER";
export const createUser = (user) => ({
    type: CREATE_USER,
    user: user
});

export const UPDATE_USER = "UPDATE_USER";
export const updateUser = (userId, user) => ({
    type: UPDATE_USER,
    userId: userId,
    user: user
});

export const DELETE_USER = "DELETE_USER";
export const deleteUser = (userId) => ({
    type: DELETE_USER,
    userId: userId
});

export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const findAllUsers = (users) => ({
    type: FIND_ALL_USERS,
    users: users
});