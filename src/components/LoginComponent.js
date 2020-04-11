import React from "react";
import {Link} from "react-router-dom";

class LoginComponent extends React.Component{

    render() {
        return (
            <div className="container">
                {/*Button to close form and go to home page*/}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <div>
                            <a href="/"
                               className="float-right wbdv-link wbdv-cancel">
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
                               className="form-control wbdv-field wbdv-username"
                               id="inputUsername"
                               placeholder="Alice"/>
                    </div>
                </div>

                {/*Password field with example*/}
                <div className="form-group row">
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label">
                        Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
                               id="inputPassword"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                {/*Buttons for signing in, forgetting password, or registration*/}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary btn-block wbdv-button wbdv-login"
                           href="../profile/profile.template.client.html"
                           role="button">
                            Sign in</a>
                        <div className="row">
                            <div className="col-6">
                                <a href="#"
                                   className="wbdv-link wbdv-forgot-password">
                                    Forgot Password?</a>
                            </div>
                            <div className="col-6">
                                <a href="/register"
                                   className="float-right wbdv-link wbdv-register">
                                    Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent