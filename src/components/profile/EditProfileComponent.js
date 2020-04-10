import React from "react";

const EditProfileComponent = ({profileId, history}) =>
    <div className={"container-fluid"}>
        <h1>{profileId}'s Profile</h1>
        <form>
            <div className="form-group">
                <label htmlFor="editInputEmail">Username: "TBD USERS USERNAME"</label>
            </div>
            <div className="form-group">
                <label htmlFor="editInputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword"
                       placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="editFirstName">First Name</label>
                <input type="text" className="form-control" id="inputFirst"
                       placeholder="First Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="editLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLirst"
                       placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlSelect">Role</label>
                <select className="form-control" id="formControlSelect">
                    <option>User</option>
                    <option>Administrator</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;

export default EditProfileComponent
