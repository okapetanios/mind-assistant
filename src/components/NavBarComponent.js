import React from 'react';
import {Button, Dropdown, Form, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class NavBarComponent extends React.Component{
    render() {
        return (
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
                        <input value={this.props.keyword}
                               onChange={this.props.keyWordChange}
                               className="form-control mr-sm-2"
                               type="search"
                               placeholder="Search for Dad Jokes"
                               aria-label="Search"/>
                        <Link to={`/search/${this.props.keyword}`}>
                            <button className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit">
                                Search
                            </button>
                        </Link>
                    </form>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            {this.props.user.username}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item hidden={this.props.loggedIn}
                                           href="/login">
                                Login
                            </Dropdown.Item>
                            <Dropdown.Item hidden={this.props.loggedIn}
                                           href="/register">
                                Register
                            </Dropdown.Item>
                            <Dropdown.Item hidden={!this.props.loggedIn}
                                           href="/profile">
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={this.props.logout}
                                           hidden={!this.props.loggedIn}
                                           href={"/"}>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
});
const dispatchToPropertyMapper = (dispatch) => ({

});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(NavBarComponent)