import React from "react";
import {connect} from "react-redux";
import userService from "../../services/userService";
import {loginUser} from "../../actions/userActions";

const UserService = new userService();

class LoginComponent extends React.Component {
    state = {
        username: "",
        password: ""
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

    login = () => {
        const user = {username: this.state.username, password: this.state.password};
        this.props.loginUser(user);
        this.props.history.push("/")

    };

    render() {
        return (
            <div className={"App"}>
                <div className="container">
                    <ul className={"container list-group"}>
                        <li className={"list-group-item"}>
                            {/*Button to close form and go to home page*/}
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <div>
                                        <a href="/"
                                           className="float-right">
                                            Cancel</a>
                                    </div>
                                </div>
                            </div>

                            <h1>Sign In</h1>

                            {/*Username field with example*/}
                            <div className="form-group row">
                                <label htmlFor="inputUsername"
                                       className="col-sm-2 col-form-label">
                                    Username</label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control "
                                           id="inputUsername"
                                           placeholder="Alice"
                                           value={this.state.username}
                                           onChange={this.updateUsername}
                                    />
                                </div>
                            </div>

                            {/*Password field with example*/}
                            <div className="form-group row">
                                <label htmlFor="inputPassword"
                                       className="col-sm-2 col-form-label">
                                    Password</label>
                                <div className="col-sm-10">
                                    <input type="password"
                                           className="form-control"
                                           id="inputPassword"
                                           placeholder="123qwe#$%"
                                           value={this.state.password}
                                           onChange={this.updatePassword}
                                    />
                                </div>
                            </div>

                            {/*Buttons for signing in, forgetting password, or registration*/}
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button className="btn btn-primary btn-block "
                                            onClick={this.login}>
                                        Sign in
                                    </button>
                                    <div className="row">
                                        <div className="col-6">
                                            {/*<a href="#">*/}
                                            {/*    Forgot Password?*/}
                                            {/*</a>*/}
                                        </div>
                                        <div className="col-6">
                                            <a href="/register"
                                               className="float-right">
                                                Sign up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
});
const dispatchToPropertyMapper = (dispatch) => ({
    loginUser: (user) => {
        UserService.loginUser(user).then(status => {
            dispatch(loginUser(user))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LoginComponent)
