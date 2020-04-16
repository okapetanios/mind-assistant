import React, { Component } from "react";
// import '../App.css';
import NoteListComponent from '../components/NoteListComponent'
import FolderListComponent from '../components/FolderListComponent'

class Home extends Component {


    render() {
        return (
            <div className="App">
                <div className="col-3">
                    <FolderListComponent/>
                </div>
                <div className="col-9">
                    <NoteListComponent/>
                </div>
            </div>
        )
    }

}


export default Home;
