import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import './Navigation.css';
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
        <Navbar style={{ backgroundColor: '#9872EC' }} light expand='md'>
          <Link
            to='/'
            className=' text-white'
            style={{ textDecoration: 'none' }}
          >
            NITKOSG
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link
                  onClick={this.toggle}
                  className='m-3 text-white'
                  to='/projects'
                >
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={this.toggle}
                  className='m-3 text-white'
                  to='/events'
                >
                  Events
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={this.toggle}
                  className='m-3  text-white'
                  to='/members'
                >
                  Members
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={this.toggle}
                  className='m-3  text-white'
                  to='/tutorials'
                >
                  Tutorials
                </Link>
              </NavItem>
              <NavItem>
                <Button
                  href='https://nitkosg.slack.com'
                  size='sm'
                  style={{
                    padding: '0.1rem 0.5rem',
                    backgroundColor: '#B397FF',
                    borderColor: '#ECE5FF'
                  }}
                  active
                >
                  Join Slack
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
