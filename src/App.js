import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import SearchComponent from "./components/SearchComponent";
import Home from "./Home";
import SearchDetailsComponent from "./components/SearchDetailsComponent";
import ProfileComponent from "./components/ProfileComponent";




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            jokes: []
        }
    }


    reducers = combineReducers({
        reducer: this.state
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
    }

    renderJokes = (search) => {
        this.setState({
            jokes: search.results
        })
    }

    keyWordChange = event =>
        this.setState({ keyword: event.target.value })

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
                                    <input value={this.state.keyword} onChange={this.keyWordChange} className="form-control mr-sm-2" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <Link to={"/search"}>
                                        <button onClick={this.searchJokes} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </Link>
                                </form>
                            </div>
                        </nav>

                        <Switch>
                            <Route
                                path={"/search"}
                                render={(props) =>
                                    <SearchComponent
                                        {...props}
                                        jokes={this.state.jokes}
                                        keyword={this.state.keyword === '' ? 'AllJokes' : this.state.keyword}


                                    />
                                } />
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
