import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import SearchComponent from "./components/SearchComponent";
import Home from "./Home";
import SearchDetailsComponent from "./components/SearchDetailsComponent";
import ProfileComponent from "./components/ProfileComponent";

const state = {};
const reducers = combineReducers({
    reducer: state
});

const store = createStore(reducers);

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <a className="navbar-brand" href="/">Mind-Assistant</a>

                      <div className="collapse navbar-collapse">
                          <ul className="navbar-nav mr-auto">
                          </ul>
                          <form className="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2" type="search" placeholder="Search for Dad Jokes"
                                     aria-label="Search"/>
                              <Link to={"/search"}>
                                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
                          exact path={"/profiles/:profileId"}
                          render={(props) =>
                              <ProfileComponent
                                  {...props}
                                  profileId={props.match.params.profileId}
                              />
                          }/>
                      <Route path={"/"}>
                          <Home/>
                      </Route>
                  </Switch>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
