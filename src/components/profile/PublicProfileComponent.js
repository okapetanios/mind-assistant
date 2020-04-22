import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import profileService from "../../services/profileService";
import {findProfile} from "../../actions/profileActions";

const ProfileService = new profileService();

class PublicProfileComponent extends React.Component {
    componentDidMount() {
        this.props.findProfile(this.props.profileId);
    };

    state = {
        profile: {id: 0, user: {username: "Testing"}},
        notes: [{id: 0, title: "Test", note: "Note"}],
        labels: [{id:0, title: "Test"}]
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.profile.id === 0 && this.props.profile.id > 0){
            // console.log(this.props.profile);
            // console.log(this.props.profile.user.notes);
            this.setState({
                              profile: this.props.profile,
                              notes: this.props.profile.user.notes.filter(note => note.status === "public"),
                              labels: this.props.profile.user.labels.filter(label => label.status === "public")
                          });
        }
    }

    //TODO: Add public labels to profile page

    render() {
        return (
            <div className={"container-fluid"}>
                
                <br/>
                <div className="media">
                    <img className="mr-3"
                         src={this.state.profile.picture}
                         alt="Display"
                         width="auto"
                         height={180}/>
                    <div className="media-body">
                        <h1>{this.state.profile.user.fname} {this.state.profile.user.lname}</h1>
                        <h6>{this.state.profile.user.username}</h6>
                        <br/>
                        About:
                        <p>{this.state.profile.bio}</p>
                    </div>
                </div>
                <br/>
                <div className={"text-center"}>
                    <h3>Saved Public Notes</h3>
                    <ul className="list-group">
                        {this.state.notes.map(note =>
                            <li className="list-group-item"
                                key={note.id}>
                                <h6>{note.title}</h6>
                            </li>
                        )}
                    </ul>
                </div>
                <br/>
                <div className={"text-center"}>
                    <h3>Saved Public Labels</h3>
                    <ul className="list-group">
                        {this.state.labels.map(label =>
                                                  <li className="list-group-item"
                                                      key={label.id}>
                                                      <h6>{label.title}</h6>
                                                      <p>{label.label}</p>
                                                  </li>
                        )}
                    </ul>
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
