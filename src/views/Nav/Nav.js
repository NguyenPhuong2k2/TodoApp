import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active"> {/*activeClassName="selected" doi thanh ten class trong css*/}
                    Todos
                </NavLink>
                <NavLink to="/job" activeClassName="active">
                    Jobs
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
            </div>
        )
    }
}
export default Nav; 