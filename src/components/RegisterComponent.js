import React from "react";

class RegisterComponent extends React.Component{

    register = () => {
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
                               placeholder="Alice"/>
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
                               placeholder="123qwe#$%"/>
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
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                {/*Buttons for signing up or logging in*/}
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label"></div>
                    <div className="col-sm-10">
                        <button className="btn-primary btn-block"
                           onClick={this.register}
                           role="button">
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

export default RegisterComponent