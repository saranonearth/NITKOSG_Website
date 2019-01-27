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
    DropdownItem, Button } from 'reactstrap';
import './Navigation.css'
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
            <Navbar  style={{backgroundColor: '#9872EC'}}light expand="md">
            <NavbarBrand>
                <NavLink to="/" className=" text-white" style={{fontWeight:'600',fontFamily:'Montserrat',textDecoration:'none'}}>NITKOSG</NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="m-3 text-white" to="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3 text-white" to="/events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3  text-white" to="/members">Members</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-3  text-white" to="/tutorials">Tutorials</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button href="https://nitkosg.slack.com" size="sm" style={{padding:'0.1rem 0.5rem',backgroundColor:'#B397FF',borderColor:'#ECE5FF'}} active>Join Slack</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}
 
export default Navigation;