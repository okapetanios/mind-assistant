import React from "react";
import {Link} from "react-router-dom";

const SearchDetailsComponent = ({criteria, resultId, history}) =>
    <div className={"container-fluid"}>
        {/*
            Replace the resultId with the fetched joke
        */}
        <h1>{criteria}: {resultId}</h1>
        <br/>
        <h5>Users who have saved this joke:</h5>
        <ul>
            {/*
            Below should be fetched from local API
            Find users that currently have the particular resultId saved as public note
            */}
            <li>
                <Link to={"/profiles/user1"}>
                    User 1
                </Link>
            </li>
            <li>
                <Link to={"/profiles/user2"}>
                    User 2
                </Link>
            </li>
            <li>
                <Link to={"/profiles/user3"}>
                    User 3
                </Link>
            </li>
            <li>
                <Link to={"/profiles/user4"}>
                    User 4
                </Link>
            </li>
            <li>
                <Link to={"/profiles/user5"}>
                    User 5
                </Link>
            </li>
        </ul>
    </div>;

export default SearchDetailsComponent