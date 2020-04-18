import React, { Component } from "react";
// import '../App.css';
import NoteListComponent from '../components/NoteListComponent'
import FolderListComponent from '../components/FolderListComponent'

class Home extends Component {


    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-4">
                        <FolderListComponent/>
                    </div>
                    <div className="col-6">
                        <NoteListComponent/>
                    </div>
                </div>
            </div>
        )
    }

}


export default Home;
