import React from 'react';
import NoteComponent from './NoteComponent';
import '../../App.css';
import {findCurrentUser} from "../../actions/userActions";
import {createNote, deleteNote, findNotesForGroup} from "../../actions/noteActions";
import {connect} from "react-redux";
import userService from "../../services/userService";
import noteService from "../../services/noteService";
import NewNoteComponent from "./NewNoteComponent";

const UserService = new userService();
const NoteService = new noteService();

class NoteListComponent extends React.Component {
    state = {
        user: {}
    };

    //TODO:
    //Figure out why the current user doesn't load on mount
    //Add functionality to determine if user or folder should be created

    componentDidMount() {
        this.props.findCurrentUser();
        // this.props.findNotesForUser(this.props.user.id);
        this.props.findNotesForUser(102);
        // console.log(this.props.user);
        // console.log(this.props.notes);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.user !== prevState.user){
            // console.log(this.props.user);
            // console.log(this.props.notes);
            this.setState({
                user: this.props.user
            });
            this.props.findNotesForUser(this.props.user.id);
        }
    }

    createUserNote= (note) => {
        this.props.createNoteForUser(this.props.user.id, note)
    };

    //TODO:
    //Figure out how to access folder id
    //Below information is a placeholder and not accurate
    createFolderNote= (note) => {
        const folderId = this.props.folder.id;
        this.props.createNoteForFolder(folderId, note)
    };

    deleteNote = (id) => {
        this.props.deleteNote(id)
    };

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <NewNoteComponent
                        createUserNote={this.createUserNote}
                        createFolderNote={this.createFolderNote}
                    />
                </li>
                <br/>
                {this.props.notes.map(note =>
                    <div key={note.id}>
                        <NoteComponent
                            deleteNote={this.deleteNote}
                            note={note}
                        />
                        <br/>
                    </div>
                )}
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    notes: state.notes.notes
});
const dispatchToPropertyMapper = (dispatch) => ({
    findCurrentUser: () => {
        UserService.findCurrentUser().then(user => {
            dispatch(findCurrentUser(user))
        })
    },
    findNotesForUser: (userId) => {
        NoteService.findNotesForUser(userId).then(notes => {
            dispatch(findNotesForGroup(notes))
        })
    },
    createNoteForUser: (userId, note) => {
        NoteService.createNoteForUser(userId,note).then(note => {
            dispatch(createNote(note))
        })
    },
    findNotesForFolder: (folderId) => {
        NoteService.findNotesForFolder(folderId).then(notes => {
            dispatch(findNotesForGroup(notes))
        })
    },
    createNoteForFolder: (folderId, note) => {
        NoteService.createNoteForFolder(folderId,note).then(note => {
            dispatch(createNote(note))
        })
    },
    deleteNote: (noteId) => {
        NoteService.deleteNote(noteId).then(status => {
            dispatch(deleteNote(noteId))
        })
    }
});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(NoteListComponent)