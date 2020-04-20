import React from 'react';
import '../App.css';
import LabelListComponent from "./label/LabelListComponent";
import NoteListComponent from "./note/NoteListComponent";

const DefaultLayoutComponent = () =>
    <div className="App">
        <br/>
        <div className={"row"}>
            <div className="col-1">

            </div>
            <div className="col-2">
                <LabelListComponent/>
            </div>
            <div className="col-6">
                <NoteListComponent/>
            </div>
        </div>
    </div>;

export default DefaultLayoutComponent