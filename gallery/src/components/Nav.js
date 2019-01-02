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
                    <li><NavLink to="/ducks" onClick={this.handleClick}>Ducks</NavLink></li>
                    <li><NavLink to="/dogs"
                    onClick={this.handleClick}>Dogs</NavLink></li>
                    <li><NavLink to="/birds"
                    onClick={this.handleClick}>Birds</NavLink></li>
                </ul>
            </nav>
        );
    }
    
}

export default Nav;