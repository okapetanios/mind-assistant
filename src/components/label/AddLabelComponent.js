import React from 'react';
import '../../App.css';
import {findCurrentUser} from "../../actions/userActions";
import {connect} from "react-redux";
import userService from "../../services/userService";

const UserService = new userService();

class AddLabelComponent extends React.Component {
    state = {
        existingLabel: "none",
        userLabels: this.props.labels
    };

    labelChanged = (e) => {
        this.setState({
            existingLabel: e.target.value
        })
    };

    //need to find the label before add
    addLabel = (label) => {
        // console.log(JSON.parse(label));
        this.props.updateLabels(JSON.parse(label))
    };

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="addLabel"
                           className="col-sm-2 col-form-label">
                        Existing Label
                    </label>
                    <div className="col-sm-9">
                        <select className="form-control"
                                id="addLabel"
                                placeholder={"none"}
                                value={this.state.existingLabel}
                                onChange={this.labelChanged}>
                            <option value={"none"}>None</option>
                            {this.state.userLabels.length > 0 && this.state.userLabels.map(label =>
                                <option key={label.id} value={JSON.stringify(label)}>{label.title}</option>
                            )}
                        </select>
                    </div>
                    <div className={"col-1"}>
                        <button className={"btn btn-primary"}
                                onClick={() => this.addLabel(this.state.existingLabel)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    labels: state.labels.labels
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(AddLabelComponent)
