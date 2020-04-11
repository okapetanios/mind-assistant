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

                <h1>Sign Up</h1>

                {/*Username field with example*/}
                <div className="form-group row">
                    <label htmlFor="usernameFld"
                           className="col-sm-2 col-form-label">
                        Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-username"
                               id="usernameFld"
                               placeholder="Alice"/>
                    </div>
                </div>

                {/*Password field with example*/}
                <div className="form-group row">
                    <label htmlFor="passwordFld"
                           className="col-sm-2 col-form-label">
                        Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
                               id="passwordFld"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                {/*Verify password field with example*/}
                <div className="form-group row">
                    <label htmlFor="verifyPasswordFld"
                           className="col-sm-2 col-form-label">
                        Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password-verify"
                               id="verifyPasswordFld"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                {/*Buttons for signing up or logging in*/}
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary btn-block wbdv-button wbdv-register"
                           href="/profile"
                           role="button">
                            Sign up</a>
                        <div>
                            <a href="/login"
                               className="wbdv-link wbdv-login">
                                Login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent