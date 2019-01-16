import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/members">Members</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/tutorials">Tutorials</NavLink>
            </div>
            
         );
    }
}
 
export default Navigation;