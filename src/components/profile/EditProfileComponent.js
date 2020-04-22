import React from "react";
import {connect} from "react-redux";
import userService from "../../services/userService";
import profileService from "../../services/profileService";
import {deleteUser, findCurrentUser, logoutUser, updateUser} from "../../actions/userActions";
import {findProfile, updateProfile} from "../../actions/profileActions";
import {Link} from "react-router-dom";

const UserService = new userService();
const ProfileService = new profileService();

class EditProfileComponent extends React.Component{
    componentDidMount() {
        this.props.findCurrentUser();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.user.id !== prevProps.user.id){
            this.props.findProfile(this.props.user.id);
        }
    }

    state = {
        newPassword: "",
        newFname: "",
        newLname: "",
        newRole: "",
        newSpecific: "",
        newSrc: "",
        newBio: ""
    };

    logout = () => {
        this.props.logoutUser();
        this.props.history.push("/")
    };

    pwChange = (e) => {
        this.setState({
            newPassword: e.target.value
        })
    };

    fnameChange = (e) => {
        this.setState({
            newFname: e.target.value
        })
    };

    lnameChange = (e) => {
        this.setState({
            newLname: e.target.value
        })
    };

    roleChange = (e) => {
        this.setState({
            newRole: e.target.value
        })
    };

    specificChange = (e) => {
        this.setState({
            newSpecific: e.target.value
        })
    };

    srcChange = (e) => {
        this.setState({
            newSrc: e.target.value
        })
    };

    bioChange = (e) => {
        this.setState({
            newBio: e.target.value
        })
    };

    //TODO:
    //Update based on different user types
    updateUser = () => {
        const user = {
            id: this.props.user.id,
            username: this.props.user.username,
            password: this.state.newPassword === "" ? this.props.user.password:this.state.newPassword,
            fname: this.state.newFname === "" ? this.props.user.fname:this.state.newFname,
            lname: this.state.newLname === "" ? this.props.user.lname:this.state.newLname,
            role: this.state.newRole === "" ? this.props.user.role:this.state.newRole,
        };
        this.props.updateUser(this.props.user.id, user);
    };

    deleteUser = () => {
        this.props.deleteUser(this.props.user.id);
        this.logout()
    };

    updateProfile = () => {
        const profile = {
            id: this.props.user.id,
            picture: this.state.newSrc === "" ? this.props.profile.picture:this.state.newSrc,
            bio: this.state.newBio === "" ? this.props.profile.bio:this.state.newBio,
            user: this.props.user
        };
        this.props.updateProfile(this.props.user.id, profile);
    };

    render() {
        return (
            <div className={"App"}>
                {this.props.user.id > 0 &&
                <ul className={"container list-group"}>
                    <li className={"list-group-item"}>
                        <div className="form-group row">
                            <div className="col text-center">
                                <h1>Account Information</h1>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username"
                                   className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10"
                                 id={"username"}>
                                <input className="form-control "
                                       id="username"
                                       disabled={true}
                                       value={this.props.user.username || ""}/>
                            </div>
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
                                       onChange={this.pwChange}
                                       placeholder="New Password (if applicable)"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="editFirstName"
                                   className="col-sm-2 col-form-label">
                                First Name
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control "
                                       id="editFirstName"
                                       placeholder={"First Name"}
                                       onChange={this.fnameChange}
                                       value={this.state.newFname === "" ? (this.props.user.fname || ""):this.state.newFname}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="editLastName"
                                   className="col-sm-2 col-form-label">
                                Last Name
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control "
                                       id="editLastName"
                                       placeholder={"Last Name"}
                                       onChange={this.lnameChange}
                                       value={this.state.newLname === "" ? (this.props.user.lname || ""):this.state.newLname}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="editRole"
                                   className="col-sm-2 col-form-label">
                                Role
                            </label>
                            <div className="col-sm-10">
                                <select className="form-control"
                                        id="editRole"
                                        placeholder={"student"}
                                        onChange={this.roleChange}
                                        value={this.state.newRole === "" ? this.props.user.role:this.state.newRole}
                                >
                                    <option value={"student"}>Student</option>
                                    <option value={"general"}>Other</option>
                                </select>
                            </div>
                        </div>
                        {(this.state.newRole === "" ? this.props.user.role:this.state.newRole) === "student" &&
                            <div className="form-group row">
                                <label htmlFor="editSchool"
                                       className="col-sm-2 col-form-label">
                                    School
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control "
                                           id="editSchool"
                                           placeholder={"School"}
                                           onChange={this.specificChange}
                                           value={this.state.newSpecific === "" ? (this.props.user.school || ""):this.state.newSpecific}/>
                                </div>
                            </div>}
                        {(this.state.newRole === "" ? "":this.state.newRole) !== "student" &&
                            <div className="form-group row">
                                <label htmlFor="editOccupation"
                                       className="col-sm-2 col-form-label">
                                    Occupation
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control "
                                           id="editOccupation"
                                           placeholder={"Occupation"}
                                           onChange={this.specificChange}
                                           value={this.state.newSpecific === "" ? (this.props.user.occupation || ""):this.state.newSpecific}/>
                                </div>
                            </div>}
                        <div className="form-group row">
                            <div className="col-sm-2 col-form-label"></div>
                            <div className="col-sm-10">
                                <button className="btn btn-primary btn-block"
                                        onClick={this.updateUser}>
                                    Update Account
                                </button>
                                <button className="btn btn-danger btn-block"
                                        onClick={this.deleteUser}>
                                    Delete Account
                                </button>
                                <div className="row">
                                    <div className="col-6">
                                        <button className={"btn btn-link"}
                                                onClick={this.logout}>
                                            Logout
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <a href="/"
                                           className="btn btn-link float-right">
                                            Cancel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"list-group-item"}>
                        <div className="form-group row">
                            <div className="col text-center">
                                <h1>Profile Information</h1>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col-lg-4 col-md-5 col-sm-10"}>
                                <img alt={"Display"} className={"mr-3"}
                                     width="auto"
                                     height={180}
                                     src={this.state.newSrc === "" ?
                                         (this.props.profile.picture || ""):
                                         this.state.newSrc}/>
                            </div>
                            <div className={"col"}>
                                <div className="form-group row">
                                    <label htmlFor="editSrc"
                                           className="col-lg-2 col-sm-2 col-form-label">
                                        Image Source
                                    </label>
                                    <div className="col-lg-10 col-sm-10">
                                        <input className="form-control "
                                               id="editSrc"
                                               placeholder={"Image URL here"}
                                               onChange={this.srcChange}
                                               value={this.state.newSrc === "" ? (this.props.profile.picture || ""):this.state.newSrc}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="editBio"
                                           className="col-sm-2 col-form-label">
                                        Bio
                                    </label>
                                    <div className="col-sm-10">
                                    <textarea className="form-control "
                                              id="editBio"
                                              rows={"3"}
                                              placeholder={"About you"}
                                              onChange={this.bioChange}
                                              value={this.state.newBio === "" ? (this.props.profile.bio || ""):this.state.newBio}>
                                    </textarea>
                                    </div>
                                </div>
                                <div className={"form-group-row"}>
                                    <button className="btn btn-primary btn-block"
                                            onClick={this.updateProfile}>
                                        Update Profile
                                    </button>
                                    <Link className="btn btn-success btn-block"
                                          to={`/profile/${this.props.user.id}`}>
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                }
                {this.props.user.id === 0 &&
                <div className={"container text center"}>
                    <li className={"list-group-item text-center"}>
                        <h1>Please Login to Access Profile</h1>
                        <br/>
                        <Link to={"/login"} className={"btn btn-primary"}>
                            Login
                        </Link>
                        <button className={"btn btn-link"}></button>
                        <Link to={"/register"} className={"btn btn-primary"}>
                            Register
                        </Link>
                    </li>
                </div>
                }
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    profile: state.profile.profile
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    findProfile: (userId) => {
        ProfileService.findProfileByUser(userId).then(profile => {
            dispatch(findProfile(profile))
        })
    },
    logoutUser: () => {
        UserService.logoutUser().then(user => {
            dispatch(logoutUser(user))
        })
    },
    updateUser: (userId, user) => {
        UserService.updateUser(userId, user).then(status => {
            dispatch(updateUser(userId, user))
        })
    },
    deleteUser: (userId) => {
        UserService.deleteUser(userId).then(status => {
            dispatch(deleteUser(userId))
        })
    },
    updateProfile: (userId, profile) => {
        ProfileService.updateProfile(userId, profile).then(status => {
            dispatch(updateProfile(userId, profile))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(EditProfileComponent)
