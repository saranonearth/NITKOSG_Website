import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            isOpen: false
         };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() { 
        return (
        <div>
            <Navbar light expand="md">
            <NavbarBrand>
                <NavLink to="/">NITK_OSG</NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="m-3" to="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3" to="/events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3" to="/members">Members</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3" to="/tutorials">Tutorials</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}
 
export default Navigation;