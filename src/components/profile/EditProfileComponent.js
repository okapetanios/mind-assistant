import React from "react";
import {connect} from "react-redux";
import userService from "../../services/userService";
import {findCurrentUser, logoutUser} from "../../actions/userActions";

const UserService = new userService();

class EditProfileComponent extends React.Component{
    componentDidMount() {
        this.props.findCurrentUser()
    }

    state = {
        user: this.props.user
    };

    logout = () => {
        this.props.logoutUser();
        this.props.history.push("/")
    };

    //TODO
    //add onChange functions for all fields

    //TODO
    //submit changes

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
                               placeholder="New Password (if applicable)"/>
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
                               placeholder={"First Name"}
                               value={this.props.user.fname}/>
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
                               placeholder={"Last Name"}
                               value={this.props.user.lname}/>
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
                                value={this.props.user.role}
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
                        <button className="btn btn-primary btn-block">
                            Submit
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
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(EditProfileComponent)
