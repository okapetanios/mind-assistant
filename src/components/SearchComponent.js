import React from "react";
import {

    Link
} from "react-router-dom";
import SearchDetailsComponent from "./SearchDetailsComponent";
import { connect } from 'redux'



class SearchComponent extends React.Component {
    // I need to provide a list of dad jokes to SearchDetailsComonent.
    constructor(props) {
        super(props)
        this.state = {

        }


    }

    componentDidMount() {

        this.setState({
            results: this.props.jokes
        })

    }

    render() {
        return (

            <div>

                <ul className="list-group">

                    {
                        this.props.jokes.map(joke =>
                            <Link to={`/search/${this.props.keyword}/details/${joke.id}`}>
                                <li className="list-group-item" key={joke.id} >{joke.joke}
                                </li>
                            </Link>
                        )

                    }

                </ul>

            </div>


        )
    }
}
export default SearchComponent