import React from "react";

const EditProfileComponent = ({profileId, history, user}) =>
    <div className={"container-fluid text-center"}>
        <h1>{profileId}'s Profile</h1>
        <form>
            <div className="form-group">
                <label htmlFor="editInputEmail">Username: "TBD USERS USERNAME"</label>
            </div>
            <div className="form-group">
                <label htmlFor="editFirstName">First Name: "USER FIRSTNAME"</label>
            </div>
            <div className="form-group">
                <label htmlFor="editLastName">Last Name: "USER LASTNAME"</label>
            </div>
            <div className="form-group">
                <label htmlFor="formControlSelect">Role: "USER ROLE"</label>
            </div>
        </form>
        <h3>Saved Notes</h3>
    </div>;

export default EditProfileComponent
