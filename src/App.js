import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { combineReducers, createStore } from "redux";
import {Provider} from "react-redux";
import jokeReducer from "./reducers/jokeReducer";
import Home from "./Home";
import SearchComponent from "./components/SearchComponent";
import SearchDetailsComponent from "./components/SearchDetailsComponent";
import ProfileComponent from "./components/ProfileComponent";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            jokes: []
        }
    }


    reducers = combineReducers({
        jokes: jokeReducer
    });

    store = createStore(this.reducers);

    searchJokes = () => {
        fetch(`https://icanhazdadjoke.com/search?term=${this.state.keyword}`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(this.renderJokes)
    };

    renderJokes = (search) => {
        this.setState({
            jokes: search.results
        })
    };

    keyWordChange = event =>
        this.setState({ keyword: event.target.value });

    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    <div>
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <a className="navbar-brand" href="/">Mind-Assistant</a>

                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input value={this.state.keyword}
                                           onChange={this.keyWordChange}
                                           className="form-control mr-sm-2"
                                           type="search"
                                           placeholder="Search  for Dad Jokes"
                                           aria-label="Search" />
                                    <Link to={"/search"}>
                                        <button onClick={this.searchJokes}
                                                className="btn btn-outline-success my-2 my-sm-0"
                                                type="submit">
                                            Search
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </nav>

                        <Switch>
                            <Route
                                exact path={["/search",
                                            "/search/:criteria"]}
                                render={(props) =>
                                    <SearchComponent
                                        {...props}
                                        jokes={this.state.jokes}
                                        keyword={this.state.keyword === '' ? 'AllJokes' : this.state.keyword}
                                    />
                                } />
                            <Route
                                exact path={"/search/:criteria/details/:resultId"}
                                render={(props) =>
                                    <SearchDetailsComponent
                                        {...props}
                                        criteria={props.match.params.criteria}
                                        resultId={props.match.params.resultId}
                                    />
                                }/>
                            <Route
                                exact path={"/profiles/:profileId"}
                                render={(props) =>
                                    <ProfileComponent
                                        {...props}
                                        profileId={props.match.params.profileId}
                                    />
                                }/>
                            <Route path={"/"}>
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
