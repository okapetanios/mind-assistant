import React from 'react';
import {connect} from 'react-redux'
import '../App.css';

const FolderComponent = ({handleOnChange, saveCourseTitle, folder}) =>

            <li className="list-group-item">
                    <span>
                        <input
                            type="text"
                            className="form-control new-course-title"
                            placeholder="Folder Name"
                            onChange={handleOnChange}/>
                        <button
                            className="btn btn-success btn-sm mx-1"
                            onClick={saveCourseTitle}>Save</button>
                        <div className="card-body">
                            <h5 className="card-title">{folder}</h5>
                        </div>
                    </span>
            </li>

const stateToPropertyMapper = (state) => ({});
const dispatchToPropertyMapper = (dispatch) => ({})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(FolderComponent)
