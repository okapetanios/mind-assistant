import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
// import userService from "../../services/userService";
import profileService from "../../services/profileService";
import {findProfile} from "../../actions/profileActions";

// const UserService = new userService();
const ProfileService = new profileService();

class PublicProfileComponent extends React.Component {
    componentDidMount() {
        this.props.findProfile(this.props.profileId);
    };

    state = {
        profile: {id: 1, user: {username: "Testing"}}
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.profile.id === 1 && this.props.profile.id > 0){
            console.log(this.props.profile);
            this.setState({
                profile: this.props.profile
            })
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <br/>
                <div className="media">
                    <img src={this.state.profile.picture} className="mr-3" alt=""/>
                        <div className="media-body">
                            <h1>{this.state.profile.user.username}'s Profile</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="editInputEmail">Username: {"TBD USERS USERNAME"}</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editFirstName">First Name: "USER FIRSTNAME"</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editLastName">Last Name: "USER LASTNAME"</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formControlSelect">Role: "USER ROLE"</label>
                                </div>
                            </form>
                        </div>
                </div>
                <br/>
                <div >
                    <h3>Saved Notes</h3>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    profile: state.profile.profile
});
const dispatchToPropertyMapper = (dispatch) => ({
    findProfile: (userId) => {
        ProfileService.findProfileByUser(userId).then(profile => {
            dispatch(findProfile(profile))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(PublicProfileComponent)
