import React from "react";

const ProfileComponent = ({profileId, history}) =>
    <div className={"container-fluid"}>
        <h1>User Profile: {profileId}</h1>
    </div>;

export default ProfileComponent