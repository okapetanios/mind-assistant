import React from 'react';
import FolderComponent from './FolderComponent';
import '../App.css';

class FolderListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            folder: 'Folder'
        }

    }

    componentDidMount() {
        this.setState({
                          folder: 'A Folder'
                      });
    }

    // Handles the input field input
    handleOnChange = event => {
        this.setState({folder: event.target.value});
    };

    render() {
        return (
                <ul className="list-group">
                    <FolderComponent
                    handleOnChange = {this.state.handleOnChange}
                    saveCoursetitle = {this.state.saveCourseTitle}
                    folder={this.state.folder}/>
                </ul>
        )

    }
}

export default FolderListComponent;
