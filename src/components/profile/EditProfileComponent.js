import React from "react";
import {connect} from "react-redux";
import userService from "../../services/userService";
import {deleteUser, findCurrentUser, logoutUser, updateUser} from "../../actions/userActions";

const UserService = new userService();

class EditProfileComponent extends React.Component{
    componentDidMount() {
        this.props.findCurrentUser();
    }

    state = {
        newPassword: "",
        newFname: "",
        newLname: "",
        newRole: "student"
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

    //TODO:
    //Add functionality for update profile
    //Not currently working. Only adding new users
    //Update based on different user types
    updateUser = () => {
        const password = this.state.newPassword === "" ? this.props.user.password:this.state.newPassword;
        console.log(password);
        console.log(this.props.user.id);
        const user = {
            username: this.props.user.username,
            password: this.state.newPassword === "" ? this.props.user.password:this.state.newPassword,
            fname: this.state.newFname === "" ? this.props.user.fname:this.state.newFname,
            lname: this.state.newLname === "" ? this.props.user.lname:this.state.newLname,
            role: this.state.newRole === "" ? this.props.user.role:this.state.newRole
        };
        this.props.updateUser(this.props.user.id, user);
    };

    deleteUser = () => {
        console.log(this.props.user.id);
        this.props.deleteUser(this.props.user.id);
        this.logout()
    };

    render() {
        return (
            <div className={"container"}>
                <h1>{this.props.user.username}'s Profile</h1>
                {/*TODO*/}
                {/*add change display image link*/}
                {/*add preview of image*/}
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
                {/*TODO*/}
                {/*add employer or school depending on selected role*/}
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
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    logoutUser: () => {
        UserService.logoutUser().then(user => {
            dispatch(logoutUser)
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
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(EditProfileComponent)
