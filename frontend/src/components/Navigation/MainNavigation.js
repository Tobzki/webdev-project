import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from '../../context/auth-context';

import './MainNavigation.css';


const mainNavigation = props => (
    <AuthContext.Consumer>
        {context => {
            return (
            <header className="main-navigation">
            <nav className="main-navigation_items">
                <ul>
                <li>
                        <NavLink to="/aboutUs">About us</NavLink>
                    </li>
                    {!context.token && ( 
                    <li>
                        <NavLink to="/auth">Login</NavLink>
                    </li>
                        )}
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                        {context.token && (
                            <React.Fragment>
                        <li>
                        <NavLink to="/bookings">Bookings</NavLink>
                        </li>
                    <li>
                        <button onClick={context.logout}>Logout</button>
                    </li>
                    </React.Fragment> 
                        )}
                </ul>
            </nav>
        </header>
        );
        
        }}
    
    </AuthContext.Consumer>
); 

export default mainNavigation;