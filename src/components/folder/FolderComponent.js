import React from 'react';
import {connect} from 'react-redux'
import '../../App.css';

const FolderComponent = ({folder, deleteFolder}) =>

            <li className="list-group-item">
                    <span>
                        <div className="card-body">
                            <h4 className="card-title">{folder.title}</h4>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteFolder(folder.id)}>
                                Delete</button>
                        </div>
                    </span>
            </li>

const stateToPropertyMapper = (state) => ({});
const dispatchToPropertyMapper = (dispatch) => ({})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(FolderComponent)
