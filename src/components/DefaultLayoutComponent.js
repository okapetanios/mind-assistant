import React from 'react';
import '../App.css';
import LabelListComponent from "./label/LabelListComponent";
import NoteListComponent from "./note/NoteListComponent";

const DefaultLayoutComponent = ({folderId, labelId, history}) =>
    <div className="App">
        <br/>
        <div className={"row"}>
            <div className="col-1">

            </div>
            <div className="col-2">
                <LabelListComponent
                    folderId={folderId}
                    labelId={labelId}
                    history={history}
                />
            </div>
            <div className="col-6">
                <NoteListComponent
                    folderId={folderId}
                    labelId={labelId}
                    history={history}
                />
            </div>
        </div>
    </div>;

export default DefaultLayoutComponent;

