import React from "react";

//TODO: Fix update issue
//edit button floats weird

const LabelComponent = ({label, active, select, editing, edit, editTitle, newTitle, editStatus, newStatus, cancel, save, deleteLabel}) =>
    <div>
        <li className={`list-group-item ${active ? 'active':''}`}
            onClick={() => select(label.id)}>
            <div className={"row"}>
                {!editing &&
                    <div className={"row"}>
                        <div className={"col"}>
                            <h6>{label.title}</h6>
                        </div>
                        <div className={"col-lg-1 col-md-4 col-sm-5"}>
                            <button className={`btn btn-outline-${active ? 'light':'dark'}`}
                                    onClick={() => edit(label)}>
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                    </div>
                }
                {editing &&
                    <div>
                        <span className={"form-group"}>
                            <input className={"form-control"}
                                   onChange={editTitle}
                                   value={newTitle}/>
                        </span>
                        <select className="form-control"
                                id="editRole"
                                placeholder={"private"}
                                onChange={editStatus}
                                value={newStatus}>
                            <option value={"private"}>Private</option>
                            <option value={"public"}>Public</option>
                        </select>
                    </div>
                }
                {active && editing &&
                    <div>
                        <button className={"btn btn-primary"}
                                onClick={() => save(label.id)}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button className={"btn btn-primary"}
                                onClick={() => deleteLabel(label.id)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <button className={"btn btn-primary"}
                                onClick={() => cancel()}>
                            <i className="fas fa-ban"></i>
                        </button>
                    </div>
                }
            </div>
        </li>
    </div>;

export default LabelComponent
