import React, { Component } from "react";
// import '../App.css';
import NoteListComponent from '../components/NoteListComponent'
import FolderListComponent from '../components/FolderListComponent'

class Home extends Component {


    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-2">
                        <FolderListComponent/>
                    </div>
                    <div className="col-10">
                        <NoteListComponent/>
                    </div>
                </div>
            </div>
        )
    }

}


export default Home;
