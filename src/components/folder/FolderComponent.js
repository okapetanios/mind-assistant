import React from 'react';
import '../../App.css';
import './Folder.css'
import {Link} from "react-router-dom";

const FolderComponent = ({folder, deleteFolder}) =>
    <div className="col">
        <div className="card text-white bg-dark mb-3" sytle={"width:18rem;"}>
            <img className="card-img-top"
                 alt="Folder"
                 src="https://lh3.googleusercontent.com/proxy/sI4ikPulkiMpP2-EQ_Q5KGiMa5lBHfDcbvo1KIE_3SGy7PPcGIkA36abvINWjnLiWC0nVMf5OtILylCDDKT2vz6LWGGYIQ9wtiY1LODoWcLzCLMwCIxnk6zKFyVGwD8aMP4zGmxwf3s4veDQNCTrCUzbCIE"
            />
            <div className="card-body">
                <div className={"row"}>
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
                    </div>
                </div>
            </div>
        </div>
    </div>;

export default FolderComponent

