import React from "react";

class EditProfileComponent extends React.Component{
    logout = () => {
        this.props.history.push("/")
    };

    render() {
        return (
            <div className={"container"}>
                <h1>{this.props.profileId}'s Profile</h1>
                <div className="form-group row">
                    <label htmlFor="usernameFld"
                           className="col col-form-label">
                        Username: "TBD USERS USERNAME"
                    </label>
                </div>
                <div className="form-group row">
                    <label htmlFor="editInputPassword"
                           className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control "
                               id="editInputPassword"
                               placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="editFirstName"
                           className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="editFirstName"
                               placeholder="First Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="editLastName"
                           className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="editLastName"
                               placeholder="Last Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="editRole"
                           className="col-sm-2 col-form-label">
                        Role
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="editRole">
                            <option>Student</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label"></div>
                    <div className="col-sm-10">
                        <button className="btn-primary btn-block"
                                role="button">
                            Submit
                        </button>
                        <div className="row">
                            <div className="col-6">
                                <a onClick={this.logout}>
                                    Logout
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="/"
                                   className="float-right">
                                    Cancel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfileComponent
