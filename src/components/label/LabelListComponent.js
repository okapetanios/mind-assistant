import React from 'react';
import LabelComponent from './LabelComponent';
import '../../App.css';
import {findCurrentUser} from "../../actions/userActions";
import {connect} from "react-redux";
import userService from "../../services/userService";
import labelService from "../../services/labelService";
import {findLabelsForGroup} from "../../actions/labelActions";

const UserService = new userService();
const LabelService = new labelService();

class LabelListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            label: {
                id: -1,
                title: 'New Label'
            },
            labels: [
                {id: 123, title: "Label 1"},
                {id: 124, title: "Label 2"},
                {id: 125, title: "Label 3"}
            ]
        }

    }

    componentDidMount() {
        this.props.findCurrentUser();
        this.setState({
            user: this.props.user
        });
        this.props.findLabelsForUser(this.state.user.id)
    }

    createLabel = () => {
        this.state.label.id = (new Date()).getTime();
        this.setState({
                          labels: [this.state.label, ...this.state.labels]
                      })
    };

    titleChanged = (event) => {
        this.setState({
                          label: {
                              title: event.target.value
                          }
                      })
    };

    deleteLabel = (id) => {
        this.setState({
            labels: this.state.labels.filter(label => label.id !== id)
        })
    };

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={this.titleChanged}
                        className="form-control"/>
                    <button onClick={this.createLabel} className="btn btn-primary btn-block">
                        Add Label
                    </button>
                </li>
                {this.state.labels.map(
                    label =>
                        <LabelComponent
                            deleteLabel={this.deleteLabel}
                            label={label}
                            key={label.id}/>
                    )
                }
            </ul>
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
    },
    findLabelsForUser: (userId) => {
        LabelService.findLabelsForUser(userId).then(labels => {
            dispatch(findLabelsForGroup(labels))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LabelListComponent)