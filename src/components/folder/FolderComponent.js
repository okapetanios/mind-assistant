import React from 'react';
import '../../App.css';
import './Folder.css'
import {Link} from "react-router-dom";

const FolderComponent = ({folder, deleteFolder, select, editing, edit, editTitle, newTitle, editStatus,cancel, save}) =>

    <div className="col">
         <div className="card text-white bg-dark mb-3" sytle={"width:18rem;"}>
             {!editing &&
              <div className="card-body">
                  <div className={"row"}>
                      <i className="fas fa-4x fa-folder"/>
                      <div className={"col"}>
                          <Link className={"ma-link"}
                                to={`/folder/${folder.title}`}>
                              <h3 className="card-title">{folder.title}</h3>
                          </Link>
                      </div>
                      <div className={"col"}>
                          <button className={"btn btn-danger float-right"}
                                  onClick={() => deleteFolder(folder.id)}>
                              Delete
                          </button>
                          <button className={'btn btn-success float-right'}
                                  onClick={() => edit(folder)}>
                              <i className="fas fa-pencil-alt"></i>
                          </button>
                      </div>
                  </div>
              </div>
             }
             {editing &&
              <div className="card-body">
                  <div className={"row"}>
                      <div className={"col"}>
                          <span className={"form-group"}>
                            <input className={"form-control"}
                                   onChange={editTitle}
                                   value={newTitle}/>
                        </span>
                      </div>
                      <div className={"col"}>
                          <button className={"btn btn-danger float-right"}
                                  onClick={() => deleteFolder(folder.id)}>
                              Delete
                          </button>
                          <button className={"btn btn-primary"}
                                  onClick={() => save(folder.id)}>
                              <i className="fas fa-check"></i>
                          </button>
                          <button className={"btn btn-primary"}
                                  onClick={() => cancel()}>
                              <i className="fas fa-ban"></i>
                          </button>
                      </div>
                  </div>
              </div>
             }
         </div>
    </div>;

export default FolderComponent

