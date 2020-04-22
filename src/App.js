import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./containers/Home";
import SearchComponent from "./components/search jokes/SearchComponent";
import SearchDetailsComponent from "./components/search jokes/SearchDetailsComponent";
import EditProfileComponent from "./components/profile/EditProfileComponent";
import PublicProfileComponent from "./components/profile/PublicProfileComponent"
import LoginComponent from "./components/account/LoginComponent";
import RegisterComponent from "./components/account/RegisterComponent";
import PrivacyComponent from "./components/privacy/PrivacyComponent"
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import jokeReducer from "./reducers/jokeReducer";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import folderReducer from "./reducers/folderReducer";
import noteReducer from "./reducers/noteReducer";
import labelReducer from "./reducers/labelReducer";
import DefaultLayoutComponent from "./components/DefaultLayoutComponent";
import NavBarComponent from "./components/NavBarComponent";

class App extends React.Component {
    reducers = combineReducers({
        jokes: jokeReducer,
        profile: profileReducer,
        user: userReducer,
        folders: folderReducer,
        notes: noteReducer,
        labels: labelReducer
    });

    store = createStore(this.reducers);

    render() {
        let provider = <><Provider store={this.store}>
            <Router>
                <div>
                    <NavBarComponent/>

                    <Switch>
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
                        <Route
                            exact path={["/folder/:folderId", "/folder/:folderId/label/:labelId"]}
                            render={(props) =>
                                <DefaultLayoutComponent
                                    {...props}
                                    folderId={props.match.params.folderId}
                                    labelId={props.match.params.labelId}
                                    history={props.history}
                                />
                            }/>
                        <Route
                            path={"/privacy-policy"}
                            render={(props) =>
                                <PrivacyComponent
                                    {...props}
                                />
                            }/>
                        <Route
                            path={"/"}
                            render={(props) =>
                                <Home
                                    {...props}
                                />
                            }/>
                    </Switch>
                </div>
            </Router>
        </Provider></>;
        return provider;
    }
}

export default App;
