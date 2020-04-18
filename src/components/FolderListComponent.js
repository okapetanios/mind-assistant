import React from 'react';
import FolderComponent from './FolderComponent';
import '../App.css';

class FolderListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            folder: {
                id: -1,
                title: 'New Folder'
            },

            folders: [
                {id: 123, title: "Folder 1"},
                {id: 124, title: "Folder 2"},
                {id: 125, title: "Folder 3"}
            ]
        }

    }

    createFolder = () => {
        this.state.folder.id = (new Date()).getTime();
        this.setState({
                          folders: [this.state.folder, ...this.state.folders]
                      })
    }

    titleChanged = (event) => {
        this.setState({
                          folder: {
                              title: event.target.value
                          }
                      })
    }

    deleteFolder = (id) => {
        this.setState({
            folders: this.state.folders.filter(folder => folder.id !== id)
        })
    }

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={this.titleChanged}
                        className="form-control"/>
                    <button onClick={this.createFolder} className="btn btn-primary btn-block">
                        Add Folder
                    </button>
                </li>
                {this.state.folders.map(
                    folder =>
                        <FolderComponent
                            deleteFolder={this.deleteFolder}
                            folder={folder}
                            key={folder.id}/>
                    )
                }
            </ul>
        )

    }
}

export default FolderListComponent;
