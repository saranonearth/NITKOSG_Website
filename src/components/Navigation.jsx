import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <NavLink color="inherit" to="/">Home</NavLink>
                <NavLink color="inherit" to="/projects">Projects</NavLink>
                <NavLink color="inherit" to="/events">Events</NavLink>
                <NavLink color="inherit" to="/tutorials">Tutorials</NavLink>
                <NavLink color="inherit" to="/members">Members</NavLink>
            </div>
          );
    }
}
 
export default Navigation;