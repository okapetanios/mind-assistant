import React from "react";
import {Link} from "react-router-dom";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.history.push(`/search/${this.props.keyword}`);
        this.setState({
            results: this.props.jokes
        })
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <ul className="list-group">
                    {this.props.jokes.map(joke =>
                        <Link to={`/search/${this.props.keyword}/details/${joke.id}`}>
                            <li className="list-group-item" key={joke.id} >
                                {joke.joke}
                            </li>
                        </Link>
                    )}
                    {this.props.jokes < 1 && <h1>No results found for {this.props.keyword}</h1>}
                </ul>
            </div>
        )
    }
}

export default SearchComponent