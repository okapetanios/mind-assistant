import React from 'react';
import '../App.css';
import LabelListComponent from "./label/LabelListComponent";
import NoteListComponent from "./note/NoteListComponent";

const DefaultLayoutComponent = ({folderId, labelId, history}) =>
    <div className="App">
        <div className={"container"}>
            <br/>
            <div className={"row"}>
                <div className="col-3">
                    <LabelListComponent
                        folderId={folderId}
                        labelId={labelId}
                        history={history}
                    />
                </div>
                <div className="col-9">
                    <NoteListComponent
                        folderId={folderId}
                        labelId={labelId}
                        history={history}
                    />
                </div>
            </div>
        </div>
    </div>;

export default DefaultLayoutComponent;

