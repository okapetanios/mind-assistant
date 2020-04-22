import React from "react";
import userService from "../../services/userService";
import {createUser} from "../../actions/userActions";
import {connect} from "react-redux";

const UserService = new userService();

class RegisterComponent extends React.Component {
    state = {
        username: "",
        newFname: "",
        newLname: "",
        newRole: "",
        occupation: "",
        school: "",
        password: "",
        verifyPassword: ""
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user.id !== prevProps.user.id && this.props.user.id > 0) {
            this.props.history.push("/profile")
        }
    }

    updateUsername = (e) => {
        this.setState({
                          username: e.target.value
                      })
    };

    updatePassword = (e) => {
        this.setState({
                          password: e.target.value
                      })
    };

    updateVerify = (e) => {
        this.setState({
                          verifyPassword: e.target.value
                      })
    };

    updateFirstName = (e) => {
        this.setState({
                          newFname: e.target.value
                      })
    };
    updateLastName = (e) => {
        this.setState({
                          newLname: e.target.value
                      })
    };

    roleChange = (e) => {
        this.setState({
                          newRole: e.target.value
                      })
    };

    updateSchool = (e) => {
        this.setState({
                          school: e.target.value
                      })
    };

    updateOccupation = (e) => {
        this.setState({
                          occupation: e.target.value
                      })
    };

    navigate = () => {
        this.props.history.push("/profile")
    }

    register = () => {
        const user = {
            username: this.state.username,
            fname: this.state.newFname,
            lname: this.state.newLname,
            role: this.state.newRole,
            school: this.state.school,
            occupation: this.state.occupation,
            password: this.state.password
        };
        this.props.createUser(user);
    };

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                {/*Username field with example*/}
                <div className="form-group row">
                    <label htmlFor="usernameFld"
                           className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="usernameFld"
                               placeholder="Alice"
                               value={this.state.username}
                               onChange={this.updateUsername}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="firstNameFld"
                           className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="firstNameFld"
                               placeholder="alice"
                               value={this.state.newFname}
                               onChange={this.updateFirstName}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lastNameFld"
                           className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control "
                               id="lastNameFld"
                               placeholder="alice"
                               value={this.state.newLname}
                               onChange={this.updateLastName}
                        />
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

                {this.state.newRole === "student" &&
                 <div className="form-group row">
                     <label htmlFor="schoolFld"
                            className="col-sm-2 col-form-label">
                         School
                     </label>
                     <div className="col-sm-10">
                         <input type="text"
                                className="form-control "
                                id="schoolFld"
                                placeholder="University"
                                value={this.state.school}
                                onChange={this.updateSchool}
                         />
                     </div>
                 </div>
                }
                {this.state.newRole !== "student" &&
                 <div className="form-group row">
                     <label htmlFor="occupationFld"
                            className="col-sm-2 col-form-label">
                         Occupation
                     </label>
                     <div className="col-sm-10">
                         <input type="text"
                                className="form-control "
                                id="schoolFld"
                                placeholder="Occupation"
                                value={this.state.occupation}
                                onChange={this.updateOccupation}
                         />
                     </div>
                 </div>
                }

                {/*Password field with example*/}
                <div className="form-group row">
                    <label htmlFor="passwordFld"
                           className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control "
                               id="passwordFld"
                               placeholder="123qwe#$%"
                               value={this.state.password}
                               onChange={this.updatePassword}
                        />
                    </div>
                </div>

                {/*Verify password field with example*/}
                <div className="form-group row">
                    <label htmlFor="verifyPasswordFld"
                           className="col-sm-2 col-form-label">
                        Verify Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control "
                               id="verifyPasswordFld"
                               placeholder="123qwe#$%"
                               value={this.state.verifyPassword}
                               onChange={this.updateVerify}
                        />
                    </div>
                </div>

                {/*Buttons for signing up or logging in*/}
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label"></div>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block"
                                onClick={this.register}>
                            Sign Up
                        </button>
                        <div>
                            <a href="/login">
                                Login</a>
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
    createUser: (user) => {
        UserService.createUser(user).then(createdUser => {
            dispatch(createUser(createdUser))
            if (createdUser.id < 1) {
                alert("username exits, try another one")
            }
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(RegisterComponent)
