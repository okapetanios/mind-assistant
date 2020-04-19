import React from "react";
import userService from "../../services/userService";
import {createUser} from "../../actions/userActions";
import {connect} from "react-redux";

const UserService = new userService();

class RegisterComponent extends React.Component{
    state = {
        username: "",
        password: "",
        verifyPassword: ""
    };

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

    register = () => {
        const user = {username: this.state.username, password: this.state.password};
        this.props.createUser(user);
        this.props.history.push("/profile")
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
        UserService.createUser(user).then(status => {
            dispatch(createUser(user))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(RegisterComponent)