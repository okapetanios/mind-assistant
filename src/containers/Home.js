import React, { Component } from "react";
import '../App.css';
import NoteListComponent from '../components/NoteListComponent'

class Home extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
            <NoteListComponent/>
                </header>
            </div>
        )
    }

}


export default Home;