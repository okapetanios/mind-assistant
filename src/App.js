import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Dropdown, Form, FormControl,} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./containers/Home";
import SearchComponent from "./components/SearchComponent";
import SearchDetailsComponent from "./components/SearchDetailsComponent";
import EditProfileComponent from "./components/profile/EditProfileComponent";
import PublicProfileComponent from "./components/profile/PublicProfileComponent"
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import jokeReducer from "./reducers/jokeReducer";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import folderReducer from "./reducers/folderReducer";
import noteReducer from "./reducers/noteReducer";
import labelReducer from "./reducers/labelReducer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    reducers = combineReducers({
        jokes: jokeReducer,
        profile: profileReducer,
        user: userReducer,
        folders: folderReducer,
        notes: noteReducer,
        labels: labelReducer
    });

    store = createStore(this.reducers);

    keyWordChange = event =>
        this.setState({ keyword: event.target.value });

    render() {
        let provider = <><Provider store={this.store}>
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Mind-Assistant</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for Users" className="mr-sm-2"/>
                                <Button variant="outline-info">Search</Button>
                            </Form>
                            <Button variant="dark"></Button>
                            <form className="form-inline my-2 my-lg-0">
                                <input value={this.state.keyword}
                                       onChange={this.keyWordChange}
                                       className="form-control mr-sm-2"
                                       type="search"
                                       placeholder="Search for Dad Jokes"
                                       aria-label="Search"/>
                                <Link to={`/search/${this.state.keyword}`}>
                                    <button className="btn btn-outline-success my-2 my-sm-0"
                                            type="submit">
                                        Search
                                    </button>
                                </Link>
                            </form>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Log In
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </nav>

                    <Switch>


                        <Route exact path={"/"}
                               render={(props) =>
                                   <Home {...props}
                                   />
                               }
                        />


                        <Route
                            exact path={["/search",
                            "/search/:criteria"]}
                            render={(props) =>
                                <SearchComponent
                                    {...props}
                                    criteria={props.match.params.criteria}
                                />
                            }/>
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
                            exact path={"/profile/:profileId"}
                            render={(props) =>
                                <PublicProfileComponent
                                    {...props}
                                    profileId={props.match.params.profileId}
                                />
                            }/>
                        <Route
                            exact path={"/profile"}
                            render={(props) =>
                                <EditProfileComponent
                                    {...props}
                                />
                            }/>
                        <Route
                            exact path={"/login"}
                            render={(props) =>
                                <LoginComponent
                                    {...props}
                                />
                            }/>
                        <Route
                            exact path={"/register"}
                            render={(props) =>
                                <RegisterComponent
                                    {...props}
                                />
                            }/>
                        <Route path={"/"}>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider></>;
        return provider;
    }
}

export default App;
