import React, {Component} from "react";
import {NavLink} from "react-router-dom"; 

class Nav extends Component {

    // Handles the click event of the navigation
    handleClick = event => {

        const value = event.target.textContent.toLowerCase();
        this.props.displayImg(value);
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/ducks">Ducks</NavLink></li>
                    <li><NavLink to="/dogs">Dogs</NavLink></li>
                    <li><NavLink to="/birds">Birds</NavLink></li>
                    <li><NavLink to="#">Search for other photos</NavLink></li>
                </ul>
            </nav>
        );
    }
    
}

export default Nav;