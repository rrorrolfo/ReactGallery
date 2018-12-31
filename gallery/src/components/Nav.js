import React from "react";
import {NavLink} from "react-router-dom"; 

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="#">Ducks</NavLink></li>
                <li><NavLink to="#">Dogs</NavLink></li>
                <li><NavLink to="#">Birds</NavLink></li>
                <li><NavLink to="/search">Search for other photos</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;